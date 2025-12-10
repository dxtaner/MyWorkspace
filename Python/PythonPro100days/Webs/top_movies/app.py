from flask import Flask, render_template, redirect, url_for, request, flash
from config import SQLALCHEMY_DATABASE_URI, SQLALCHEMY_TRACK_MODIFICATIONS, SECRET_KEY
from models import db, Movie
from forms import SearchForm, EditForm, AddManualForm
from tmdb import search_movies, get_movie, poster_url

def create_app():
    app = Flask(__name__)
    app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
    app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = SQLALCHEMY_TRACK_MODIFICATIONS
    app.config["SECRET_KEY"] = SECRET_KEY

    db.init_app(app)

    with app.app_context():
        db.create_all()

    @app.route("/")
    def home():
        movies = Movie.query.order_by(Movie.rating.desc().nullslast()).all()
        for index, movie in enumerate(movies, start=1):
            movie.ranking = index
        db.session.commit()
        return render_template("index.html", movies=movies)

    @app.route("/add", methods=["GET", "POST"])
    def add():
        form = SearchForm()
        if form.validate_on_submit():
            results = search_movies(form.title.data)
            return render_template("select.html", movies=results)
        return render_template("add.html", form=form)

    @app.route("/select/<int:movie_id>")
    def select(movie_id):
        data = get_movie(movie_id)
        if not data:
            flash("TMDB API Key missing!", "warning")
            return redirect(url_for("add"))

        img = poster_url(data.get("poster_path"))
        year = data.get("release_date", "")[:4] if data.get("release_date") else ""

        existing = Movie.query.filter_by(title=data["title"]).first()
        if existing:
            flash("Movie already exists.", "info")
            return redirect(url_for("home"))

        movie = Movie(
            title=data["title"],
            year=year,
            description=data.get("overview"),
            img_url=img
        )

        db.session.add(movie)
        db.session.commit()

        return redirect(url_for("edit", movie_id=movie.id))

    @app.route("/add_manual", methods=["GET", "POST"])
    def add_manual():
        form = AddManualForm()
        if form.validate_on_submit():
            m = Movie(
                title=form.title.data,
                year=form.year.data,
                description=form.description.data,
                rating=form.rating.data,
                img_url=form.img_url.data
            )
            db.session.add(m)
            db.session.commit()
            return redirect(url_for("home"))
        return render_template("add.html", form=form, manual=True)

    @app.route("/edit/<int:movie_id>", methods=["GET", "POST"])
    def edit(movie_id):
        movie = Movie.query.get_or_404(movie_id)
        form = EditForm(obj=movie)
        if form.validate_on_submit():
            movie.rating = form.rating.data
            movie.review = form.review.data
            db.session.commit()
            return redirect(url_for("home"))
        return render_template("edit.html", form=form, movie=movie)

    @app.route("/delete/<int:movie_id>")
    def delete(movie_id):
        movie = Movie.query.get_or_404(movie_id)
        db.session.delete(movie)
        db.session.commit()
        return redirect(url_for("home"))

    return app


if __name__ == "__main__":
    app = create_app()
    app.run(debug=True)
