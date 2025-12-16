from flask import Blueprint, request
from db.db import db
from db.models import Cafe
from schemas.cafe_schema import cafe_schema, cafes_schema
from utils.response import success, error

cafe_bp = Blueprint("cafe_bp", __name__)

# GET ALL
@cafe_bp.get("/cafes")
def get_cafes():
    cafes = Cafe.query.all()
    return success("All cafes fetched.", cafes_schema.dump(cafes))

# GET BY ID
@cafe_bp.get("/cafes/<int:id>")
def get_cafe(id):
    cafe = Cafe.query.get(id)
    if not cafe:
        return error("Cafe not found.", 404)
    return success("Cafe fetched.", cafe_schema.dump(cafe))

# ADD NEW
@cafe_bp.post("/cafes")
def add_cafe():
    data = request.json
    try:
        new_cafe = cafe_schema.load(data)
        db.session.add(new_cafe)
        db.session.commit()
        return success("Cafe added.", cafe_schema.dump(new_cafe))
    except Exception as e:
        return error(str(e))

# UPDATE
@cafe_bp.put("/cafes/<int:id>")
def update_cafe(id):
    cafe = Cafe.query.get(id)
    if not cafe:
        return error("Cafe not found.", 404)

    data = request.json
    for key, value in data.items():
        setattr(cafe, key, value)

    db.session.commit()
    return success("Cafe updated.", cafe_schema.dump(cafe))

# DELETE
@cafe_bp.delete("/cafes/<int:id>")
def delete_cafe(id):
    cafe = Cafe.query.get(id)
    if not cafe:
        return error("Cafe not found.", 404)

    db.session.delete(cafe)
    db.session.commit()
    return success("Cafe deleted.")
