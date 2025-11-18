import tkinter as tk
from tkinter import messagebox

class QuizInterface:
    """Tkinter GUI ile Quiz’i gösterir ve kullanıcı etkileşimini yönetir"""
    def __init__(self, quiz):
        self.quiz = quiz
        self.window = tk.Tk()
        self.window.title("Trivia Quiz OOP")
        self.window.geometry("600x400")
        
        self.question_label = tk.Label(self.window, text="", font=("Arial", 14), wraplength=550)
        self.question_label.pack(pady=20)
        
        self.buttons_frame = tk.Frame(self.window)
        self.buttons_frame.pack(pady=20)
        
        self.option_buttons = []
        for i in range(4):
            btn = tk.Button(self.buttons_frame, text="", width=50, command=lambda idx=i: self.answer(idx))
            btn.pack(pady=5)
            self.option_buttons.append(btn)
        
        self.score_label = tk.Label(self.window, text=f"Score: {self.quiz.score}", font=("Arial", 12))
        self.score_label.pack(pady=10)
        
        self.show_next_question()
        self.window.mainloop()
    
    def show_next_question(self):
        self.current_question = self.quiz.next_question()
        if self.current_question:
            self.question_label.config(text=self.current_question.text)
            for i, option in enumerate(self.current_question.options):
                self.option_buttons[i].config(text=option)
        else:
            messagebox.showinfo("Quiz Finished", f"Your final score: {self.quiz.score}/{len(self.quiz.questions)}")
            self.window.destroy()
    
    def answer(self, idx):
        selected = self.option_buttons[idx].cget("text")
        if self.quiz.check_answer(self.current_question, selected):
            messagebox.showinfo("Correct!", "✅ Correct answer!")
        else:
            messagebox.showerror("Wrong!", f"❌ Wrong! Correct answer: {self.current_question.correct_answer}")
        self.score_label.config(text=f"Score: {self.quiz.score}")
        self.show_next_question()
