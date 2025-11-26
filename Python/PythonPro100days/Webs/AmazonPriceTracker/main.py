from config import EMAIL, PASSWORD, PRODUCT_URL, DESIRED_PRICE, HEADERS
from utils import get_product_info, send_email

def main():
    product_name, product_price = get_product_info(PRODUCT_URL, HEADERS)

    if not product_name or not product_price:
        print("Ürün adı veya fiyat bulunamadı.")
        return

    print(f"{product_name} - {product_price}$")

    if product_price < DESIRED_PRICE:
        subject = "Amazon Fiyat Alarmı!"
        body = f"{product_name} şu an {product_price}$ fiyatında!\nHemen kontrol et: {PRODUCT_URL}"
        send_email(EMAIL, PASSWORD, EMAIL, subject, body)
        print("E-posta gönderildi! 📩")
    else:
        print(f"Fiyat {DESIRED_PRICE}$'ın üzerinde, e-posta gönderilmedi.")

if __name__ == "__main__":
    main()
