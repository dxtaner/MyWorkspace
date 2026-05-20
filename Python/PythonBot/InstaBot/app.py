from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
import time
import json
import os
import logging

# ----------- AYARLAR -----------

USERNAME = ""
PASSWORD = ""

TARGET_USER = ""

FOLLOW_INTERVAL = 60

HEADLESS = False

FOLLOWED_FILE = "followed_users.json"
LOG_FILE = "instagram_bot.log"

# ----------- LOG -----------

logging.basicConfig(
    filename=LOG_FILE,
    level=logging.INFO,
    format="%(asctime)s - %(levelname)s - %(message)s"
)


class InstagramBot:

    def __init__(self):

        chrome_options = Options()

        if HEADLESS:
            chrome_options.add_argument("--headless")

        chrome_options.add_argument("--start-maximized")

        service = Service(ChromeDriverManager().install())

        self.browser = webdriver.Chrome(service=service, options=chrome_options)

        self.followed = self.load_followed()

    # ----------- KAYITLI TAKİPLER -----------

    def load_followed(self):

        if os.path.exists(FOLLOWED_FILE):
            with open(FOLLOWED_FILE, "r") as f:
                return set(json.load(f))

        return set()

    def save_followed(self):

        with open(FOLLOWED_FILE, "w") as f:
            json.dump(list(self.followed), f)

    # ----------- LOGIN -----------

    def login(self):

        self.browser.get("https://www.instagram.com/accounts/login/")

        time.sleep(5)

        username_input = self.browser.find_element(By.NAME, "username")
        password_input = self.browser.find_element(By.NAME, "password")

        username_input.send_keys(USERNAME)
        password_input.send_keys(PASSWORD)

        password_input.submit()

        time.sleep(8)

        logging.info("Login başarılı")

    # ----------- FOLLOWERS AÇ -----------

    def open_followers(self):

        self.browser.get(f"https://www.instagram.com/{TARGET_USER}/")

        time.sleep(5)

        followers = self.browser.find_element(By.PARTIAL_LINK_TEXT, "followers")

        followers.click()

        time.sleep(5)

    # ----------- SCROLL -----------

    def scroll_followers(self):

        dialog = self.browser.find_element(By.XPATH, "//div[@role='dialog']//ul")

        for i in range(10):

            self.browser.execute_script(
                "arguments[0].scrollTop = arguments[0].scrollHeight", dialog
            )

            time.sleep(2)

    # ----------- KULLANICI LİSTESİ -----------

    def get_users(self):

        links = self.browser.find_elements(By.XPATH, "//a[contains(@href,'/')]")

        users = []

        for link in links:

            href = link.get_attribute("href")

            if "instagram.com" in href:

                username = href.split("/")[-2]

                if username not in users and username != TARGET_USER:

                    users.append(username)

        return users

    # ----------- FOLLOWER / FOLLOWING SAYISI -----------

    def get_follow_counts(self, user):

        try:

            self.browser.get(f"https://www.instagram.com/{user}/")

            time.sleep(4)

            stats = self.browser.find_elements(By.XPATH, "//ul/li")

            followers = int(stats[1].text.split()[0].replace(",", ""))
            following = int(stats[2].text.split()[0].replace(",", ""))

            return followers, following

        except:

            return 0, 0

    # ----------- FOLLOW -----------

    def follow_user(self, user):

        if user in self.followed:
            logging.info(f"Zaten takip edilmiş: {user}")
            return

        followers, following = self.get_follow_counts(user)

        # ---- ŞARTLAR ----

        if 50 < followers < 100 and 50 < following < 500:

            try:

                follow_btn = self.browser.find_element(By.XPATH, "//button")

                if follow_btn.text.lower() == "follow":

                    follow_btn.click()

                    logging.info(
                        f"Follow edildi: {user} followers:{followers} following:{following}"
                    )

                    self.followed.add(user)

                    self.save_followed()

                    time.sleep(FOLLOW_INTERVAL)

            except Exception as e:

                logging.error(f"Follow hatası {user} {e}")

        else:

            logging.info(
                f"Atlandı: {user} followers:{followers} following:{following}"
            )

    # ----------- BOT -----------

    def run(self):

        self.login()

        while True:

            try:

                self.open_followers()

                self.scroll_followers()

                users = self.get_users()

                for user in users:

                    self.follow_user(user)

            except Exception as e:

                logging.error(f"Main loop hata {e}")

                time.sleep(10)


# ----------- ÇALIŞTIR -----------

if __name__ == "__main__":

    bot = InstagramBot()

    bot.run()