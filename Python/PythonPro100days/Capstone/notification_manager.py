import smtplib

class NotificationManager:
    def __init__(self):
        self.my_email = "" # mail hesabı
        self.password = "" # mail password

    def send_email(self, to_email, message):
        with smtplib.SMTP("smtp.gmail.com") as connection:
            connection.starttls()
            connection.login(self.my_email, self.password)
            connection.sendmail(
                from_addr=self.my_email,
                to_addrs=to_email,
                msg=f"Subject:Flight Deal!\n\n{message}"
            )
