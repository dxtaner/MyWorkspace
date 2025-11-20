from tkinter import *
import pandas as pd
import random
import os

BACKGROUND_COLOR = "#B1DDC6"
current_card = {}
to_learn = {}

# ---------------------------- DATA ------------------------------- #
data_folder = "data"
words_to_learn_file = os.path.join(data_folder, "words_to_learn.csv")
french_words_file = os.path.join(data_folder, "french_words.csv")

# Dosya okuma ve hata yönetimi
try:
    data = pd.read_csv(words_to_learn_file)
except FileNotFoundError:
    try:
        original_data = pd.read_csv(french_words_file)
        to_learn = original_data.to_dict(orient="records")
    except FileNotFoundError:
        # Eğer french_words.csv yoksa örnek veri oluştur
        to_learn = [
            {"French": "partie", "English": "part"},
            {"French": "chien", "English": "dog"},
            {"French": "maison", "English": "house"},
            {"French": "livre", "English": "book"},
            {"French": "pomme", "English": "apple"}
        ]
else:
    to_learn = data.to_dict(orient="records")

# ---------------------------- FUNCTIONS ------------------------------- #
def next_card():
    global current_card, flip_timer
    window.after_cancel(flip_timer)
    current_card = random.choice(to_learn)
    canvas.itemconfig(card_title, text="French", fill="black")
    canvas.itemconfig(card_word, text=current_card["French"], fill="black")
    canvas.itemconfig(card_background, image=card_front_img)
    flip_timer = window.after(3000, func=flip_card)

def flip_card():
    canvas.itemconfig(card_title, text="English", fill="white")
    canvas.itemconfig(card_word, text=current_card["English"], fill="white")
    canvas.itemconfig(card_background, image=card_back_img)

def is_known():
    to_learn.remove(current_card)
    df = pd.DataFrame(to_learn)
    os.makedirs(data_folder, exist_ok=True)
    df.to_csv(words_to_learn_file, index=False)
    next_card()

# ---------------------------- UI SETUP ------------------------------- #
window = Tk()
window.title("Flashy")
window.config(padx=50, pady=50, bg=BACKGROUND_COLOR)

flip_timer = window.after(3000, func=flip_card)

# --- Canvas ---
canvas = Canvas(width=800, height=526, bg=BACKGROUND_COLOR, highlightthickness=0)

try:
    card_front_img = PhotoImage(file="images/card_front.png")
    card_back_img = PhotoImage(file="images/card_back.png")
except TclError:
    # Eğer görseller yoksa boş kart
    card_front_img = card_back_img = None

card_background = canvas.create_image(400, 263, image=card_front_img)
card_title = canvas.create_text(400, 150, text="", font=("Ariel", 40, "italic"))
card_word = canvas.create_text(400, 263, text="", font=("Ariel", 60, "bold"))
canvas.grid(row=0, column=0, columnspan=2)

# --- Buttons ---
try:
    cross_image = PhotoImage(file="images/wrong.png")
    unknown_button = Button(image=cross_image, highlightthickness=0, command=next_card)
    unknown_button.grid(row=1, column=0)

    check_image = PhotoImage(file="images/right.png")
    known_button = Button(image=check_image, highlightthickness=0, command=is_known)
    known_button.grid(row=1, column=1)
except TclError:
    # Eğer görseller yoksa metinli buton
    unknown_button = Button(text="❌", width=12, height=2, command=next_card)
    unknown_button.grid(row=1, column=0)
    known_button = Button(text="✔", width=12, height=2, command=is_known)
    known_button.grid(row=1, column=1)

next_card()
window.mainloop()
