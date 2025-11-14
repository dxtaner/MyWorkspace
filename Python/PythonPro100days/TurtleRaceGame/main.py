from turtle import Turtle, Screen
import random

screen = Screen()
screen.title("🐢 Turtle Race Game 🏁")
screen.bgcolor("#f1f1f1")
screen.setup(width=700, height=500)

user_bet = screen.textinput(
    title="Make your bet 🎲",
    prompt="Which turtle will win the race? Enter a color (red, orange, yellow, green, blue, purple): "
)

colors = ["red", "orange", "yellow", "green", "blue", "purple"]
y_positions = [-125, -75, -25, 25, 75, 125]
turtles = []

for i in range(6):
    new_turtle = Turtle(shape="turtle")
    new_turtle.color(colors[i])
    new_turtle.penup()
    new_turtle.goto(x=-300, y=y_positions[i])
    turtles.append(new_turtle)

finish_line = Turtle()
finish_line.hideturtle()
finish_line.penup()
finish_line.goto(260, 200)
finish_line.pendown()
finish_line.pensize(5)
finish_line.color("black")
finish_line.right(90)
finish_line.forward(400)

race_on = False
if user_bet:
    race_on = True

while race_on:
    for turtle in turtles:
        if turtle.xcor() > 250:
            race_on = False
            winner_color = turtle.pencolor()
            if winner_color.lower() == user_bet.lower():
                print(f"🏆 You won! The {winner_color} turtle is the winner! 🎉")
            else:
                print(f"😢 You lost. The {winner_color} turtle won the race.")
            break

        turtle.forward(random.randint(1, 10))

screen.exitonclick()
