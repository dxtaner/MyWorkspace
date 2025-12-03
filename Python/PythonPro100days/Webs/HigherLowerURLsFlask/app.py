from flask import Flask, render_template, request, redirect, url_for
import random

app = Flask(__name__)

# Rastgele sayı oluştur
target_number = random.randint(1, 100)

# Ana sayfa
@app.route("/", methods=["GET", "POST"])
def index():
    global target_number
    message = ""
    
    if request.method == "POST":
        guess = int(request.form.get("guess"))
        if guess < target_number:
            message = "Higher! 🔼"
        elif guess > target_number:
            message = "Lower! 🔽"
        else:
            message = f"Correct! 🎉 The number was {target_number}."
            # Yeni oyun için sayıyı sıfırla
            target_number = random.randint(1, 100)
    
    return render_template("index.html", message=message)

if __name__ == "__main__":
    app.run(debug=True)
