import tkinter as tk

TIME_LIMIT = 5000  # 5 saniye (ms)

class DisappearingTextApp:

    def __init__(self):
        self.window = tk.Tk()
        self.window.title("Disappearing Text Writing App")
        self.window.config(padx=20, pady=20)

        self.timer = None

        self.label = tk.Label(
            text="Start typing. Stop for 5 seconds and everything disappears!",
            font=("Arial", 12)
        )
        self.label.pack(pady=10)

        self.text_area = tk.Text(
            width=60,
            height=15,
            font=("Arial", 14)
        )
        self.text_area.pack()
        self.text_area.focus()

        # Her tuş basımını yakala
        self.text_area.bind("<KeyPress>", self.reset_timer)

        self.window.mainloop()

    def reset_timer(self, event=None):
        if self.timer:
            self.window.after_cancel(self.timer)

        self.timer = self.window.after(TIME_LIMIT, self.clear_text)

    def clear_text(self):
        self.text_area.delete("1.0", tk.END)


if __name__ == "__main__":
    DisappearingTextApp()
