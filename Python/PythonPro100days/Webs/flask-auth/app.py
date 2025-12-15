from flask import Flask
from config import Config

from extensions.database import db
from extensions.login_manager import login_manager

from routes.main_routes import main
from routes.auth_routes import auth
from models.user import User  # important import

from datetime import datetime


def create_app():
    app = Flask(__name__)
    app.config.from_object(Config)

    # Extensions
    db.init_app(app)
    login_manager.init_app(app)

    # Jinja global function
    @app.context_processor
    def inject_now():
        return {"now": datetime.now}

    # User loader
    @login_manager.user_loader
    def load_user(user_id):
        return User.query.get(user_id)

    # Blueprints
    app.register_blueprint(main)
    app.register_blueprint(auth)

    with app.app_context():
        db.create_all()

    return app


app = create_app()

if __name__ == "__main__":
    app.run(debug=True)
