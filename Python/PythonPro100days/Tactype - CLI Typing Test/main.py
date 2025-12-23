import time
import random
import os

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
TEXT_FILE = os.path.join(BASE_DIR, "texts.txt")


def load_text():
    with open(TEXT_FILE, "r", encoding="utf-8") as file:
        return random.choice(file.readlines()).strip()


def calculate_wpm(typed_text, elapsed_time):
    words = len(typed_text.split())
    minutes = elapsed_time / 60
    return round(words / minutes) if minutes > 0 else 0


def calculate_accuracy(original, typed):
    correct = sum(1 for o, t in zip(original, typed) if o == t)
    return round((correct / len(original)) * 100, 2)


def main():
    print("\n⌨️  TACTYPE – CLI Typing Test\n")
    input("Hazırsan Enter'a bas...")

    text = load_text()
    print("\nYazılacak metin:\n")
    print(text)
    print("\nBaşla!\n")

    start_time = time.time()
    typed = input("> ")
    end_time = time.time()

    elapsed = end_time - start_time

    wpm = calculate_wpm(typed, elapsed)
    accuracy = calculate_accuracy(text, typed)

    print("\n📊 Sonuçlar")
    print("----------------------")
    print(f"⏱️ Süre      : {elapsed:.2f} saniye")
    print(f"⚡ WPM       : {wpm}")
    print(f"🎯 Doğruluk  : %{accuracy}")


if __name__ == "__main__":
    main()
