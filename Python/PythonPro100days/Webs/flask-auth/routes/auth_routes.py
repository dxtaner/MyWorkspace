from flask import Blueprint, render_template, request, redirect, url_for, flash
from werkzeug.security import generate_password_hash, check_password_hash
from flask_login import login_user, logout_user, login_required

from extensions.database import db
from models.user import User

auth = Blueprint("auth", __name__)

# REGISTER
@auth.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        email = request.form.get("email")
        name = request.form.get("name")
        password = request.form.get("password")

        if User.query.filter_by(email=email).first():
            flash("Email already registered!", "danger")
            return redirect(url_for("auth.register"))

        hashed_pw = generate_password_hash(password, "pbkdf2:sha256", 8)

        new_user = User(email=email, name=name, password=hashed_pw)
        db.session.add(new_user)
        db.session.commit()

        login_user(new_user)
        flash("Registration successful!", "success")
        return redirect(url_for("main.index"))

    return render_template("register.html")


# LOGIN
@auth.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form.get("email")
        password = request.form.get("password")

        user = User.query.filter_by(email=email).first()

        if not user:
            flash("Email not found.", "danger")
            return redirect(url_for("auth.login"))

        if not check_password_hash(user.password, password):
            flash("Incorrect password.", "danger")
            return redirect(url_for("auth.login"))

        login_user(user)
        flash("Logged in successfully!", "success")
        return redirect(url_for("main.index"))

    return render_template("login.html")


# LOGOUT
@auth.route("/logout")
@login_required
def logout():
    logout_user()
    flash("Logged out!", "info")
    return redirect(url_for("main.index"))
