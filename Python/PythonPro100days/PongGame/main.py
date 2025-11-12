from turtle import Screen
from paddle import Paddle
from ball import Ball
from scoreboard import Scoreboard
import time

# --- Ekran ayarları ---
screen = Screen()
screen.bgcolor("black")
screen.setup(width=800, height=600)
screen.title("🏓 Pong Game")
screen.tracer(0)

# --- Nesneler ---
r_paddle = Paddle((350, 0))
l_paddle = Paddle((-350, 0))
ball = Ball()
scoreboard = Scoreboard()

# --- Klavye kontrolleri ---
screen.listen()
screen.onkey(r_paddle.go_up, "Up")
screen.onkey(r_paddle.go_down, "Down")
screen.onkey(l_paddle.go_up, "w")
screen.onkey(l_paddle.go_down, "s")

# --- Ana oyun döngüsü ---
game_is_on = True
while game_is_on:
    time.sleep(ball.move_speed)
    screen.update()
    ball.move()

    # 🧱 Üst/alt duvar çarpması
    if ball.ycor() > 280 or ball.ycor() < -280:
        ball.bounce_y()

    # 🏓 Paddle çarpması
    if (ball.distance(r_paddle) < 50 and ball.xcor() > 320) or (ball.distance(l_paddle) < 50 and ball.xcor() < -320):
        ball.bounce_x()

    # 🏁 Sağ kenardan dışarı çıkarsa (Left Player scores)
    if ball.xcor() > 380:
        ball.reset_position()
        scoreboard.l_point()

    # 🏁 Sol kenardan dışarı çıkarsa (Right Player scores)
    if ball.xcor() < -380:
        ball.reset_position()
        scoreboard.r_point()

screen.exitonclick()
