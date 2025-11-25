import requests
from config import AMADEUS_API_KEY, AMADEUS_API_SECRET, AMADEUS_ENV

class FlightSearch:
    def __init__(self):
        self.base = "https://test.api.amadeus.com" if AMADEUS_ENV.lower() == "test" else "https://api.amadeus.com"
        self.token = self.get_token()

    def get_token(self):
        url = f"{self.base}/v1/security/oauth2/token"
        data = {
            "grant_type": "client_credentials",
            "client_id": AMADEUS_API_KEY,
            "client_secret": AMADEUS_API_SECRET
        }
        headers = {"Content-Type": "application/x-www-form-urlencoded"}

        r = requests.post(url, data=data, headers=headers)

        print("\n=== AMADEUS TOKEN DEBUG ===")
        print("URL:", url)
        print("Status:", r.status_code)
        print("Response:", r.text)
        print("===========================\n")

        try:
            json_data = r.json()
        except ValueError:
            raise Exception("Amadeus token endpoint'i JSON döndürmedi. URL veya network hatası olabilir.")

        if "access_token" not in json_data:
            err = json_data.get("error_description") or json_data.get("error") or str(json_data)
            raise Exception(f"Amadeus token alınamadı: {err}")

        return json_data["access_token"]

    def search(self, origin, destination, date):
        url = (
            f"{self.base}/v2/shopping/flight-offers?"
            f"originLocationCode={origin}&destinationLocationCode={destination}"
            f"&departureDate={date}&adults=1&max=5"
        )
        headers = {"Authorization": f"Bearer {self.token}"}
        r = requests.get(url, headers=headers)

        print("\n=== AMADEUS FLIGHT DEBUG ===")
        print("URL:", url)
        print("Status:", r.status_code)
        print("Response snippet:", r.text[:800]) 
        print("===========================\n")

        r.raise_for_status()
        return r.json()
