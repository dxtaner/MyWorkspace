import os

EMAIL = os.environ.get("")
PASSWORD = os.environ.get("")
PRODUCT_URL = "https://www.amazon.com/dp/B08ML2QXJT/"
DESIRED_PRICE = 50  # Alarm fiyatı

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/109.0.0.0 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9"
}
