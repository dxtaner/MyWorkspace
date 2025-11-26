import requests
from bs4 import BeautifulSoup
import smtplib

def get_product_info(url, headers):
    """Ürün adı ve fiyatını çeker"""
    response = requests.get(url, headers=headers)
    soup = BeautifulSoup(response.text, "lxml")

    title_tag = soup.select_one("#productTitle")
    price_tag = soup.select_one(".a-offscreen")

    if not title_tag or not price_tag:
        return None, None

    product_name = title_tag.get_text(strip=True)
    price_text = price_tag.get_text(strip=True).replace('$','').replace(',','')
    
    try:
        product_price = float(price_text)
    except ValueError:
        product_price = None

    return product_name, product_price

def send_email(sender, password, recipient, subject, body):
    """E-posta gönderir"""
    message = f"Subject: {subject}\n\n{body}"
    with smtplib.SMTP("smtp.gmail.com", 587) as connection:
        connection.starttls()
        connection.login(sender, password)
        connection.sendmail(sender, recipient, msg=message.encode('utf-8'))
