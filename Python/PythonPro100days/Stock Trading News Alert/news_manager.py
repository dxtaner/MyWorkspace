import requests
import os
from dotenv import load_dotenv

load_dotenv()
NEWS_API_KEY = os.getenv("NEWS_API_KEY")


class NewsManager:
    """Şirketle ilgili haberleri çeker"""
    def __init__(self, company_name):
        self.company = company_name
        self.api_key = NEWS_API_KEY
        self.endpoint = "https://newsapi.org/v2/everything"

    def get_news(self):
        params = {
            "qInTitle": self.company,
            "apiKey": self.api_key,
            "language": "en",
            "sortBy": "publishedAt"
        }

        response = requests.get(self.endpoint, params=params)
        response.raise_for_status()
        articles = response.json()["articles"]

        return articles[:5]  # En iyi 5 haber
