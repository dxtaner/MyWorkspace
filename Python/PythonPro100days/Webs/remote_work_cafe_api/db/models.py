from db.db import db

class Cafe(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(180), nullable=False)
    location = db.Column(db.String(180), nullable=False)
    has_wifi = db.Column(db.Boolean, default=False)
    has_sockets = db.Column(db.Boolean, default=False)
    coffee_price = db.Column(db.String(10), nullable=True)

    def __repr__(self):
        return f"<Cafe {self.name}>"
