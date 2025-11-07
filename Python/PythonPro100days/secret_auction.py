import os

logo = """
                         ___________
                         \         /
                          )_______(
                          |"""""""|_.-._,.---------.,_.-._
                          |       | | |               | | ''-.
                          |       |_| |_             _| |_..-'
                          |_______| '-' `'---------' '-'
                          )"""""""(
                         /_________\\
                       .-------------.
                      /_______________\\
"""

print(logo)
print("Welcome to the Secret Auction Program! 💸")

# Tüm teklifleri tutacak sözlük
bids = {}

def find_highest_bidder(bidding_record):
    highest_bid = 0
    winner = ""
    for bidder in bidding_record:
        bid_amount = bidding_record[bidder]
        if bid_amount > highest_bid:
            highest_bid = bid_amount
            winner = bidder
    print(f"🏆 The winner is {winner} with a bid of ${highest_bid}!")

# Döngü: birden fazla kişi teklif verebilir
bidding_finished = False

while not bidding_finished:
    name = input("What is your name?: ")
    price = int(input("What's your bid?: $"))
    bids[name] = price

    should_continue = input("Are there any other bidders? Type 'yes' or 'no': ").lower()
    if should_continue == "no":
        bidding_finished = True
        find_highest_bidder(bids)
    elif should_continue == "yes":
        os.system('cls' if os.name == 'nt' else 'clear')
