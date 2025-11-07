import random

# ---  Kelime listesi ---
word_list = ["python", "developer", "hangman", "algorithm", "variable", "function", "boolean"]

chosen_word = random.choice(word_list)
word_length = len(chosen_word)

end_of_game = False
lives = 6  # 6 hata hakkı

# --- Oyun Logosu 
logo = """
 _                                             
| |                                            
| |__   __ _ _ __   __ _ _ __ ___   __ _ _ __  
| '_ \ / _` | '_ \ / _` | '_ ` _ \ / _` | '_ \ 
| | | | (_| | | | | (_| | | | | | | (_| | | | |
|_| |_|\__,_|_| |_|\__, |_| |_| |_|\__,_|_| |_|
                    __/ |                      
                   |___/                       
"""
print(logo)

# ---  Ekranda boş çizgiler oluştur ---
display = []
for _ in range(word_length):
    display += "_"

print(" ".join(display))

# ---Oyun döngüsü ---
while not end_of_game:
    guess = input("Guess a letter: ").lower()

    if guess in display:
        print(f"You've already guessed '{guess}'.")

    # Her harfi kontrol et
    for position in range(word_length):
        letter = chosen_word[position]
        if letter == guess:
            display[position] = letter

    # Yanlış tahmin
    if guess not in chosen_word:
        lives -= 1
        print(f"'{guess}' is not in the word. You lose a life.")
        if lives == 0:
            end_of_game = True
            print("💀 You lose!")

    # Oyunu kazanma
    if "_" not in display:
        end_of_game = True
        print("🎉 You win!")

    # Güncel durumu göster
    print(" ".join(display))

    # ---  Hangman görselleri 
    stages = [
        """
           --------
           |      |
           |      O
           |     \\|/
           |      |
           |     / \\
           -
        """,
        """
           --------
           |      |
           |      O
           |     \\|/
           |      |
           |     / 
           -
        """,
        """
           --------
           |      |
           |      O
           |     \\|/
           |      |
           |      
           -
        """,
        """
           --------
           |      |
           |      O
           |     \\|
           |      |
           |     
           -
        """,
        """
           --------
           |      |
           |      O
           |      |
           |      |
           |     
           -
        """,
        """
           --------
           |      |
           |      O
           |    
           |      
           |     
           -
        """,
        """
           --------
           |      |
           |      
           |    
           |      
           |     
           -
        """
    ]

    print(stages[lives])
