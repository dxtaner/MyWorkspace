import requests
from config import TMDB_API_KEY

BASE_URL = "https://api.themoviedb.org/3"
IMAGE_BASE = "https://image.tmdb.org/t/p/w500"

def search_movies(query):
    if not TMDB_API_KEY:
        return []
    url = f"{BASE_URL}/search/movie"
    params = {"api_key": TMDB_API_KEY, "query": query}
    r = requests.get(url, params=params)
    r.raise_for_status()
    return r.json().get("results", [])

def get_movie(movie_id):
    if not TMDB_API_KEY:
        return None
    url = f"{BASE_URL}/movie/{movie_id}"
    params = {"api_key": TMDB_API_KEY}
    r = requests.get(url, params=params)
    r.raise_for_status()
    return r.json()

def poster_url(path):
    if not path:
        return None
    return IMAGE_BASE + path
