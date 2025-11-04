# Basit Tip Calculator - Day 2 Project
print("Welcome to the tip calculator!")
bill = float(input("What was the total bill? $"))
tip = int(input("What percentage tip would you like to give? "))
people = int(input("How many people to split the bill? "))

tip_amount = bill * (tip / 100)
total = bill + tip_amount
each_person = total / people

print(f"Each person should pay: ${each_person:.2f}")