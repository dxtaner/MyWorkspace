import requests
from datetime import datetime
import smtplib
import time

MY_EMAIL = ""
MY_PASSWORD = ""
MY_LAT = 40.1885      
MY_LONG = 29.0610    

def iss_is_overhead():
    """ISS konumunu kontrol eder, senin yakınındaysa True döner."""
    response = requests.get(url="http://api.open-notify.org/iss-now.json")
    response.raise_for_status()
    data = response.json()

    iss_latitude = float(data["iss_position"]["latitude"])
    iss_longitude = float(data["iss_position"]["longitude"])

    if (MY_LAT - 5) <= iss_latitude <= (MY_LAT + 5) and (MY_LONG - 5) <= iss_longitude <= (MY_LONG + 5):
        return True
    return False


def is_night():
    """Gündüz/gece kontrolü yapar. Geceyse True döner."""
    parameters = {
        "lat": MY_LAT,
        "lng": MY_LONG,
        "formatted": 0,
    }

    response = requests.get("https://api.sunrise-sunset.org/json", params=parameters)
    response.raise_for_status()
    data = response.json()

    sunrise = int(data["results"]["sunrise"].split("T")[1].split(":")[0])
    sunset = int(data["results"]["sunset"].split("T")[1].split(":")[0])

    time_now = datetime.utcnow().hour

    if time_now >= sunset or time_now <= sunrise:
        return True
    return False


def send_email():
    """E-posta gönderimi"""
    with smtplib.SMTP("smtp.gmail.com", 587) as connection:
        connection.starttls()
        connection.login(MY_EMAIL, MY_PASSWORD)
        connection.sendmail(
            from_addr=MY_EMAIL,
            to_addrs=MY_EMAIL,
            msg="Subject:ISS Overhead Notification 🚀\n\nLook up! The ISS is above you in the sky!"
        )


while True:
    time.sleep(60)  
    try:
        if iss_is_overhead() and is_night():
            send_email()
            print("📩 ISS yakınında! E-posta gönderildi.")
        else:
            print("⏳ Henüz ISS yakınında değil...")
    except Exception as e:
        print(f"⚠️ Hata: {e}")
