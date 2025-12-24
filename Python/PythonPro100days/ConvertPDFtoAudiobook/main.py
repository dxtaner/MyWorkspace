import pyttsx3
from PyPDF2 import PdfReader
import tkinter as tk
from tkinter import filedialog, messagebox

CHUNK_SIZE = 1000  # uzun PDF'ler için güvenli parça boyutu

class PDFToAudiobookApp:

    def __init__(self):
        self.window = tk.Tk()
        self.window.title("PDF to Audiobook")
        self.window.geometry("400x250")

        self.engine = pyttsx3.init()
        self.set_turkish_voice()

        tk.Label(
            self.window,
            text="PDF to Audiobook",
            font=("Arial", 16, "bold")
        ).pack(pady=10)

        tk.Button(
            self.window,
            text="📂 PDF Seç ve Dinle",
            width=25,
            command=self.select_and_read
        ).pack(pady=10)

        tk.Button(
            self.window,
            text="💾 MP3 Olarak Kaydet",
            width=25,
            command=self.save_as_mp3
        ).pack(pady=10)

        tk.Button(
            self.window,
            text="❌ Çıkış",
            width=25,
            command=self.window.quit
        ).pack(pady=10)

        self.pdf_text = ""
        self.window.mainloop()

    # ---------- PDF SEÇ ----------
    def select_pdf(self):
        return filedialog.askopenfilename(
            title="PDF Seç",
            filetypes=[("PDF Files", "*.pdf")]
        )

    # ---------- PDF OKU ----------
    def read_pdf(self, path):
        reader = PdfReader(path)
        text = ""

        for page in reader.pages:
            page_text = page.extract_text()
            if page_text:
                text += page_text + "\n"

        return text

    # ---------- TÜRKÇE SES ----------
    def set_turkish_voice(self):
        for voice in self.engine.getProperty("voices"):
            if "tr" in voice.languages or "Turkish" in voice.name:
                self.engine.setProperty("voice", voice.id)
                return

    # ---------- CHUNK OKUMA ----------
    def speak_text(self, text):
        for i in range(0, len(text), CHUNK_SIZE):
            self.engine.say(text[i:i + CHUNK_SIZE])
            self.engine.runAndWait()

    # ---------- PDF SEÇ & OKU ----------
    def select_and_read(self):
        path = self.select_pdf()
        if not path:
            return

        self.pdf_text = self.read_pdf(path)
        if not self.pdf_text.strip():
            messagebox.showerror("Hata", "PDF içinde okunabilir metin yok.")
            return

        self.speak_text(self.pdf_text)

    # ---------- MP3 KAYDET ----------
    def save_as_mp3(self):
        if not self.pdf_text:
            messagebox.showwarning("Uyarı", "Önce PDF seçmelisin.")
            return

        save_path = filedialog.asksaveasfilename(
            defaultextension=".mp3",
            filetypes=[("MP3 Files", "*.mp3")]
        )

        if save_path:
            self.engine.save_to_file(self.pdf_text, save_path)
            self.engine.runAndWait()
            messagebox.showinfo("Başarılı", "MP3 başarıyla kaydedildi.")

# ---------- RUN ----------
if __name__ == "__main__":
    PDFToAudiobookApp()
