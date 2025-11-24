import tkinter as tk
from tkinter import messagebox
from data_manager import DataManager
from flight_search import FlightSearch
from notification_manager import NotificationManager

class FlightDealsGUI:
    def __init__(self):
        self.data_manager = DataManager()
        self.flight_search = FlightSearch()
        self.notification_manager = NotificationManager()
        
        self.window = tk.Tk()
        self.window.title("Flight Deals Tracker")
        self.window.geometry("600x400")

        tk.Label(self.window, text="Flight Deals Tracker", font=("Arial", 24)).pack(pady=20)

        tk.Label(self.window, text="Origin City Code:").pack()
        self.origin_entry = tk.Entry(self.window)
        self.origin_entry.pack()

        tk.Label(self.window, text="Destination City Code:").pack()
        self.dest_entry = tk.Entry(self.window)
        self.dest_entry.pack()

        tk.Label(self.window, text="Max Price:").pack()
        self.price_entry = tk.Entry(self.window)
        self.price_entry.pack()

        tk.Button(self.window, text="Search & Notify", command=self.search_and_notify, bg="green", fg="white").pack(pady=20)

        self.window.mainloop()

    def search_and_notify(self):
        origin = self.origin_entry.get().upper()
        dest = self.dest_entry.get().upper()
        try:
            max_price = float(self.price_entry.get())
        except ValueError:
            messagebox.showerror("Error", "Max Price must be a number")
            return
        
        flight_info = self.flight_search.check_flight(origin, dest, max_price)
        if flight_info:
            customers = self.data_manager.get_customers()
            for customer in customers:
                message = f"Hi {customer['firstName']},\nCheap flight found: {flight_info}"
                self.notification_manager.send_email(customer["email"], message)
            messagebox.showinfo("Success", "Emails sent to all customers!")
        else:
            messagebox.showinfo("Info", "No deals found.")
