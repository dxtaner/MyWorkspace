from data_manager import DataManager
from flight_search import FlightSearch
from notification_manager import NotificationManager
from config import ORIGIN_CITY
import datetime

today = datetime.date.today()
target_date = (today + datetime.timedelta(days=30)).isoformat()

data = DataManager()
fs = FlightSearch()
notifier = NotificationManager()

sheet = data.get_sheet_data()

print("Sheet data type:", type(sheet))
if isinstance(sheet, dict):
    print("Sheet returned dict (kontrol et):", sheet)
else:
    for row in sheet:
        row_id = row.get("id")
        city = row.get("city") or row.get("City") or "Unknown"
        iata = row.get("iataCode") or row.get("iata")
        lowest = float(row.get("lowestPrice") or row.get("lowest_price") or 999999)

        if not iata:
            print(f"{city} için IATA yok — atlanıyor.")
            continue

        try:
            res = fs.search(origin=ORIGIN_CITY, destination=iata, date=target_date)
        except Exception as e:
            print("Flight API hatası:", e)
            continue

        try:
            price = float(res["data"][0]["price"]["grandTotal"])
        except Exception as e:
            print(f"{city} için fiyat verisi alınamadı:", e)
            continue

        print(f"{city}: api fiyatı = {price} | sheet fiyatı = {lowest}")

        if price < lowest:
            msg = f"{city} için ucuz uçuş bulundu! Yeni fiyat: {price} — eski: {lowest}"
            notifier.send(msg)
            if row_id:
                try:
                    data.update_price(row_id, price)
                except Exception as e:
                    print("Sheet güncellenemedi:", e)
