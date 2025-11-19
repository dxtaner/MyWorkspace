import requests
from datetime import datetime
import os
from dotenv import load_dotenv
import time

load_dotenv()

PIXELA_ENDPOINT = "https://pixe.la/v1/users"
USERNAME = os.getenv("PIXELA_USERNAME")
TOKEN = os.getenv("PIXELA_TOKEN")
GRAPH_ID = "habit1" 

class HabitTracker:
    def __init__(self, username, token, graph_id):
        self.username = username
        self.token = token
        self.graph_id = graph_id
        self.headers = {"X-USER-TOKEN": self.token}
        self.graph_endpoint = f"{PIXELA_ENDPOINT}/{self.username}/graphs/{self.graph_id}"

    def create_user(self):
        """Kullanıcı oluşturur (tek seferlik)"""
        user_params = {
            "token": self.token,
            "username": self.username,
            "agreeTermsOfService": "yes",
            "notMinor": "yes"
        }
        response = requests.post(PIXELA_ENDPOINT, json=user_params)
        print(response.text)

    def add_pixel(self, date: str, quantity: str, retries=5):
        """Yeni pixel ekler, retry mantığı ile"""
        for attempt in range(1, retries + 1):
            pixel_data = {"date": date, "quantity": quantity}
            response = requests.post(self.graph_endpoint, json=pixel_data, headers=self.headers)
            result = response.json()
            if result.get("isSuccess"):
                print(f"Pixel ekleme başarılı: {result}")
                break
            else:
                print(f"Pixel ekleme reddedildi. Deneme {attempt}/{retries}. Tekrar deniyorum...")
                time.sleep(1) 
        else:
            print("Pixel ekleme başarısız oldu. Daha sonra tekrar dene.")

    def update_pixel(self, date: str, quantity: str):
        """Mevcut pixel günceller"""
        endpoint = f"{self.graph_endpoint}/{date}"
        data = {"quantity": quantity}
        response = requests.put(endpoint, json=data, headers=self.headers)
        print(f"Pixel güncelleme: {response.json()}")

    def delete_pixel(self, date: str):
        """Pixel siler"""
        endpoint = f"{self.graph_endpoint}/{date}"
        response = requests.delete(endpoint, headers=self.headers)
        print(f"Pixel silme: {response.json()}")


if __name__ == "__main__":
    tracker = HabitTracker(USERNAME, TOKEN, GRAPH_ID)
    
    today = datetime.now().strftime("%Y%m%d")
    
    tracker.add_pixel(today, "1")
    
    # Örnek: Pixel güncelle
    # tracker.update_pixel(today, "2")
    
    # Örnek: Pixel sil
    # tracker.delete_pixel(today)
