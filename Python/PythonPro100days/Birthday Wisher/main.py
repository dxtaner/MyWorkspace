import datetime as dt
import pandas as pd
import random
import smtplib

MY_EMAIL = "" # Gmail uygulama maili
MY_PASSWORD = ""   # Gmail uygulama şifresi
SMTP_SERVER = "smtp.gmail.com"
SMTP_PORT = 587
# ---------------------------------------

now = dt.datetime.now()
today_tuple = (now.month, now.day)

data = pd.read_csv("birthdays.csv")

birthdays_dict = {(row["month"], row["day"]): row for (_, row) in data.iterrows()}

if today_tuple in birthdays_dict:
    birthday_person = birthdays_dict[today_tuple]
    name = birthday_person["name"]
    email = birthday_person["email"]

    letter_path = f"letter_templates/letter_{random.randint(1, 3)}.txt"
    with open(letter_path, "r", encoding="utf-8") as file:
        letter_contents = file.read()
        personalized_letter = letter_contents.replace("[NAME]", name)

    try:
        with smtplib.SMTP(SMTP_SERVER, SMTP_PORT) as connection:
            connection.starttls()  
            connection.login(MY_EMAIL, MY_PASSWORD)
            connection.sendmail(
                from_addr=MY_EMAIL,
                to_addrs=email,
                msg=f"Subject:🎉 Happy Birthday, {name}!\n\n{personalized_letter}"
            )
        print(f"✅ E-posta gönderildi: {email}")
    except Exception as e:
        print(f"⚠️ E-posta gönderiminde hata oluştu: {e}")
else:
    print("📅 Bugün doğum günü olan kimse yok.")
