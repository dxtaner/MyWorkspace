from turtle import Screen
from player import Player
from car_manager import CarManager
from scoreboard import Scoreboard
import time

screen = Screen()
screen.setup(width=600, height=600)
screen.tracer(0)
screen.title("🐢 Turtle Crossing Deluxe 🏎️")

player = Player()
car_manager = CarManager()
scoreboard = Scoreboard()

screen.listen()
screen.onkey(player.move_up, "Up")
screen.onkey(player.move_down, "Down")

game_is_on = True
loop_delay = 0.08  # Daha akıcı animasyon için

while game_is_on:
    time.sleep(loop_delay)
    screen.update()

    car_manager.create_car()
    car_manager.move_cars()

    # Çarpışma kontrolü
    for car in car_manager.all_cars:
        if car.distance(player) < 20:
            scoreboard.game_over()
            game_is_on = False

    # Bitiş çizgisine ulaşıldıysa
    if player.is_at_finish_line():
        player.goto_start()
        car_manager.level_up()
        scoreboard.increase_level()

screen.exitonclick()
