# love_calculator_simple.py
"""
Day 3 Project - Simple Love Calculator
100 Days of Python
"""

print("Welcome to the Love Calculator!")
name1 = input("What is your name? \n")
name2 = input("What is their name? \n")

# İsimleri birleştir ve küçük harfe çevir
combined_names = name1 + name2
lower_names = combined_names.lower()

# TRUE kelimesindeki harfleri say
t = lower_names.count("t")
r = lower_names.count("r")
u = lower_names.count("u")
e = lower_names.count("e")
true = t + r + u + e

# LOVE kelimesindeki harfleri say
l = lower_names.count("l")
o = lower_names.count("o")
v = lower_names.count("v")
e = lower_names.count("e")
love = l + o + v + e

# Love Score'u hesapla
love_score = int(str(true) + str(love))

# Sonucu göster
print(f"Your love score is {love_score}")

if love_score < 10 or love_score > 90:
    print(f"You go together like coke and mentos!")
elif love_score >= 40 and love_score <= 50:
    print(f"You are alright together.")
else:
    print(f"Your score is {love_score}")