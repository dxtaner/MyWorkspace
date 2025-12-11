import requests
from flask import Flask, render_template, request, redirect, flash
import smtplib
import os
from datetime import datetime

app = Flask(__name__)
app.secret_key = "super-secret-key"

# Jinja2 için yıl fonksiyonu
@app.context_processor
def inject_now():
    return {'now': datetime.now}

# Blog API
BLOG_URL = "https://api.npoint.io/c790b4d5cab58020d391"
posts_data = requests.get(BLOG_URL).json()

@app.route("/")
def home():
    return render_template("index.html", posts=posts_data)

@app.route("/post/<int:id>")
def post_detail(id):
    selected_post = next((post for post in posts_data if post["id"] == id), None)
    return render_template("post.html", post=selected_post)

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact")
def contact():
    return render_template("contact.html")

@app.route("/contact", methods=["POST"])
def contact_post():
    name = request.form.get("name")
    email = request.form.get("email")
    phone = request.form.get("phone")
    message = request.form.get("message")

    email_text = f"""
    New Contact Message:

    Name: {name}
    Email: {email}
    Phone: {phone}

    Message:
    {message}
    """

    try:
        with smtplib.SMTP("smtp.gmail.com", 587) as connection:
            connection.starttls()
            connection.login(os.getenv("MY_EMAIL"), os.getenv("MY_PASSWORD"))
            connection.sendmail(
                from_addr=os.getenv("MY_EMAIL"),
                to_addrs=os.getenv("MY_EMAIL"),
                msg=f"Subject: New Contact Message\n\n{email_text}"
            )
        flash("Message sent successfully!", "success")
    except Exception as e:
        flash(f"Error sending message: {str(e)}", "danger")

    return redirect("/contact")

if __name__ == "__main__":
    app.run(debug=True)
