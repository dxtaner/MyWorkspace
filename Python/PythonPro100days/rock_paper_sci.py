import random

# Simple version without ASCII art
option_names = ["rock", "paper", "scissors"]

print("Welcome to Rock Paper Scissors!")
print("=" * 30)

pref = input("Please choose: 0 for rock, 1 for paper, 2 for scissors: ")

if pref not in ["0", "1", "2"]:
    print("Invalid input! Please choose 0, 1, or 2.")
else:
    user_choice = int(pref)
    computer_choice = random.randint(0, 2)
    
    print(f"\nYou chose: {option_names[user_choice]}")
    print(f"Computer chose: {option_names[computer_choice]}")
    
    # Determine winner
    print("\n" + "=" * 30)
    if user_choice == computer_choice:
        print("🤝 It's a tie!")
    elif (user_choice == 0 and computer_choice == 2) or \
         (user_choice == 1 and computer_choice == 0) or \
         (user_choice == 2 and computer_choice == 1):
        print("🎉 You win!")
    else:
        print("😔 You lose!")