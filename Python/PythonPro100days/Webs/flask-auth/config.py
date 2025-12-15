import os
from dotenv import load_dotenv

load_dotenv()

class Config:
    SECRET_KEY = os.getenv("SECRET_KEY", "your-secret-key")
    SQLALCHEMY_DATABASE_URI = "sqlite:///../instance/users.db"
    SQLALCHEMY_TRACK_MODIFICATIONS = False
