import random

logo = """
.------.            _     _            _    _            _    
|A_  _ |.          | |   | |          | |  (_)          | |   
|( \/ ).-----.     | |__ | | __ _  ___| | ___  __ _  ___| | __
| \  /|K /\  |     | '_ \| |/ _` |/ __| |/ / |/ _` |/ __| |/ /
|  \/ | /  \ |     | |_) | | (_| | (__|   <| | (_| | (__|   < 
`-----| \  / |     |_.__/|_|\__,_|\___|_|\_\ |\__,_|\___|_|\_\
      |  \/ K|                            _/ |                
      `------'                           |__/           
"""

# Kart değerleri
cards = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]

# Rastgele kart çekme fonksiyonu
def deal_card():
    """Returns a random card from the deck."""
    return random.choice(cards)

# Skor hesaplama fonksiyonu
def calculate_score(hand):
    """Take a list of cards and return the score."""
    if sum(hand) == 21 and len(hand) == 2:
        return 0  # 0 means blackjack
    if 11 in hand and sum(hand) > 21:
        hand.remove(11)
        hand.append(1)
    return sum(hand)

# Sonucu karşılaştırma fonksiyonu
def compare(user_score, computer_score):
    if user_score == computer_score:
        return "It's a Draw 🙃"
    elif computer_score == 0:
        return "Lose, opponent has Blackjack 😱"
    elif user_score == 0:
        return "Win with a Blackjack 😎"
    elif user_score > 21:
        return "You went over. You lose 😭"
    elif computer_score > 21:
        return "Opponent went over. You win 😁"
    elif user_score > computer_score:
        return "You win 😃"
    else:
        return "You lose 😤"

# Ana oyun fonksiyonu
def play_game():
    print(logo)
    user_cards = []
    computer_cards = []
    is_game_over = False

    for _ in range(2):
        user_cards.append(deal_card())
        computer_cards.append(deal_card())

    while not is_game_over:
        user_score = calculate_score(user_cards)
        computer_score = calculate_score(computer_cards)

        print(f"Your cards: {user_cards}, current score: {user_score}")
        print(f"Computer's first card: {computer_cards[0]}")

        if user_score == 0 or computer_score == 0 or user_score > 21:
            is_game_over = True
        else:
            user_should_deal = input("Type 'y' to get another card, 'n' to pass: ").lower()
            if user_should_deal == "y":
                user_cards.append(deal_card())
            else:
                is_game_over = True

    while computer_score != 0 and computer_score < 17:
        computer_cards.append(deal_card())
        computer_score = calculate_score(computer_cards)

    print(f"Your final hand: {user_cards}, final score: {user_score}")
    print(f"Computer's final hand: {computer_cards}, final score: {computer_score}")
    print(compare(user_score, computer_score))

# Oyunu tekrar oynama seçeneği
while input("Do you want to play a game of Blackjack? Type 'y' or 'n': ").lower() == "y":
    print("\n" * 20)
    play_game()
