# tip_calculator_advanced.py - Day 2 Project
"""
Enhanced Tip Calculator with More Features
"""

def calculate_tip():
    print("💰 WELCOME TO THE TIP CALCULATOR! 💰")
    print("=" * 40)
    
    # Fatura bilgisi
    try:
        total_bill = float(input("Enter the total bill amount: $"))
        if total_bill <= 0:
            print("Bill amount must be positive!")
            return
    except ValueError:
        print("Please enter a valid number!")
        return
    
    # Servis kalitesine göre tip
    print("\nService Quality:")
    print("1. Poor (10%)")
    print("2. Good (15%)")
    print("3. Excellent (20%)")
    print("4. Custom")
    
    service_choice = input("Choose service quality (1-4): ")
    
    if service_choice == "1":
        tip_percentage = 10
    elif service_choice == "2":
        tip_percentage = 15
    elif service_choice == "3":
        tip_percentage = 20
    elif service_choice == "4":
        try:
            tip_percentage = float(input("Enter custom tip percentage: "))
        except ValueError:
            print("Invalid input! Using 15% as default.")
            tip_percentage = 15
    else:
        print("Invalid choice! Using 15% as default.")
        tip_percentage = 15
    
    # Kişi sayısı
    try:
        people_count = int(input("How many people to split the bill? "))
        if people_count <= 0:
            print("Number of people must be at least 1!")
            return
    except ValueError:
        print("Invalid input! Assuming 1 person.")
        people_count = 1
    
    # Detaylı hesaplamalar
    tip_amount = total_bill * (tip_percentage / 100)
    total_with_tip = total_bill + tip_amount
    amount_per_person = total_with_tip / people_count
    
    # Sonuçları göster
    print("\n" + "=" * 30)
    print("BILL SUMMARY")
    print("=" * 30)
    print(f"Subtotal: ${total_bill:.2f}")
    print(f"Tip ({tip_percentage}%): ${tip_amount:.2f}")
    print(f"Total: ${total_with_tip:.2f}")
    print(f"Each person pays: ${amount_per_person:.2f}")

if __name__ == "__main__":
    calculate_tip()