from flask import Flask, render_template, request
import requests

app = Flask(__name__)

API_KEY = "fd6255faaa0bd9608a971bc240b1b4d0"

@app.route("/", methods=["GET", "POST"])
def index():
    weather = None
    error = None

    if request.method == "POST":
        city = request.form.get("city")

        if city:
            url = "https://api.openweathermap.org/data/2.5/weather"
            params = {
                "q": city,
                "appid": API_KEY,
                "units": "metric"
            }

            response = requests.get(url, params=params)

            if response.status_code == 200:
                weather = response.json()
            else:
                error = "City not found or API error."

    return render_template("index.html", weather=weather, error=error)


if __name__ == "__main__":
    app.run(debug=True)
