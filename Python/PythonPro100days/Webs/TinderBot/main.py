import time
import random
import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.common.exceptions import NoSuchElementException, ElementClickInterceptedException

FB_EMAIL = "facebook_emailiniz"
FB_PASSWORD = "facebook_sifreniz"
CHROME_PROFILE_PATH = r"C:\Users\taner\AppData\Local\Google\Chrome\User Data\Default"
MAX_LIKES = 20 

def human_wait(min_s=1.5, max_s=4.0):
    time.sleep(random.uniform(min_s, max_s))

def tinder_login(driver):
    driver.get("https://tinder.com")
    WebDriverWait(driver, 20).until(
        EC.element_to_be_clickable((By.XPATH, "//button[contains(text(),'Log in')]"))
    ).click()
    human_wait()

    fb_btn = WebDriverWait(driver, 20).until(
        EC.element_to_be_clickable((By.XPATH, "//span[text()='Log in with Facebook']/.."))
    )
    fb_btn.click()
    human_wait(2,3)

    driver.switch_to.window(driver.window_handles[1])

    WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.ID, "email"))
    ).send_keys(FB_EMAIL)
    driver.find_element(By.ID, "pass").send_keys(FB_PASSWORD)
    driver.find_element(By.NAME, "login").click()
    human_wait(5)

    driver.switch_to.window(driver.window_handles[0])

def dismiss_popups(driver):
    try:
        WebDriverWait(driver,5).until(
            EC.element_to_be_clickable((By.XPATH,"//button[contains(text(),'Not interested')]"))
        ).click()
    except:
        pass
    try:
        driver.find_element(By.XPATH,"//button[contains(text(),'Allow')]").click()
    except:
        pass
    try:
        driver.find_element(By.XPATH,"//button[contains(text(),'No Thanks')]").click()
    except:
        pass

def hit_like(driver, max_likes):
    likes = 0
    while likes < max_likes:
        try:
            like_btn = WebDriverWait(driver,5).until(
                EC.element_to_be_clickable((By.XPATH,"//button[@aria-label='Like']"))
            )
            like_btn.click()
            likes += 1
            print(f"[+] Liked {likes}/{max_likes}")
            human_wait()
        except (NoSuchElementException, ElementClickInterceptedException):
            print("[!] Like button not found, skipping...")
            human_wait(2,3)
            continue

def main():
    options = uc.ChromeOptions()
    options.add_argument(f"--user-data-dir={CHROME_PROFILE_PATH}")

    driver = uc.Chrome(options=options)
    driver.maximize_window()

    tinder_login(driver)
    human_wait(3,5)
    dismiss_popups(driver)
    hit_like(driver, MAX_LIKES)

    print("✓ Günlük like limiti tamamlandı.")
    driver.quit()

if __name__ == "__main__":
    main()
