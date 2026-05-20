from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from githubUserInfo import username, password
from webdriver_manager.chrome import ChromeDriverManager
import time


class Github:
    def __init__(self, headless=False):
        self.baseUrl = "https://github.com/"
        self.username = username
        self.password = password
        self.followers = []

        chrome_options = Options()
        if headless:
            chrome_options.add_argument("--headless")
        chrome_options.add_argument("--start-maximized")
        chrome_options.add_argument("--disable-notifications")
        chrome_options.add_argument("--disable-extensions")
        chrome_options.add_argument("--disable-gpu")

        # WebDriverManager ile otomatik driver yükleme
        service = Service(ChromeDriverManager().install())
        self.browser = webdriver.Chrome(service=service, options=chrome_options)

    def signIn(self):
        self.browser.get(self.baseUrl + "login")
        time.sleep(2)

        self.browser.find_element(By.NAME, "login").send_keys(self.username)
        self.browser.find_element(By.NAME, "password").send_keys(self.password)
        self.browser.find_element(By.NAME, "commit").click()
        time.sleep(2)

    def findRepositories(self, keyword):
        self.browser.get(self.baseUrl)
        time.sleep(2)

        searchInput = self.browser.find_element(By.NAME, "q")
        searchInput.send_keys(keyword)
        searchInput.send_keys(Keys.ENTER)
        time.sleep(2)

        repos = self.browser.find_elements(By.CSS_SELECTOR, ".repo-list li")

        for repo in repos:
            try:
                anchor = repo.find_element(By.TAG_NAME, 'a')
                paragraf = repo.find_element(By.TAG_NAME, 'p')
                repoName = anchor.text
                repoLink = anchor.get_attribute('href')
                description = paragraf.text

                r = {
                    "name": repoName,
                    "link": repoLink,
                    "description": description
                }

                print(r)
            except Exception as e:
                continue

    def loadFollowers(self):
        items = self.browser.find_elements(By.CSS_SELECTOR, '.d-table.table-fixed')

        for item in items:
            try:
                info_divs = item.find_elements(By.TAG_NAME, 'div')[1]
                spans = info_divs.find_elements(By.TAG_NAME, 'span')
                name = spans[0].text if len(spans) > 0 else ""
                user = spans[1].text if len(spans) > 1 else ""

                self.followers.append({
                    "name": name,
                    "username": user
                })
            except Exception as e:
                continue

    def getFollowers(self):
        self.browser.get(f"{self.baseUrl}{self.username}?tab=followers")
        time.sleep(2)
        self.loadFollowers()

        while True:
            try:
                pagination = self.browser.find_element(By.CLASS_NAME, "paginate-container")
                links = pagination.find_elements(By.TAG_NAME, "a")

                next_link = None
                for link in links:
                    if link.text.strip() == "Next":
                        next_link = link
                        break

                if next_link:
                    next_link.click()
                    time.sleep(2)
                    self.loadFollowers()
                else:
                    break
            except Exception:
                break

        for follower in self.followers:
            print(follower)
        print(f"Toplam Takipçi: {len(self.followers)}")

    def __del__(self):
        try:
            time.sleep(2)
            self.browser.quit()
        except:
            pass


# ---------- KULLANIM ----------
if __name__ == "__main__":
    app = Github(headless=False)  # headless=True ile arka planda çalışır
    app.signIn()
    app.getFollowers()
    # app.findRepositories("python")