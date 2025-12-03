import time
import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium_stealth import stealth

options = uc.ChromeOptions()
options.add_argument("--start-maximized")
options.add_argument("--disable-blink-features=AutomationControlled")

driver = uc.Chrome(options=options)

stealth(driver,
        languages=["en-US", "en"],
        vendor="Google Inc.",
        platform="Win32",
        webgl_vendor="Intel Inc.",
        renderer="Intel Iris OpenGL Engine",
        fix_hairline=True,
)

driver.get("https://orteil.dashnet.org/cookieclicker/")

WebDriverWait(driver, 20).until(
    EC.element_to_be_clickable((By.ID, "langSelect-EN"))
).click()

cookie = WebDriverWait(driver, 30).until(
    EC.presence_of_element_located((By.ID, "bigCookie"))
)

cookies_text = driver.find_element(By.ID, "cookies")

product_ids = [f"product{i}" for i in range(18, -1, -1)]
price_ids   = [f"productPrice{i}" for i in range(18, -1, -1)]

check_time = time.time() + 5

while True:
    cookie.click()

    if time.time() > check_time:
        count = int(cookies_text.text.split(" ")[0].replace(",", ""))

        for price_id, prod_id in zip(price_ids, product_ids):
            try:
                price = driver.find_element(By.ID, price_id).text.replace(",", "")
                if price.isdigit() and count >= int(price):
                    driver.find_element(By.ID, prod_id).click()
            except:
                pass

        check_time = time.time() + 5
