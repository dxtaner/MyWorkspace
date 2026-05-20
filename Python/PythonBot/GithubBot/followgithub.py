from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
from githubUserInfo import username, password

import time
import json
import os
import re
import random


# ---------------- AYARLAR ----------------

TARGET_USER = ""

FOLLOW_INTERVAL = 60
HEADLESS = False

FOLLOWED_FILE = "already_followed.json"
LOG_FILE = "follow_log.txt"


# ---------------- BOT ----------------

class GithubFollowerBot:

    def __init__(self, headless=False):

        chrome_options = Options()

        if headless:
            chrome_options.add_argument("--headless")

        chrome_options.add_argument("--start-maximized")

        service = Service(ChromeDriverManager().install())

        self.browser = webdriver.Chrome(service=service, options=chrome_options)

        self.username = username
        self.password = password

        self.followed = self.load_followed()

    # ---------------- TXT LOG ----------------

    def write_log(self, message):

        with open(LOG_FILE, "a", encoding="utf-8") as f:

            log_message = f"{time.strftime('%Y-%m-%d %H:%M:%S')} - {message}\n"

            f.write(log_message)

    # ---------------- TAKİP EDİLENLER ----------------

    def load_followed(self):

        if os.path.exists(FOLLOWED_FILE):

            with open(FOLLOWED_FILE, "r") as f:
                return set(json.load(f))

        return set()

    def save_followed(self):

        with open(FOLLOWED_FILE, "w") as f:
            json.dump(list(self.followed), f)

    # ---------------- LOGIN ----------------

    def signIn(self):

        self.browser.get("https://github.com/login")

        time.sleep(3)

        self.browser.find_element(By.NAME, "login").send_keys(self.username)

        self.browser.find_element(By.NAME, "password").send_keys(self.password)

        self.browser.find_element(By.NAME, "commit").click()

        time.sleep(4)

        print("Login successful")

        self.write_log("GitHub login successful")

    # ---------------- FOLLOW SAYISI ----------------

    def get_follow_counts(self, user):

        try:

            followers_elem = self.browser.find_element(
                By.XPATH, "//a[contains(@href,'followers')]/span"
            )

            following_elem = self.browser.find_element(
                By.XPATH, "//a[contains(@href,'following')]/span"
            )

            followers_count = int(re.sub(r"\D", "", followers_elem.text))
            following_count = int(re.sub(r"\D", "", following_elem.text))

            return followers_count, following_count

        except:

            return 0, 0

    # ---------------- FOLLOW ----------------

    def follow_user(self, user):

        if user in self.followed:

            print("Already followed:", user)
            self.write_log(f"Already followed: {user}")

            return

        try:

            self.browser.get(f"https://github.com/{user}")

            time.sleep(2)

            followers_count, following_count = self.get_follow_counts(user)

            print(user, "followers:", followers_count, "following:", following_count)

            self.write_log(
                f"{user} | followers:{followers_count} following:{following_count}"
            )

            if followers_count > 50 and following_count < 500:

                follow_btn = self.browser.find_element(
                    By.CSS_SELECTOR,
                    "input[value='Follow'], button[data-testid='follow-button']"
                )

                follow_btn.click()

                print("Followed:", user)

                self.write_log(f"FOLLOWED -> {user}")

                self.followed.add(user)

                self.save_followed()

                time.sleep(FOLLOW_INTERVAL)

            else:

                print("Skipped:", user)

                self.write_log(f"SKIPPED -> {user}")

                time.sleep(random.uniform(3, 6))

        except Exception as e:

            print("Error:", e)

            self.write_log(f"ERROR -> {user} -> {str(e)}")

    # ---------------- SAYFADAKİ KULLANICILAR ----------------

    def process_followers_page(self, page):

        url = f"https://github.com/{TARGET_USER}?page={page}&tab=followers"

        self.browser.get(url)

        time.sleep(3)

        users = []

        items = self.browser.find_elements(By.CSS_SELECTOR, ".d-table.table-fixed")

        for item in items:

            try:

                anchor = item.find_element(
                    By.CSS_SELECTOR,
                    "a[data-hovercard-type='user']"
                )

                user = anchor.get_attribute("href").split("/")[-1]

                users.append(user)

            except:
                continue

        return users

    # ---------------- FOLLOWERS GEZ ----------------

    def follow_target_followers(self):

        page = 1

        while True:

            print("\nScanning page:", page)

            self.write_log(f"Scanning page {page}")

            users = self.process_followers_page(page)

            if len(users) == 0:

                print("Followers finished")

                self.write_log("Followers finished")

                break

            for user in users:

                print("Checking:", user)

                self.follow_user(user)

            page += 1

    # ---------------- RUN ----------------

    def run(self):

        self.signIn()

        self.follow_target_followers()


# ---------------- ÇALIŞTIR ----------------

if __name__ == "__main__":

    bot = GithubFollowerBot(headless=HEADLESS)

    bot.run()
