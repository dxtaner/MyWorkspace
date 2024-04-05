from flask import Flask, render_template, request
import requests

api_key = "f3dcbfde56df119039dbdad640985aa4"
base_currency = "EUR"

app = Flask(__name__)


def get_exchange_rate(base, target):
    url = f"http://data.fixer.io/api/latest?access_key={api_key}&base={base}&symbols={target}"
    response = requests.get(url)
    if response.status_code == 200:
        data = response.json()
        if target in data["rates"]:
            return data["rates"][target]
    return None


@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        firstCurrency = request.form.get("firstCurrency")
        secondCurrency = request.form.get("secondCurrency")
        amount = float(request.form.get("amount", 0))

        firstValue = get_exchange_rate(base_currency, firstCurrency)
        secondValue = get_exchange_rate(base_currency, secondCurrency)

        if firstValue is None or secondValue is None:
            return render_template("index.html", error="Invalid currency symbol")

        result = (secondValue / firstValue) * amount
        result = round(result, 2)  # Round to 2 decimal places

        currencyInfo = {
            "firstCurrency": firstCurrency,
            "secondCurrency": secondCurrency,
            "amount": amount,
            "result": result
        }

        return render_template("index.html", info=currencyInfo)
    else:
        return render_template("index.html")


if __name__ == "__main__":
    app.run(debug=True)
