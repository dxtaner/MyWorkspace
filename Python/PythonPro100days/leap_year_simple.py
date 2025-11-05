# leap_year_simple.py
"""
Day 3 Project - Simple Leap Year Checker
100 Days of Python
"""

print("Welcome to the Leap Year Checker!")
year = int(input("Which year do you want to check? "))

# Artık yıl kuralları
if year % 4 == 0:
    if year % 100 == 0:
        if year % 400 == 0:
            print(f"{year} is a leap year. ✅")
        else:
            print(f"{year} is not a leap year. ❌")
    else:
        print(f"{year} is a leap year. ✅")
else:
    print(f"{year} is not a leap year. ❌")