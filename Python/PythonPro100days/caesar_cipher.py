
logo = """
  _______                                      
 /  _____)                                _    
(  (____   ____  ____  ____   ____  ____ | |_  
 \____  \ / ___)/ ___)/ _  ) / ___)/ _  )|  _) 
 _____)  | (___| |   ( (/ / | |   ( (/ / | |__ 
(______/ \____)_|    \____)|_|    \____) \___)
                                              
"""

print(logo)

alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm',
    'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]

def caesar(start_text, shift_amount, cipher_direction):
    end_text = ""
    if cipher_direction == "decode":
        shift_amount *= -1

    for char in start_text:
        if char in alphabet:
            position = alphabet.index(char)
            new_position = (position + shift_amount) % 26
            end_text += alphabet[new_position]
        else:
            # Harf olmayan karakterleri (boşluk, noktalama, sayı) olduğu gibi bırak
            end_text += char

    print(f"The {cipher_direction}d text is: {end_text}")

# Programın ana döngüsü
should_continue = True

while should_continue:
    direction = input("Type 'encode' to encrypt, type 'decode' to decrypt:\n").lower()
    text = input("Type your message:\n").lower()
    shift = int(input("Type the shift number:\n"))

    shift = shift % 26  # Büyük sayılar için mod alarak güvenli hale getir

    caesar(start_text=text, shift_amount=shift, cipher_direction=direction)

    restart = input("Type 'yes' if you want to go again. Otherwise type 'no'.\n").lower()
    if restart == "no":
        should_continue = False
        print("Goodbye 👋")
