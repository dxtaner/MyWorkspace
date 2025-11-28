from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

class FormFiller:
    def __init__(self, form_url):
        self.driver = webdriver.Chrome()
        self.wait = WebDriverWait(self.driver, 10)
        self.form_url = form_url

    def fill(self, address, price, link):
        self.driver.get(self.form_url)

        inputs = self.wait.until(
            EC.presence_of_all_elements_located(
                (By.CSS_SELECTOR, "input.whsOnd.zHQkBf, textarea.quantumWizTextinputPapertextareaInput")
            )
        )

        if len(inputs) < 3:
            raise Exception("Form input sayısı 3 değil. Linkin 'viewform' olduğundan emin ol.")

        inputs[0].send_keys(address)
        inputs[1].send_keys(price)
        inputs[2].send_keys(link)

        submit_btn = self.driver.find_element(
            By.CSS_SELECTOR,
            ".uArJ5e.UQuaGc.Y5sE8d"
        )
        submit_btn.click()

        another = self.wait.until(
            EC.element_to_be_clickable(
                (By.LINK_TEXT, "Submit another response")
            )
        )
        another.click()
