import requests
from bs4 import BeautifulSoup

class ZillowScraper:
    def __init__(self, url):
        self.url = url
        self.headers = {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)",
            "Accept-Language": "en-US,en;q=0.9",
        }

    def scrape(self):
        response = requests.get(self.url, headers=self.headers)
        soup = BeautifulSoup(response.text, "html.parser")

        cards = soup.select("article")

        all_addresses = []
        all_prices = []
        all_links = []

        for card in cards:
            address_tag = card.find("address")
            if not address_tag:
                continue
            address = address_tag.get_text().strip().replace("\n", " ")

            price_tag = card.select_one("span[data-test='property-card-price']")
            if not price_tag:
                continue
            price = price_tag.get_text().strip()

            link_tag = card.select_one("a[data-test='property-card-link']")
            if not link_tag:
                continue
            link = link_tag.get("href")
            if link.startswith("/"):
                link = "https://www.zillow.com" + link

            all_addresses.append(address)
            all_prices.append(price)
            all_links.append(link)

        return all_addresses, all_prices, all_links
