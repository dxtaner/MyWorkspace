import os
from dotenv import load_dotenv

load_dotenv()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# SQLite database (izin sorunu çıkmasın diye proje içine kaydediyoruz)
SQLALCHEMY_DATABASE_URI = f"sqlite:///{os.path.join(BASE_DIR, 'database.db')}"
SQLALCHEMY_TRACK_MODIFICATIONS = False

TMDB_API_KEY = os.getenv("TMDB_API_KEY")
SECRET_KEY = os.getenv("SECRET_KEY") or "dev-secret-key"
