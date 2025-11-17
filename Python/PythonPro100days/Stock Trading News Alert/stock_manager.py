import requests
import os
from dotenv import load_dotenv

load_dotenv()
STOCK_API_KEY = os.getenv("STOCK_API_KEY")


class StockManager:
    """Hisse senedi fiyatlarını alır ve yüzde değişimi hesaplar"""
    def __init__(self, symbol):
        self.symbol = symbol
        self.api_key = STOCK_API_KEY
        self.endpoint = "https://www.alphavantage.co/query"

    def get_price_difference(self):
        params = {
            "function": "TIME_SERIES_DAILY",
            "symbol": self.symbol,
            "apikey": self.api_key
        }

        response = requests.get(self.endpoint, params=params)
        response.raise_for_status()
        data = response.json()["Time Series (Daily)"]

        prices = list(data.values())
        yesterday = float(prices[0]["4. close"])
        day_before = float(prices[1]["4. close"])

        difference = yesterday - day_before
        percentage = (difference / day_before) * 100

        return round(percentage, 2), yesterday, day_before
