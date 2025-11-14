import pandas as pd
import os

# CSV dosya yolu (mutlak)
csv_path = os.path.join(os.path.dirname(__file__), "nato_phonetic_alphabet.csv")

# CSV dosyasını oku
data = pd.read_csv(csv_path)

# DataFrame'i dictionary'e dönüştür
phonetic_dict = {row.letter: row.code for _, row in data.iterrows()}

# Kullanıcıdan kelime al
while True:
    word = input("Enter a word: ").upper()
    try:
        output_list = [phonetic_dict[letter] for letter in word]
    except KeyError:
        print("❌ Only letters in the alphabet please.")
    else:
        print(output_list)
        break
