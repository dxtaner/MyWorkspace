import requests
from bs4 import BeautifulSoup
import csv

URL = "https://quotes.toscrape.com/"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
}


def get_page(url):
    response = requests.get(url, headers=HEADERS)
    response.raise_for_status()
    return response.text


def parse_quotes(html):
    soup = BeautifulSoup(html, "html.parser")
    quotes_data = []

    quotes = soup.find_all("div", class_="quote")

    for quote in quotes:
        text = quote.find("span", class_="text").get_text(strip=True)
        author = quote.find("small", class_="author").get_text(strip=True)
        tags = [tag.get_text() for tag in quote.find_all("a", class_="tag")]

        quotes_data.append({
            "quote": text,
            "author": author,
            "tags": ", ".join(tags)
        })

    return quotes_data


def save_to_csv(data, filename="quotes.csv"):
    with open(filename, "w", newline="", encoding="utf-8") as file:
        writer = csv.DictWriter(file, fieldnames=data[0].keys())
        writer.writeheader()
        writer.writerows(data)


def main():
    print("🔍 Scraping started...")
    html = get_page(URL)
    data = parse_quotes(html)

    if data:
        save_to_csv(data)
        print(f"✅ {len(data)} quotes saved to quotes.csv")
    else:
        print("❌ No data found")


if __name__ == "__main__":
    main()
