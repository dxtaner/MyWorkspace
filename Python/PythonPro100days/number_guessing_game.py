import random

logo = """
  _   _                 _                  _____                     
 | \ | |               | |                / ____|                    
 |  \| |_   _ _ __ ___ | |__   ___ _ __  | |  __ _   _  ___  ___ ___ 
 | . ` | | | | '_ ` _ \| '_ \ / _ \ '__| | | |_ | | | |/ _ \/ __/ __|
 | |\  | |_| | | | | | | |_) |  __/ |    | |__| | |_| |  __/\__ \__ \ 
 |_| \_|\__,_|_| |_| |_|_.__/ \___|_|     \_____|\__,_|\___||___/___/
"""

EASY_TURNS = 10
HARD_TURNS = 5

def check_answer(guess, answer, turns):
    """Cevabı kontrol eder ve kalan tahmin hakkını döner."""
    if guess > answer:
        print("Too high.")
        return turns - 1
    elif guess < answer:
        print("Too low.")
        return turns - 1
    else:
        print(f"You got it! The answer was {answer}. 🎉")

def set_difficulty():
    """Kullanıcıdan zorluk seçimi alır."""
    level = input("Choose a difficulty. Type 'easy' or 'hard': ").lower()
    if level == "easy":
        return EASY_TURNS
    else:
        return HARD_TURNS

def game():
    print(logo)
    print("Welcome to the Number Guessing Game!")
    print("I'm thinking of a number between 1 and 100.")

    answer = random.randint(1, 100)
    # print(f"Pssst, the correct answer is {answer}")  # (test amaçlı)

    turns = set_difficulty()
    guess = 0

    while guess != answer and turns > 0:
        print(f"You have {turns} attempts remaining to guess the number.")
        guess = int(input("Make a guess: "))

        turns = check_answer(guess, answer, turns)

        if turns == 0:
            print("You've run out of guesses. You lose 😭")
            return
        elif guess != answer:
            print("Guess again.\n")

# Oyunu başlat
game()
