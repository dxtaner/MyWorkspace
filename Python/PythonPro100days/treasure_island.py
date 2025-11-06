print("Welcome to Treasure Island.")
print("Your mission is to find the treasure.")

# İlk seçim: sol mu sağ mı?
choice1 = input('You\'re at a crossroad. Where do you want to go? Type "left" or "right": ').lower()

if choice1 == "left":
    # İkinci seçim: yüzmek mi beklemek mi?
    choice2 = input('You\'ve come to a lake. There is an island in the middle of the lake. '
                    'Type "wait" to wait for a boat. Type "swim" to swim across: ').lower()
    
    if choice2 == "wait":
        # Üçüncü seçim: hangi kapı?
        choice3 = input('You arrive at the island unharmed. There is a house with 3 doors: '
                        'one red, one yellow and one blue. Which colour do you choose? ').lower()
        
        if choice3 == "yellow":
            print("🎉 You found the treasure! You Win! 🏆")
        elif choice3 == "red":
            print("🔥 It's a room full of fire. Game Over.")
        elif choice3 == "blue":
            print("🐻 You enter a room of beasts. Game Over.")
        else:
            print("🚪 You chose a door that doesn't exist. Game Over.")
    else:
        print("🦈 You get attacked by an angry trout. Game Over.")
else:
    print("💀 You fell into a hole. Game Over.")
