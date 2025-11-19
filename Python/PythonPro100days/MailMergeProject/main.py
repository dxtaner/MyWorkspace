# Day 24 - Mail Merge Project
# Otomatik kişisel mektuplar oluşturur

import os

PLACEHOLDER = "[name]"

# 🔹 main.py'nin bulunduğu dizini bul
BASE_DIR = os.path.dirname(os.path.abspath(__file__))

# 🔹 Dosya yollarını tanımla
names_path = os.path.join(BASE_DIR, "Input", "Names", "invited_names.txt")
letter_path = os.path.join(BASE_DIR, "Input", "Letters", "starting_letter.txt")
output_dir = os.path.join(BASE_DIR, "Output", "ReadyToSend")

# 🔹 Tüm gerekli klasörleri oluştur
os.makedirs(os.path.join(BASE_DIR, "Input", "Names"), exist_ok=True)
os.makedirs(os.path.join(BASE_DIR, "Input", "Letters"), exist_ok=True)
os.makedirs(output_dir, exist_ok=True)

try:
    # 🔹 Dosyaları oku
    with open(names_path, encoding="utf-8") as names_file:
        names = names_file.readlines()

    with open(letter_path, encoding="utf-8") as letter_file:
        letter_contents = letter_file.read()

    # 🔹 Her isim için kişisel mektup oluştur
    for name in names:
        stripped_name = name.strip()  # "\n" karakterini kaldır
        new_letter = letter_contents.replace(PLACEHOLDER, stripped_name)

        # 🔹 Yeni mektubu Output klasörüne yaz
        output_file = os.path.join(output_dir, f"letter_for_{stripped_name}.txt")

        # Dosya yazma işlemi
        with open(output_file, "w", encoding="utf-8") as completed_letter:
            completed_letter.write(new_letter)

    print("✅ Tüm mektuplar başarıyla oluşturuldu!")

except FileNotFoundError as e:
    print("❌ Hata: Gerekli dosyalardan biri bulunamadı!")
    print(f"Detay: {e}")

except Exception as e:
    print("⚠️ Beklenmeyen bir hata oluştu!")
    print(f"Detay: {e}")
