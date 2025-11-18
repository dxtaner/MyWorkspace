import requests
from question import Question
from quiz import Quiz
from quiz_ui import QuizInterface

def get_questions_from_api(amount=10):
    response = requests.get(f"https://opentdb.com/api.php?amount={amount}&type=multiple")
    data = response.json()["results"]
    return [Question(q) for q in data]

if __name__ == "__main__":
    question_list = get_questions_from_api(10)
    quiz = Quiz(question_list)
    quiz_ui = QuizInterface(quiz)
