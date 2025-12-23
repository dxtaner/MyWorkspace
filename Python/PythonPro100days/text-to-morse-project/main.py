from morse_dict import MORSE_CODE_DICT

def text_to_morse(text):
    morse_output = []
    for char in text.upper():
        if char in MORSE_CODE_DICT:
            morse_output.append(MORSE_CODE_DICT[char])
        else:
            morse_output.append('?')
    return " ".join(morse_output)


def main():
    print("📡 Text to Morse Code Converter")
    print("Çıkmak için 'q' yaz\n")

    while True:
        user_input = input("Metin gir: ")
        if user_input.lower() == 'q':
            print("Program sonlandırıldı.")
            break

        morse = text_to_morse(user_input)
        print(f"Morse Code: {morse}\n")


if __name__ == "__main__":
    main()
