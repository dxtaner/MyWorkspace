"""
top_100_movies.py

IMDb Top 250 listesinden Top N filmleri çekip CSV/JSON kaydeder ve terminalde gösterir.

Kullanım:
    python top_100_movies.py
    python top_100_movies.py --limit 50 --show

Gereksinimler:
    pip install requests beautifulsoup4
"""

import os
import csv
import json
import argparse
import requests
from bs4 import BeautifulSoup

IMDB_TOP_URL = "https://www.imdb.com/chart/top/"

def fetch_imdb_top(url=IMDB_TOP_URL, timeout=10):
    """IMDb Top 250 sayfasını getirir"""
    headers = {
        "User-Agent": "Mozilla/5.0 (compatible; Top100MoviesBot/1.0; +https://example.com/)"
    }
    resp = requests.get(url, headers=headers, timeout=timeout)
    resp.raise_for_status()
    return resp.text

def parse_imdb_top(html, limit=100):
    """HTML'i parse edip Top N filmleri döndürür"""
    soup = BeautifulSoup(html, "html.parser")
    # Eski IMDb Top 250 tablosu
    table = soup.find("tbody", class_="lister-list")
    if not table:
        raise RuntimeError("IMDb tablo yapısı bulunamadı. Layout değişmiş olabilir.")

    rows = table.find_all("tr")
    movies = []

    for i, row in enumerate(rows):
        if i >= limit:
            break
        # Rank
        rank = int(row.find("td", class_="titleColumn").get_text(strip=True).split(".")[0])
        # Başlık
        title = row.find("td", class_="titleColumn").a.get_text(strip=True)
        # Yıl
        year = row.find("td", class_="titleColumn").span.get_text(strip=True).strip("()")
        # IMDb Rating
        rating = row.find("td", class_="ratingColumn imdbRating").strong.get_text(strip=True)
        # URL
        url = "https://www.imdb.com" + row.find("td", class_="titleColumn").a["href"].split("?")[0]

        movies.append({
            "rank": rank,
            "title": title,
            "year": year,
            "rating": rating,
            "url": url
        })
    return movies

def save_movies(movies, out_dir="output"):
    """Filmleri CSV ve JSON olarak kaydeder"""
    out_dir_path = os.path.abspath(out_dir)
    os.makedirs(out_dir_path, exist_ok=True)

    csv_path = os.path.join(out_dir_path, "top100_movies.csv")
    json_path = os.path.join(out_dir_path, "top100_movies.json")

    # CSV
    with open(csv_path, "w", newline="", encoding="utf-8") as f:
        writer = csv.DictWriter(f, fieldnames=["rank","title","year","rating","url"])
        writer.writeheader()
        writer.writerows(movies)

    # JSON
    with open(json_path, "w", encoding="utf-8") as f:
        json.dump(movies, f, ensure_ascii=False, indent=2)

    print(f"Top {len(movies)} movies saved in '{out_dir_path}' folder.")

def show_movies(movies):
    """Filmleri terminalde göster"""
    for m in movies:
        print(f"#{m['rank']}: {m['title']} ({m['year']}) - Rating: {m['rating']} - {m['url']}")

def main():
    parser = argparse.ArgumentParser(description="IMDb Top 250 listesinden Top N filmleri çek")
    parser.add_argument("--limit", "-n", type=int, default=100, help="Kaç film çekilecek (default 100)")
    parser.add_argument("--show", "-s", action="store_true", help="Filmleri terminalde göster")
    parser.add_argument("--out_dir", "-o", default="output", help="Dosyaların kaydedileceği klasör")
    args = parser.parse_args()

    try:
        print(f"Fetching top {args.limit} movies from IMDb Top 250 ...")
        html = fetch_imdb_top()
        movies = parse_imdb_top(html, limit=args.limit)
        save_movies(movies, out_dir=args.out_dir)

        if args.show:
            print("\nTop Movies:\n")
            show_movies(movies)

    except Exception as e:
        print("Error:", e)

if __name__ == "__main__":
    main()
