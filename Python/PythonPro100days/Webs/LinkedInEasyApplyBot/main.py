import time
import random
import undetected_chromedriver as uc
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException, ElementClickInterceptedException

# ------------------------------------------
# AYARLAR
# ------------------------------------------
EMAIL = "" # eposta adresi
PASSWORD = "" # sifre alanı
JOB_KEYWORD = "Nodejs Developer"
LOCATION = "Turkey"
MAX_APPLICATIONS = 10  # güvenli limit

CHROME_PROFILE_PATH = r"C:\Users\taner\AppData\Local\Google\Chrome\User Data\Default"
# ------------------------------------------


def human_wait(min_s=1.2, max_s=3.5):
    time.sleep(random.uniform(min_s, max_s))


def linkedin_login(driver):
    driver.get("https://www.linkedin.com/login")
    human_wait()

    driver.find_element(By.ID, "username").send_keys(EMAIL)
    human_wait()
    driver.find_element(By.ID, "password").send_keys(PASSWORD)
    human_wait()
    driver.find_element(By.XPATH, "//button[@type='submit']").click()


def search_jobs(driver):
    url = f"https://www.linkedin.com/jobs/search/?keywords={JOB_KEYWORD}&location={LOCATION}&f_AL=true"
    driver.get(url)
    human_wait(2, 4)


def apply_easy_apply(driver, applied_count):
    jobs = driver.find_elements(By.CSS_SELECTOR, ".job-card-container")

    for job in jobs:
        if applied_count >= MAX_APPLICATIONS:
            return applied_count

        try:
            job.click()
            human_wait(2, 4)

            try:
                apply_btn = driver.find_element(By.CSS_SELECTOR, "button.jobs-apply-button")
                apply_btn.click()
                human_wait()

            except NoSuchElementException:
                continue

            try:
                submit_btn = driver.find_element(By.CSS_SELECTOR, "button[aria-label*='Submit application']")
                submit_btn.click()
                applied_count += 1
                print(f"[+] Başvuruldu → {applied_count}")

                human_wait(2, 4)

            except NoSuchElementException:
                close_btn = driver.find_element(By.CSS_SELECTOR, "button[aria-label='Dismiss']")
                close_btn.click()
                human_wait()
                continue

        except Exception as e:
            print("Hata:", e)
            continue

    return applied_count


def main():
    options = uc.ChromeOptions()
    options.add_argument(f"--user-data-dir={CHROME_PROFILE_PATH}")

    driver = uc.Chrome(options=options)
    driver.maximize_window()

    linkedin_login(driver)
    human_wait(3, 6)

    search_jobs(driver)

    applied = 0
    while applied < MAX_APPLICATIONS:
        applied = apply_easy_apply(driver, applied)
        driver.execute_script("window.scrollBy(0, 600);")
        human_wait()

    print("\n✓ Günlük başvuru limiti tamamlandı.")
    driver.quit()


if __name__ == "__main__":
    main()
