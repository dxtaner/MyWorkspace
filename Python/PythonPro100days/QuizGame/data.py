import requests

# Open Trivia DB API'den rastgele 10 True/False sorusu alıyoruz
response = requests.get("https://opentdb.com/api.php?amount=10&type=boolean")
question_data = response.json()["results"]
