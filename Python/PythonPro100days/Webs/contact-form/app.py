from flask import Flask, render_template, request
import smtplib

app = Flask(__name__)

MY_EMAIL = "your@gmail.com"
MY_PASSWORD = "your-app-password"   # Google App Password kullanmalısın.
# MY_EMAIL = "tanerozer16@gmail.com"
# MY_PASSWORD = "iopy ythp hqro hoko"

@app.route("/")
def home():
    return render_template("index.html")


@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        message = request.form["message"]

        send_email(name, email, message)

        return render_template("contact.html", msg_sent=True)

    return render_template("contact.html", msg_sent=False)


def send_email(name, email, message):
    email_message = f"Subject:New Contact Message\n\nName: {name}\nEmail: {email}\nMessage:\n{message}"

    with smtplib.SMTP("smtp.gmail.com") as connection:
        connection.starttls()
        connection.login(MY_EMAIL, MY_PASSWORD)
        connection.sendmail(
            from_addr=MY_EMAIL,
            to_addrs=MY_EMAIL,
            msg=email_message.encode("utf-8")
        )


if __name__ == "__main__":
    app.run(debug=True)
