logo = """
 _____________________
|  _________________  |
| | PythonCalc   0. | |
| |_________________| |
|  ___ ___ ___   ___  |
| | 7 | 8 | 9 | | + | |
| |___|___|___| |___| |
| | 4 | 5 | 6 | | - | |
| |___|___|___| |___| |
| | 1 | 2 | 3 | | x | |
| |___|___|___| |___| |
| | . | 0 | = | | / | |
| |___|___|___| |___| |
|_____________________|
"""

print(logo)

# --- İşlem Fonksiyonları ---
def add(n1, n2):
    return n1 + n2

def subtract(n1, n2):
    return n1 - n2

def multiply(n1, n2):
    return n1 * n2

def divide(n1, n2):
    return n1 / n2 if n2 != 0 else "Error: Division by zero"

# --- Operasyon Sözlüğü ---
operations = {
    "+": add,
    "-": subtract,
    "*": multiply,
    "/": divide
}

# --- Hesaplama Fonksiyonu ---
def calculator():
    num1 = float(input("What's the first number?: "))

    should_continue = True

    while should_continue:
        for symbol in operations:
            print(symbol)

        operation_symbol = input("Pick an operation: ")
        num2 = float(input("What's the next number?: "))

        calculation_function = operations[operation_symbol]
        answer = calculation_function(num1, num2)

        print(f"{num1} {operation_symbol} {num2} = {answer}")

        choice = input(f"Type 'y' to continue calculating with {answer}, or 'n' to start a new calculation: ").lower()

        if choice == 'y':
            num1 = answer
        else:
            should_continue = False
            print("\n" * 10)  # Ekranı temizleme efekti
            calculator()  # Yeniden başlatma (recursive çağrı)

calculator()
