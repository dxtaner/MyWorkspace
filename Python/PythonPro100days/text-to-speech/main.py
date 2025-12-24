import pyttsx3
import tkinter as tk
from tkinter import messagebox
import threading
import time

CHUNK_SIZE = 150

class TurkishTextToSpeech:

    def __init__(self):
        self.window = tk.Tk()
        self.window.title("Türkçe Metin Okutma")
        self.window.geometry("550x350")

        self.engine = pyttsx3.init()
        self.set_turkish_voice()

        self.text_chunks = []
        self.current_index = 0
        self.is_paused = False
        self.is_reading = False

        tk.Label(
            self.window,
            text="Türkçe Metin Okutma (Dur / Devam Et)",
            font=("Arial", 14, "bold")
        ).pack(pady=10)

        self.text_area = tk.Text(self.window, height=8, font=("Arial", 12))
        self.text_area.pack(padx=10)

        frame = tk.Frame(self.window)
        frame.pack(pady=10)

        tk.Button(frame, text="🔊 Oku", width=15, command=self.start).grid(row=0, column=0, padx=5)
        tk.Button(frame, text="⏸️ Dur", width=15, command=self.pause).grid(row=0, column=1, padx=5)
        tk.Button(frame, text="▶️ Devam Et", width=15, command=self.resume).grid(row=0, column=2, padx=5)

        self.window.mainloop()

    # ---------- TÜRKÇE SES ----------
    def set_turkish_voice(self):
        for voice in self.engine.getProperty("voices"):
            if "tr" in str(voice.languages) or "Turkish" in voice.name:
                self.engine.setProperty("voice", voice.id)
                break

    # ---------- OKUMAYI BAŞLAT ----------
    def start(self):
        if self.is_reading:
            return

        text = self.text_area.get("1.0", tk.END).strip()
        if not text:
            messagebox.showwarning("Uyarı", "Lütfen metin girin.")
            return

        self.text_chunks = [
            text[i:i + CHUNK_SIZE]
            for i in range(0, len(text), CHUNK_SIZE)
        ]

        self.current_index = 0
        self.is_paused = False
        self.is_reading = True

        threading.Thread(target=self.read_chunks, daemon=True).start()

    # ---------- CHUNK OKUMA ----------
    def read_chunks(self):
        while self.current_index < len(self.text_chunks):
            if self.is_paused:
                time.sleep(0.1)
                continue

            chunk = self.text_chunks[self.current_index]
            self.engine.say(chunk)
            self.engine.runAndWait()

            self.current_index += 1

        self.is_reading = False

    # ---------- DUR ----------
    def pause(self):
        if self.is_reading:
            self.is_paused = True
            self.engine.stop()

    # ---------- DEVAM ----------
    def resume(self):
        if self.is_reading and self.is_paused:
            self.is_paused = False


if __name__ == "__main__":
    TurkishTextToSpeech()
