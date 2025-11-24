import pandas as pd

class DataManager:
    def __init__(self):
        self.customers_file = "data/customers.csv"
        self.flights_file = "data/flights.csv"

    def get_customers(self):
        df = pd.read_csv(self.customers_file)
        return df.to_dict(orient="records")

    def get_flights(self):
        df = pd.read_csv(self.flights_file)
        return df.to_dict(orient="records")

    def update_iata_code(self, city, code):
        df = pd.read_csv(self.flights_file)
        df.loc[df["city"] == city, "iataCode"] = code
        df.to_csv(self.flights_file, index=False)
