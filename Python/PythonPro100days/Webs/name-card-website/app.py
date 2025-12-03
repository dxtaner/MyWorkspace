from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template(
        "index.html",
        name="Taner Özer",
        job="Software Developer",
        location="Bursa, Turkey",
        github="https://github.com/dxtaner",
        linkedin="https://www.linkedin.com/in/tanerozer16/",
        medium="https://medium.com/@dxtaner"
    )

if __name__ == "__main__":
    app.run(debug=True)
