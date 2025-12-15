from flask import Blueprint, render_template
from flask_login import login_required, current_user

main = Blueprint("main", __name__)

@main.route("/")
def index():
    return render_template("index.html")

@main.route("/secret")
@login_required
def secret():
    return render_template("secret.html", user=current_user)
