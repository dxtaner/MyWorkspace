from flask import jsonify

def success(message, data=None):
    res = {"status": "success", "message": message}
    if data:
        res["data"] = data
    return jsonify(res), 200

def error(message, status_code=400):
    return jsonify({"status": "error", "message": message}), status_code
