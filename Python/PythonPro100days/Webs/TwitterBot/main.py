import time
import random
import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

# ----------------- AYARLAR -----------------
TW_EMAIL = ""
TW_USERNAME = ""
TW_PASSWORD = ""

CHROME_PROFILE = r"C:\Users\taner\AppData\Local\Google\Chrome\User Data\Default"
# --------------------------------------------

def human_wait(a=1.4, b=3.5):
    time.sleep(random.uniform(a, b))

def get_internet_speed(driver):
    driver.get("https://www.speedtest.net/")
    human_wait(3, 5)

    start_btn = WebDriverWait(driver, 20).until(
        EC.element_to_be_clickable((By.CLASS_NAME, "start-text"))
    )
    start_btn.click()

    time.sleep(45)

    down = driver.find_element(By.CLASS_NAME, "download-speed").text
    up = driver.find_element(By.CLASS_NAME, "upload-speed").text

    print(f"Download: {down} Mbps | Upload: {up} Mbps")
    return down, up


def login_twitter(driver):
    driver.get("https://twitter.com/login")
    human_wait(3, 5)

    # Email gir
    email_box = WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.NAME, "text"))
    )
    email_box.send_keys(TW_EMAIL)
    human_wait()
    driver.find_element(By.XPATH, "//span[text()='Next']").click()
    human_wait()

    try:
        username_box = WebDriverWait(driver, 4).until(
            EC.presence_of_element_located((By.NAME, "text"))
        )
        username_box.send_keys(TW_USERNAME)
        human_wait()
        driver.find_element(By.XPATH, "//span[text()='Next']").click()
        human_wait()
    except:
        pass

    pw_box = WebDriverWait(driver, 20).until(
        EC.presence_of_element_located((By.NAME, "password"))
    )
    pw_box.send_keys(TW_PASSWORD)
    human_wait()
    driver.find_element(By.XPATH, "//span[text()='Log in']").click()
    human_wait(4, 6)


def tweet(driver, down, up):
    human_wait(3, 4)

    tweet_text = (
        f"Hey ISP! My internet speed is terrible 😡\n"
        f"Download: {down} Mbps\n"
        f"Upload: {up} Mbps\n"
        f"#Internet #SpeedTest"
    )

    tweet_box = WebDriverWait(driver, 20).until(
        EC.presence_of_element_located(
            (By.XPATH, "//div[@aria-label='Tweet text']")
        )
    )
    tweet_box.click()
    tweet_box.send_keys(tweet_text)
    human_wait()

    driver.find_element(By.XPATH, "//span[text()='Post']").click()
    print("Tweet gönderildi! ✔")


def main():
    options = uc.ChromeOptions()
    options.add_argument(f"--user-data-dir={CHROME_PROFILE}")
    driver = uc.Chrome(options=options)
    driver.maximize_window()

    down, up = get_internet_speed(driver)

    login_twitter(driver)

    tweet(driver, down, up)

    driver.quit()


if __name__ == "__main__":
    main()
