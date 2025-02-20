from typing import List, Dict
from datetime import datetime

class Restaurant:
    def __init__(self, id: int, name: str, location: str, capacity: int):
        self.id = id
        self.name = name
        self.location = location
        self.capacity = capacity
        self.reservations = []

    def get_id(self) -> int:
        return self.id

    def get_name(self) -> str:
        return self.name

    def get_location(self) -> str:
        return self.location

    def get_capacity(self) -> int:
        return self.capacity

    def get_reservations(self) -> List['Reservation']:
        return self.reservations

    def add_reservation(self, reservation: 'Reservation') -> None:
        self.reservations.append(reservation)

    def remove_reservation(self, reservation: 'Reservation') -> None:
        self.reservations.remove(reservation)

class User:
    def __init__(self, id: int, name: str, email: str, password: str):
        self.id = id
        self.name = name
        self.email = email
        self.password = password
        self.reservations = []

    def get_id(self) -> int:
        return self.id

    def get_name(self) -> str:
        return self.name

    def get_email(self) -> str:
        return self.email

    def get_reservations(self) -> List['Reservation']:
        return self.reservations

    def add_reservation(self, reservation: 'Reservation') -> None:
        self.reservations.append(reservation)

    def remove_reservation(self, reservation: 'Reservation') -> None:
        self.reservations.remove(reservation)

class Restaurant:
    def __init__(self, id: int, user: User, restaurant: Restaurant, date_time: datetime, num_people: int):
        self.id = id
        self.user = user
        self.restaurant = restaurant
        self.date_time = date_time
        self.num_people = num_people

    def get_id(self) -> int:
        return self.id

    def get_user(self) -> User:
        return self.user

    def get_restaurant(self) -> Restaurant:
        return self.restaurant

    def get_date_time(self) -> datetime:
        return self.date_time

    def get_num_people(self) -> int:
        return self.num_people

class ReservationPortal:
    def __init__(self):
        self.users = {}
        self.restaurants = {}
        self.reservations = {}

    def register_user(self, name: str, email: str, password: str) -> User:
        id = len(self.users) + 1
        user = User(id, name, email, password)
        self.users[id] = user
        return user

    def sign_in(self, email: str, password: str) -> User:
        for user in self.users.values():
            if user.get_email() == email and user.password == password:
                return user
        return None

    def add_restaurant(self, name: str, location: str, capacity: int) -> Restaurant:
        id = len(self.restaurants) + 1
        restaurant = Restaurant(id, name, location, capacity)
        self.restaurants[id] = restaurant
        return restaurant

    def get_restaurant_by_id(self, id: int) -> Restaurant:
        return self.restaurants.get(id)

    def search_restaurants(self, location: str, capacity: int) -> List[Restaurant]:
        results = []
        for restaurant in self.restaurants.values():
            if restaurant.get_location() == location and restaurant.get_capacity() >= capacity:
                results.append(restaurant)
        return results

    def make_reservation(self, user: User, restaurant: Restaurant, date_time: datetime, num_people: int) -> Reservation:
        if num_people > restaurant.get_capacity():
            raise ValueError("Restaurant does not have enough capacity for that many people")
        id = len(self.reservations) + 1
        reservation = Reservation(id, user, restaurant, date_time, num_people)
        self.reservations[id] = reservation
        user.add_reservation(reservation)
        restaurant.add_reservation(reservation)
        return reservation

    def cancel_reservation(self, reservation: Reservation) -> None:
        reservation.get_user().remove_reservation(reservation)
        reservation.get_restaurant().remove_reservation(reservation)
        del self.reservations[reservation.get_id()]

# Create a new reservation portal
portal = ReservationPortal()

# Register a new user
user1 = portal.register_user("Alice", "alice@example.com", "password123")

# Add a new restaurant
restaurant1 = portal.add_restaurant("Italian Bistro", "123 Main St", 50)

# Search for restaurants by location and capacity
results = portal.search_restaurants("123 Main St", 10)
print(results)  # Should print [restaurant1]

# Make a reservation
reservation1 = portal.make_reservation(user1, restaurant1, datetime(2023, 3, 1, 19), 6)
print(reservation1)  # Should print details of the reservation

# Cancel a reservation
portal.cancel_reservation(reservation1)


