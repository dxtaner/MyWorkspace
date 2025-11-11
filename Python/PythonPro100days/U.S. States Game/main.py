import turtle
import pandas
import os

# Ekranı oluştur
screen = turtle.Screen()
screen.title("U.S. States Game 🇺🇸")

# Görsel yolu (mutlak)
image = os.path.join(os.path.dirname(__file__), "blank_states_img.gif")

# Görseli yükle
screen.addshape(image)
turtle.shape(image)

# Veriyi oku
data = pandas.read_csv(os.path.join(os.path.dirname(__file__), "50_states.csv"))
all_states = data.state.to_list()
guessed_states = []

while len(guessed_states) < 50:
    answer_state = screen.textinput(
        title=f"{len(guessed_states)}/50 States Correct",
        prompt="What's another state's name?"
    )
    if answer_state is None:
        break
    answer_state = answer_state.title()

    if answer_state == "Exit":
        missing_states = [state for state in all_states if state not in guessed_states]
        pandas.DataFrame(missing_states).to_csv("states_to_learn.csv")
        break

    if answer_state in all_states and answer_state not in guessed_states:
        guessed_states.append(answer_state)
        state_data = data[data.state == answer_state]
        marker = turtle.Turtle()
        marker.hideturtle()
        marker.penup()
        marker.goto(int(state_data.x), int(state_data.y))
        marker.write(answer_state, align="center", font=("Arial", 8, "normal"))

turtle.mainloop()
