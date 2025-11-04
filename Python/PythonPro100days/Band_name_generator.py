"""
Band Name Generator
100 Days of Python - Day 1 Project
"""

print("🎸 Welcome to the Band Name Generator! 🎸")
print("=" * 40)

# Kullanıcıdan bilgi alma
city = input("What's the name of the city you grew up in?\n")
pet = input("What's your pet's name?\n")

# Grup adını oluşturma
band_name = f"{city} {pet}"

# Sonucu gösterme
print(f"\nYour band name could be: {band_name}!")
print("Rock on! 🤘")