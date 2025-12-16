from flask_marshmallow import Marshmallow
from db.models import Cafe

ma = Marshmallow()

class CafeSchema(ma.SQLAlchemyAutoSchema):
    class Meta:
        model = Cafe
        load_instance = True

cafe_schema = CafeSchema()
cafes_schema = CafeSchema(many=True)
