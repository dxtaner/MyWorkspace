from question_model import Question
from data import question_data
from quiz_brain import QuizBrain

# 1️⃣ Soru listesini oluştur
question_bank = []

for question in question_data:
    question_text = question["question"]           # Soru metni
    question_answer = question["correct_answer"]   # Doğru cevap
    new_question = Question(question_text, question_answer)
    question_bank.append(new_question)

# 2️⃣ Quiz başlat
quiz = QuizBrain(question_bank)

while quiz.still_has_questions():
    quiz.next_question()

# 3️⃣ Final sonucu göster
print("🎉 Quiz bitti!")
print(f"Son skorun: {quiz.score}/{len(question_bank)}")
