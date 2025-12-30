import pandas as pd
import smtplib
from datetime import datetime
from email.message import EmailMessage


EMAIL = "tanerozer16@gmail.com"
PASSWORD = "iopy ythp hqro hoko"

# EMAIL = "your_email@gmail.com"
# PASSWORD = "your_app_password"

def send_reminder(company, position, deadline):
    msg = EmailMessage()
    msg["Subject"] = "Job Application Reminder"
    msg["From"] = EMAIL
    msg["To"] = EMAIL
    msg.set_content(
        f"Reminder!\n\nCompany: {company}\nPosition: {position}\nDeadline: {deadline}"
    )

    with smtplib.SMTP_SSL("smtp.gmail.com", 465) as smtp:
        smtp.login(EMAIL, PASSWORD)
        smtp.send_message(msg)

def check_jobs():
    df = pd.read_csv("jobs.csv")
    today = datetime.today().date()

    for _, row in df.iterrows():
        deadline = datetime.strptime(row["deadline"], "%Y-%m-%d").date()
        days_left = (deadline - today).days

        if days_left <= 2 and row["status"] == "Pending":
            send_reminder(row["company"], row["position"], row["deadline"])

check_jobs()
