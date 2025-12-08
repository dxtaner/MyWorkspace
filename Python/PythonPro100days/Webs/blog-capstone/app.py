import requests
from flask import Flask, render_template

app = Flask(__name__)

# Blog API
BLOG_URL = "https://api.npoint.io/c790b4d5cab58020d391"


# API verisini bir kere çek – performans için ideal
posts_data = requests.get(BLOG_URL).json()


@app.route("/")
def home():
    return render_template("index.html", posts=posts_data)


@app.route("/post/<int:id>")
def post_detail(id):
    selected_post = None
    for post in posts_data:
        if post["id"] == id:
            selected_post = post
            break
    return render_template("post.html", post=selected_post)


@app.route("/about")
def about():
    return render_template("about.html")


@app.route("/contact")
def contact():
    return render_template("contact.html")


if __name__ == "__main__":
    app.run(debug=True)
