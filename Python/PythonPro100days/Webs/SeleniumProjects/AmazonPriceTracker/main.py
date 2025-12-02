import requests
from bs4 import BeautifulSoup

URL = "https://www.amazon.com/dp/B08XXXXXXXX"   # ➜ Buraya ürün linki
HEADERS = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/115 Safari/537.36",
    "Accept-Language": "en-US,en;q=0.9"
}

def get_price():
    r = requests.get(URL, headers=HEADERS)
    soup = BeautifulSoup(r.text, "lxml")

    # Amazon’daki en yaygın fiyat alanları
    selectors = [
        "#priceblock_ourprice",
        "#priceblock_dealprice",
        "#price_inside_buybox",
        "span.a-offscreen"
    ]

    price_text = None
    for sel in selectors:
        el = soup.select_one(sel)
        if el:
            price_text = el.get_text(strip=True)
            break

    if not price_text:
        return None

    # Sadece sayıları çek
    import re
    raw = re.search(r"[\d.,]+", price_text)
    if not raw:
        return None

    num = raw.group(0)

    # Nokta/virgül formatı düzeltme
    if "," in num and "." in num:
        # Avrupai format
        if num.rfind(",") > num.rfind("."):
            num = num.replace(".", "").replace(",", ".")
        else:
            num = num.replace(",", "")
    else:
        if num.count(",") == 1 and len(num.split(",")[-1]) == 2:
            num = num.replace(",", ".")
        else:
            num = num.replace(",", "")

    return float(num)

# Programı çalıştır
price = get_price()
if price is None:
    print("Fiyat bulunamadı!")
else:
    print("Ürün Fiyatı:", price)
