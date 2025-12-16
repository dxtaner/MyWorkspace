from flask import Flask
from config import Config
from db.db import db
from schemas.cafe_schema import ma
from routes.cafe_routes import cafe_bp

def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    db.init_app(app)
    ma.init_app(app)

    with app.app_context():
        db.create_all()

    app.register_blueprint(cafe_bp, url_prefix="/api")

    return app

app = create_app()

if __name__ == "__main__":
    app.run()
