import os
import requests
from datetime import datetime

from flask import Flask, render_template, request, redirect, flash, url_for
from flask_login import (
    LoginManager,
    login_user,
    logout_user,
    login_required,
    current_user
)
from werkzeug.security import generate_password_hash, check_password_hash

from models import db, User, Comment

# ----------------------------------
# APP
# ----------------------------------
app = Flask(__name__)
app.secret_key = "secret-key"

# ----------------------------------
# DATABASE (WINDOWS SAFE + SQLITE FIX)
# ----------------------------------
BASE_DIR = os.path.abspath(os.path.dirname(__file__))
INSTANCE_DIR = os.path.join(BASE_DIR, "instance")

# instance klasörü garanti
os.makedirs(INSTANCE_DIR, exist_ok=True)

DB_PATH = os.path.join(INSTANCE_DIR, "blog.db")

app.config["SQLALCHEMY_DATABASE_URI"] = f"sqlite:///{DB_PATH}"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

with app.app_context():
    db.create_all()

# ----------------------------------
# LOGIN
# ----------------------------------
login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = "login"

@login_manager.user_loader
def load_user(user_id):
    return db.session.get(User, int(user_id))

# ----------------------------------
# CONTEXT (❗ datetime HATASI ÇÖZÜLDÜ)
# ----------------------------------
@app.context_processor
def inject_now():
    return {"now": datetime.now}

# ----------------------------------
# POSTS (API)
# ----------------------------------
BLOG_URL = "https://api.npoint.io/c790b4d5cab58020d391"
posts = requests.get(BLOG_URL).json()

# ----------------------------------
# ROUTES
# ----------------------------------
@app.route("/")
def home():
    return render_template("index.html", posts=posts)

@app.route("/post/<int:id>", methods=["GET", "POST"])
def post(id):
    post_data = next(p for p in posts if p["id"] == id)
    comments = Comment.query.filter_by(post_id=id).all()

    if request.method == "POST":
        if not current_user.is_authenticated:
            flash("Login required")
            return redirect(url_for("login"))

        comment = Comment(
            text=request.form["comment"],
            author=current_user,
            post_id=id
        )
        db.session.add(comment)
        db.session.commit()
        return redirect(url_for("post", id=id))

    return render_template(
        "post.html",
        post=post_data,
        comments=comments
    )

@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        if User.query.filter_by(email=request.form["email"]).first():
            flash("Email already exists")
            return redirect(url_for("login"))

        user = User(
            name=request.form["name"],
            email=request.form["email"],
            password=generate_password_hash(
                request.form["password"],
                method="pbkdf2:sha256",
                salt_length=8
            )
        )
        db.session.add(user)
        db.session.commit()
        login_user(user)
        return redirect(url_for("home"))

    return render_template("register.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        user = User.query.filter_by(email=request.form["email"]).first()

        if not user or not check_password_hash(
            user.password,
            request.form["password"]
        ):
            flash("Wrong credentials")
            return redirect(url_for("login"))

        login_user(user)
        return redirect(url_for("home"))

    return render_template("login.html")

@app.route("/logout")
@login_required
def logout():
    logout_user()
    return redirect(url_for("home"))


@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        name = request.form["name"]
        email = request.form["email"]
        message = request.form["message"]

        msg = EmailMessage()
        msg["Subject"] = "New Contact Message"
        msg["From"] = MY_EMAIL
        msg["To"] = MY_EMAIL
        msg.set_content(
            f"Name: {name}\n"
            f"Email: {email}\n\n"
            f"Message:\n{message}"
        )

        try:
            with smtplib.SMTP("smtp.gmail.com", 587) as server:
                server.starttls()
                server.login(MY_EMAIL, MY_PASSWORD)
                server.send_message(msg)

            flash("Message sent successfully!")
        except Exception as e:
            flash("Error sending message")

        return redirect("/contact")

    return render_template("contact.html")



# ----------------------------------
# RUN
# ----------------------------------
if __name__ == "__main__":
    app.run(debug=True)
