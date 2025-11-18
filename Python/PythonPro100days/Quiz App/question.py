import html
import random

class Question:
    """Tek bir soruyu temsil eder"""
    def __init__(self, data):
        self.text = html.unescape(data["question"])
        self.correct_answer = html.unescape(data["correct_answer"])
        self.options = [html.unescape(ans) for ans in data["incorrect_answers"]]
        self.options.append(self.correct_answer)
        random.shuffle(self.options)
