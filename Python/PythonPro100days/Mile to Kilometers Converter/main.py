from tkinter import *

def convert():
    miles = float(miles_input.get())
    km = miles * 1.609
    km_result_label.config(text=f"{km:.2f}")

window = Tk()
window.title("Mile to Kilometer Converter")
window.config(padx=20, pady=20)

# Entry
miles_input = Entry(width=10)
miles_input.grid(row=0, column=1)

# Labels
miles_label = Label(text="Miles")
miles_label.grid(row=0, column=2)

is_equal_label = Label(text="is equal to")
is_equal_label.grid(row=1, column=0)

km_result_label = Label(text="0")
km_result_label.grid(row=1, column=1)

km_label = Label(text="Km")
km_label.grid(row=1, column=2)

# Button
calculate_button = Button(text="Calculate", command=convert)
calculate_button.grid(row=2, column=1)

window.mainloop()
