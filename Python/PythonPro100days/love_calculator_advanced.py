# love_calculator_advanced.py
"""
Enhanced Love Calculator with More Features
"""

def calculate_love_score(name1, name2):
    """İki isim arasındaki aşk puanını hesaplar"""
    combined = (name1 + name2).lower()
    
    # TRUE hesaplaması
    true_score = sum(combined.count(letter) for letter in "true")
    
    # LOVE hesaplaması
    love_score = sum(combined.count(letter) for letter in "love")
    
    total_score = int(str(true_score) + str(love_score))
    return total_score

def get_compatibility_message(score):
    """Puan'a göre uyum mesajı döndürür"""
    if score <= 20:
        return "💔 Not a great match... Maybe just friends?"
    elif score <= 40:
        return "🤔 There might be something there..."
    elif score <= 60:
        return "💖 Good match! Worth exploring!"
    elif score <= 80:
        return "❤️ Great compatibility! Go for it!"
    else:
        return "💕 Perfect match! Made for each other!"

def advanced_love_calculator():
    print("💖 WELCOME TO THE LOVE CALCULATOR! 💖")
    print("=" * 45)
    
    name1 = input("Enter the first name: ").strip()
    name2 = input("Enter the second name: ").strip()
    
    if not name1 or not name2:
        print("Please enter both names!")
        return
    
    # Love score hesapla
    score = calculate_love_score(name1, name2)
    
    # Detaylı analiz
    print(f"\n📊 LOVE ANALYSIS: {name1.upper()} ❤️ {name2.upper()}")
    print("=" * 45)
    print(f"💝 Your Love Score: {score}%")
    print(f"💌 Compatibility: {get_compatibility_message(score)}")
    
    # Ekstra bilgiler
    if score > 85:
        print("🎉 Wow! This is a rare connection!")
    elif score < 30:
        print("💭 Don't worry, love works in mysterious ways!")
    
    return score

if __name__ == "__main__":
    advanced_love_calculator()