from tkinter import *
import math
import os

# ---------------------------- Sabitler ------------------------------- #
PINK = "#e2979c"
RED = "#e7305b"
GREEN = "#9bdeac"
YELLOW = "#f7f5dd"
FONT_NAME = "Courier"
WORK_MIN = 25
SHORT_BREAK_MIN = 5
LONG_BREAK_MIN = 20
reps = 0
timer = None


# ---------------------------- Zamanlayıcı Sıfırlama ------------------------------- #
def reset_timer():
    """Zamanlayıcıyı sıfırlar ve arayüzü başlangıç haline getirir."""
    window.after_cancel(timer)
    canvas.itemconfig(timer_text, text="00:00")
    title_label.config(text="Timer", fg=GREEN)
    check_marks.config(text="")
    global reps
    reps = 0


# ---------------------------- Zamanlayıcı Başlat ------------------------------- #
def start_timer():
    """Pomodoro döngüsünü başlatır."""
    global reps
    reps += 1

    work_sec = WORK_MIN * 60
    short_break_sec = SHORT_BREAK_MIN * 60
    long_break_sec = LONG_BREAK_MIN * 60

    if reps % 8 == 0:
        count_down(long_break_sec)
        title_label.config(text="Long Break", fg=RED)
    elif reps % 2 == 0:
        count_down(short_break_sec)
        title_label.config(text="Break", fg=PINK)
    else:
        count_down(work_sec)
        title_label.config(text="Work", fg=GREEN)


# ---------------------------- Geri Sayım Mekanizması ------------------------------- #
def count_down(count):
    """Zamanı her saniye günceller ve sürenin bitişinde döngüyü değiştirir."""
    count_min = math.floor(count / 60)
    count_sec = count % 60
    if count_sec < 10:
        count_sec = f"0{count_sec}"

    canvas.itemconfig(timer_text, text=f"{count_min}:{count_sec}")
    if count > 0:
        global timer
        timer = window.after(1000, count_down, count - 1)
    else:
        start_timer()
        marks = ""
        work_sessions = math.floor(reps / 2)
        for _ in range(work_sessions):
            marks += "✔"
        check_marks.config(text=marks)


# ---------------------------- UI Kurulumu ------------------------------- #
window = Tk()
window.title("Pomodoro")
window.config(padx=100, pady=50, bg=YELLOW)

# Başlık
title_label = Label(text="Timer", fg=GREEN, bg=YELLOW, font=(FONT_NAME, 35, "bold"))
title_label.grid(column=1, row=0)

# Görsel (tomato.png)
script_dir = os.path.dirname(__file__)
tomato_path = os.path.join(script_dir, "tomato.png")

canvas = Canvas(width=200, height=224, bg=YELLOW, highlightthickness=0)
try:
    tomato_img = PhotoImage(file=tomato_path)
    canvas.create_image(100, 112, image=tomato_img)
except TclError:
    # tomato.png yoksa kırmızı daire çiz
    canvas.create_oval(50, 50, 150, 150, fill="tomato", outline="")
timer_text = canvas.create_text(100, 130, text="00:00", fill="white", font=(FONT_NAME, 35, "bold"))
canvas.grid(column=1, row=1)

# Butonlar
start_button = Button(text="Start", highlightthickness=0, command=start_timer)
start_button.grid(column=0, row=2)

reset_button = Button(text="Reset", highlightthickness=0, command=reset_timer)
reset_button.grid(column=2, row=2)

# İşaretler
check_marks = Label(fg=GREEN, bg=YELLOW)
check_marks.grid(column=1, row=3)

window.mainloop()
