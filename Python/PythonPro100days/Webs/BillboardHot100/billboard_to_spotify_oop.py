"""
billboard_to_spotify_oop.py

OOP tarzında Billboard Hot 100 → Spotify Playlist Script

Dependencies:
    pip install requests beautifulsoup4 spotipy
"""

import requests
from bs4 import BeautifulSoup
import spotipy
from spotipy.oauth2 import SpotifyOAuth


class BillboardScraper:
    URL = "https://www.billboard.com/charts/hot-100"

    def __init__(self):
        self.songs = []

    def fetch_hot100(self):
        response = requests.get(self.URL)
        response.raise_for_status()
        soup = BeautifulSoup(response.text, "html.parser")
        # Billboard Hot 100 titles are in h3 tags with specific class
        for entry in soup.select("li.o-chart-results-list__item h3.c-title"):
            title = entry.get_text(strip=True)
            if title:
                self.songs.append(title)
        return self.songs


class SpotifyClient:
    def __init__(self, client_id, client_secret, redirect_uri):
        self.sp = spotipy.Spotify(auth_manager=SpotifyOAuth(
            client_id=client_id,
            client_secret=client_secret,
            redirect_uri=redirect_uri,
            scope="playlist-modify-private"
        ))
        self.user_id = self.sp.current_user()['id']

    def search_tracks(self, song_titles):
        track_uris = []
        for song in song_titles:
            results = self.sp.search(q=song, limit=1, type="track")
            items = results['tracks']['items']
            if items:
                track_uris.append(items[0]['uri'])
            else:
                print(f"[Spotify] Not found: {song}")
        return track_uris


class PlaylistManager:
    def __init__(self, spotify_client: SpotifyClient, name="Billboard Hot 100"):
        self.sp = spotify_client.sp
        self.user_id = spotify_client.user_id
        self.name = name
        self.playlist_id = None

    def create_playlist(self):
        playlist = self.sp.user_playlist_create(user=self.user_id, name=self.name, public=False)
        self.playlist_id = playlist['id']
        return self.playlist_id

    def add_tracks(self, track_uris):
        if not self.playlist_id:
            raise ValueError("Playlist not created yet!")
        for i in range(0, len(track_uris), 100)
            self.sp.playlist_add_items(self.playlist_id, track_uris[i:i+100])


class BillboardToSpotify:
    def __init__(self, client_id, client_secret, redirect_uri):
        self.scraper = BillboardScraper()
        self.spotify_client = SpotifyClient(client_id, client_secret, redirect_uri)
        self.playlist_manager = PlaylistManager(self.spotify_client)

    def run(self):
        print("[Step 1] Fetching Billboard Hot 100...")
        songs = self.scraper.fetch_hot100()
        print(f"[Step 1] Found {len(songs)} songs.")

        print("[Step 2] Searching songs on Spotify...")
        track_uris = self.spotify_client.search_tracks(songs)
        print(f"[Step 2] Found {len(track_uris)} tracks on Spotify.")

        print("[Step 3] Creating playlist...")
        self.playlist_manager.create_playlist()

        print("[Step 4] Adding tracks to playlist...")
        self.playlist_manager.add_tracks(track_uris)

        print("[Done] Your Billboard Hot 100 playlist is ready on Spotify!")

if __name__ == "__main__":
    CLIENT_ID = "f741c7f2ceae448bbd103f12aba4be8d"
    CLIENT_SECRET = "07888ad2fef54f4d99dcd3cb6f0b7155"
    REDIRECT_URI="http://127.0.0.1:8888/callback"

    app = BillboardToSpotify(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
    app.run()
