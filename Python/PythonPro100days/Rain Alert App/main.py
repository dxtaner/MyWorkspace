import requests
import os
from dotenv import load_dotenv
from twilio.rest import Client

# .env dosyasını yükle
load_dotenv()

OWM_API_KEY = os.getenv("OWM_API_KEY")
TWILIO_SID = os.getenv("TWILIO_SID")
TWILIO_AUTH = os.getenv("TWILIO_AUTH")
TWILIO_FROM = os.getenv("TWILIO_FROM")
MY_PHONE = os.getenv("MY_PHONE")

# Kendi konumunu gir
LAT = 40.1950    # Bursa örnek
LON = 29.0600

weather_params = {
    "lat": LAT,
    "lon": LON,
    "appid": OWM_API_KEY,
    "cnt": 4     
}

response = requests.get("https://api.openweathermap.org/data/2.5/forecast", params=weather_params)
response.raise_for_status()
weather_data = response.json()

will_rain = False
for hour_data in weather_data["list"]:
    condition = hour_data["weather"][0]["id"]
    if condition < 700:
        will_rain = True

if will_rain:
    client = Client(TWILIO_SID, TWILIO_AUTH)
    message = client.messages.create(
        body="🌧️ Bugün yağmur var! Şemsiyeni almayı unutma ☔",
        from_=TWILIO_FROM,
        to=MY_PHONE
    )
    print("SMS Gönderildi:", message.sid)
else:
    print("Yağmur beklenmiyor. SMS gönderilmedi.")
