import tkinter as tk
from main import sheet_data

def show_data():
    text.delete("1.0", tk.END)
    for row in sheet_data:
        text.insert(tk.END, f"{row['city']} → {row['lowestPrice']}₺\n")

root = tk.Tk()
root.title("Cheapest Flight Finder")

btn = tk.Button(root, text="Uçuşları Göster", command=show_data)
btn.pack(pady=10)

text = tk.Text(root, width=40, height=20)
text.pack()

root.mainloop()
