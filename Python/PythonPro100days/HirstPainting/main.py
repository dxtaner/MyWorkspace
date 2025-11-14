import turtle as t
import random

t.colormode(255)
tim = t.Turtle()
tim.speed("fastest")
tim.penup()
tim.hideturtle()

color_list = [
    (239, 245, 241), (240, 229, 84), (145, 74, 47), (222, 145, 67),
    (37, 104, 155), (196, 77, 98), (133, 187, 164), (23, 121, 175),
    (224, 62, 81), (39, 165, 119), (236, 161, 180), (146, 19, 46),
    (10, 64, 119), (229, 238, 234), (245, 220, 226)
]

tim.setheading(225)
tim.forward(300)
tim.setheading(0)

number_of_dots = 100

for dot_count in range(1, number_of_dots + 1):
    tim.dot(20, random.choice(color_list))
    tim.forward(50)

    if dot_count % 10 == 0:
        tim.setheading(90)
        tim.forward(50)
        tim.setheading(180)
        tim.forward(500)
        tim.setheading(0)

screen = t.Screen()
screen.exitonclick()
