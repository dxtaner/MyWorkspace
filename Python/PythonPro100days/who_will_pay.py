import random

# Simple version
def who_will_pay():
    print("🎲 WHO WILL PAY? 🎲")
    print("=" * 30)
    
    # Get names from user
    names_input = input("Enter names separated by commas: ")
    names = [name.strip() for name in names_input.split(",") if name.strip()]
    
    if not names:
        print("No names entered! Using default names...")
        names = ["Alice", "Bob", "Charlie", "Diana"]
    
    # Randomly select who pays
    payer = random.choice(names)
    
    print(f"\nNames in the draw: {', '.join(names)}")
    print("🎯 Spinning the wheel...")
    print(f"💰 {payer} will pay! 💰")

# Run the game
who_will_pay()