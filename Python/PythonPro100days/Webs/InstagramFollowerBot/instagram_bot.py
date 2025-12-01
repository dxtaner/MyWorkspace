import time
import random
import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# ------------------------ SETTINGS ------------------------
IG_USERNAME = ""
IG_PASSWORD = ""
TARGET_ACCOUNT = ""   # takipçilerini çekeceğin hesap
FOLLOW_LIMIT = 20              # güvenli limit (çok arttırma!)
CHROME_PROFILE = r"C:\Users\taner\AppData\Local\Google\Chrome\User Data\Default"

def wait(a=1.2, b=3.8):
    time.sleep(random.uniform(a, b))


def login(driver):
    driver.get("https://www.instagram.com/accounts/login/")
    wait(3, 5)

    try:
        driver.find_element(By.XPATH, "//button[text()='Only allow essential cookies']").click()
        wait()
    except:
        pass

    # Username
    user_box = WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.NAME, "username"))
    )
    user_box.send_keys(IG_USERNAME)
    wait()

    # Password
    pw_box = driver.find_element(By.NAME, "password")
    pw_box.send_keys(IG_PASSWORD)
    wait()

    # Login button
    driver.find_element(By.XPATH, "//button[@type='submit']").click()
    wait(5, 7)

    try:
        not_now = WebDriverWait(driver, 5).until(
            EC.element_to_be_clickable((By.XPATH, "//button[contains(text(),'Not Now')]"))
        )
        not_now.click()
    except:
        pass


def open_followers(driver):
    driver.get(f"https://www.instagram.com/{TARGET_ACCOUNT}/")
    wait(3, 5)

    followers_btn = WebDriverWait(driver, 20).until(
        EC.element_to_be_clickable((By.XPATH, "//a[contains(@href,'/followers')]"))
    )
    followers_btn.click()
    wait(3, 5)


def follow_people(driver, limit):
    modal = WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.XPATH, "//div[@role='dialog']"))
    )

    followed = 0
    last_height = 0

    while followed < limit:
        follow_buttons = driver.find_elements(By.XPATH, "//button/div/div[text()='Follow']/../../button")

        for btn in follow_buttons:
            if followed >= limit:
                break

            try:
                driver.execute_script("arguments[0].click();", btn)
                followed += 1
                print(f"[+] Followed {followed}/{limit}")
                wait(2, 4)

            except:
                wait(1, 2)
                continue

        driver.execute_script("arguments[0].scrollTop = arguments[0].scrollTop + 400", modal)
        wait(2, 3)


def main():
    options = uc.ChromeOptions()
    options.add_argument(f"--user-data-dir={CHROME_PROFILE}")

    driver = uc.Chrome(options=options)
    driver.maximize_window()

    login(driver)
    open_followers(driver)
    follow_people(driver, FOLLOW_LIMIT)

    print("✓ Follow işlemi tamamlandı.")
    driver.quit()


if __name__ == "__main__":
    main()
