from flask import Flask, render_template, request, redirect, url_for
from models import db, Product

app = Flask(__name__)

app.config["SQLALCHEMY_DATABASE_URI"] = "sqlite:///shop.db"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

# Flask 3.x uyumlu DB oluşturma
with app.app_context():
    db.create_all()


@app.route("/")
def index():
    products = Product.query.all()
    return render_template("index.html", products=products)


@app.route("/product/<int:product_id>")
def product(product_id):
    product = Product.query.get_or_404(product_id)
    return render_template("product.html", product=product)


@app.route("/add", methods=["GET", "POST"])
def add_product():
    if request.method == "POST":
        new_product = Product(
            name=request.form["name"],
            price=float(request.form["price"]),
            description=request.form["description"]
        )
        db.session.add(new_product)
        db.session.commit()
        return redirect(url_for("index"))

    return render_template("add_product.html")


if __name__ == "__main__":
    app.run(debug=True)
