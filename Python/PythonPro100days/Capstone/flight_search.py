import requests
import os
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv("TEQUILA_API_KEY")

class FlightSearch:
    TEQUILA_LOCATION_ENDPOINT = "https://tequila-api.kiwi.com/locations/query"

    def get_iata_code(self, city_name):
        headers = {"apikey": API_KEY}
        params = {"term": city_name, "location_types": "city"}
        response = requests.get(url=self.TEQUILA_LOCATION_ENDPOINT, headers=headers, params=params)
        data = response.json()
        code = data["locations"][0]["code"]
        return code

    def check_flight(self, origin_city_code, destination_city_code, max_price):
        """
        Basit örnek uçuş kontrolü
        Burada gerçek uçuş API kullanabiliriz
        """
        # Örnek uçuş verisi
        flight_info = {
            "price": 180,
            "origin_city": origin_city_code,
            "destination_city": destination_city_code,
            "departure_date": "2025-12-01",
            "return_date": "2025-12-10"
        }
        if flight_info["price"] <= max_price:
            return flight_info
        return None
