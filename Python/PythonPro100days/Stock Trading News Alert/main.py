from stock_manager import StockManager
from news_manager import NewsManager
from utils import format_news

STOCK = "TSLA"
COMPANY_NAME = "Tesla"


def main():
    # Hisse fiyatını al
    stock = StockManager(STOCK)
    percent, yesterday, day_before = stock.get_price_difference()
    print(f"{STOCK} fiyat değişimi: {percent}%")
    print(f"Önceki kapanış: {day_before}, Dün kapanış: {yesterday}")

    # Haberleri al
    news = NewsManager(COMPANY_NAME)
    articles = news.get_news()

    # Haberleri formatla ve yazdır
    messages = format_news(STOCK, percent, articles)
    print("\n--- Son Haberler ---")
    for msg in messages:
        print(msg)
        print("-" * 50)


if __name__ == "__main__":
    main()
