from flask import Flask, render_template, request, redirect, url_for
import sqlite3

app = Flask(__name__)

DB_NAME = "books.db"

def init_db():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("""
        CREATE TABLE IF NOT EXISTS books (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            title TEXT NOT NULL,
            author TEXT NOT NULL,
            rating REAL NOT NULL
        );
    """)
    conn.commit()
    conn.close()

init_db()


@app.route("/")
def home():
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("SELECT * FROM books ORDER BY id DESC")
    books = c.fetchall()
    conn.close()
    return render_template("index.html", books=books)


@app.route("/add", methods=["GET", "POST"])
def add_book():
    if request.method == "POST":
        title = request.form["title"]
        author = request.form["author"]
        rating = request.form["rating"]

        conn = sqlite3.connect(DB_NAME)
        c = conn.cursor()
        c.execute("INSERT INTO books (title, author, rating) VALUES (?, ?, ?)",
                  (title, author, rating))
        conn.commit()
        conn.close()
        return redirect(url_for("home"))

    return render_template("add_book.html")


@app.route("/edit/<int:book_id>", methods=["GET", "POST"])
def edit_book(book_id):

    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()

    if request.method == "POST":
        new_rating = request.form["rating"]
        c.execute("UPDATE books SET rating=? WHERE id=?", (new_rating, book_id))
        conn.commit()
        conn.close()
        return redirect(url_for("home"))

    # GET method — eski veriyi çek
    c.execute("SELECT * FROM books WHERE id=?", (book_id,))
    book = c.fetchone()
    conn.close()
    return render_template("edit_book.html", book=book)


@app.route("/delete/<int:book_id>")
def delete(book_id):
    conn = sqlite3.connect(DB_NAME)
    c = conn.cursor()
    c.execute("DELETE FROM books WHERE id=?", (book_id,))
    conn.commit()
    conn.close()
    return redirect(url_for("home"))


if __name__ == "__main__":
    app.run(debug=True)
