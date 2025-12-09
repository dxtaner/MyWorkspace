from flask import Flask, render_template, redirect, url_for
from flask_wtf import FlaskForm
from wtforms import StringField, URLField, SelectField, SubmitField
from wtforms.validators import DataRequired, URL
import csv

app = Flask(__name__)
app.config['SECRET_KEY'] = 'your-secret-key'

class CafeForm(FlaskForm):
    name = StringField("Cafe Name", validators=[DataRequired()])
    map_url = URLField("Google Maps URL", validators=[DataRequired(), URL()])
    img_url = URLField("Image URL", validators=[DataRequired(), URL()])
    coffee = SelectField("Coffee Rating", choices=["☕","☕☕","☕☕☕","☕☕☕☕"], validators=[DataRequired()])
    wifi = SelectField("Wifi Rating", choices=["✘","💪","💪💪","💪💪💪"], validators=[DataRequired()])
    power = SelectField("Power Rating", choices=["✘","🔌","🔌🔌"], validators=[DataRequired()])
    submit = SubmitField("Submit")

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/add", methods=["GET","POST"])
def add():
    form = CafeForm()
    if form.validate_on_submit():
        with open("cafes.csv", mode="a", newline='', encoding='utf-8') as f:
            writer = csv.writer(f)
            writer.writerow([
                form.name.data,
                form.map_url.data,
                form.img_url.data,
                form.coffee.data,
                form.wifi.data,
                form.power.data
            ])
        return redirect(url_for('cafes'))
    return render_template("add.html", form=form)

@app.route("/cafes")
def cafes():
    with open("cafes.csv", newline='', encoding='utf-8') as f:
        data = list(csv.reader(f))
    return render_template("cafes.html", cafes=data)

if __name__ == "__main__":
    app.run(debug=True)
