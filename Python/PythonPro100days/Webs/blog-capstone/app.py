import requests
from flask import Flask, render_template

app = Flask(__name__)

# Blog API
BLOG_URL = "https://api.npoint.io/c790b4d5cab58020d391"


@app.route("/")
def home():
    posts = requests.get(BLOG_URL).json()
    return render_template("index.html", posts=posts)


@app.route("/post/<int:id>")
def post_detail(id):
    posts = requests.get(BLOG_URL).json()
    selected_post = None
    for post in posts:
        if post["id"] == id:
            selected_post = post
            break
    return render_template("post.html", post=selected_post)


if __name__ == "__main__":
    app.run(debug=True)
