class Quiz:
    """Quiz mantığını ve puanlamayı kontrol eder"""
    def __init__(self, question_list):
        self.questions = question_list
        self.current_index = 0
        self.score = 0
    
    def has_more_questions(self):
        return self.current_index < len(self.questions)
    
    def next_question(self):
        if self.has_more_questions():
            q = self.questions[self.current_index]
            self.current_index += 1
            return q
        return None
    
    def check_answer(self, question, answer):
        if answer == question.correct_answer:
            self.score += 1
            return True
        return False
