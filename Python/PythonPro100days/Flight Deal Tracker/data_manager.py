import requests
from config import SHEETY_ENDPOINT

class DataManager:
    def __init__(self):
        self.endpoint = SHEETY_ENDPOINT

    def get_sheet_data(self):
        """
        Sheety endpoint'ine GET isteği atar ve 'prices' listesini döner.
        Eğer endpoint farklı ise (ör. /flightDeals yerine /flightDeals/prices) config.py'yi güncelle.
        """
        r = requests.get(self.endpoint)
        r.raise_for_status()
        data = r.json()
        if "prices" in data:
            return data["prices"]
        if isinstance(data, list):
            return data
        return data

    def update_price(self, row_id, price):
        body = {"price": {"lowestPrice": price}}
        r = requests.put(f"{self.endpoint}/{row_id}", json=body)
        r.raise_for_status()

    def update_iata(self, row_id, code):
        body = {"price": {"iataCode": code}}
        r = requests.put(f"{self.endpoint}/{row_id}", json=body)
        r.raise_for_status()
