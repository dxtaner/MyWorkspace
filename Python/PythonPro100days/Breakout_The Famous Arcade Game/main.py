import turtle
import time


# ---------------- SCREEN ---------------- #
class GameScreen:
    def __init__(self):
        self.screen = turtle.Screen()
        self.screen.title("Breakout - OOP Arcade Game")
        self.screen.bgcolor("black")
        self.screen.setup(width=800, height=600)
        self.screen.tracer(0)


# ---------------- PADDLE ---------------- #
class Paddle(turtle.Turtle):
    def __init__(self):
        super().__init__()
        self.speed(0)
        self.shape("square")
        self.color("white")
        self.shapesize(stretch_wid=1, stretch_len=5)
        self.penup()
        self.goto(0, -250)

    def move_left(self):
        if self.xcor() > -350:
            self.setx(self.xcor() - 30)

    def move_right(self):
        if self.xcor() < 350:
            self.setx(self.xcor() + 30)


# ---------------- BALL ---------------- #
class Ball(turtle.Turtle):
    def __init__(self):
        super().__init__()
        self.speed(0)
        self.shape("circle")
        self.color("white")
        self.penup()
        self.goto(0, -230)
        self.dx = 4
        self.dy = 4

    def move(self):
        self.setx(self.xcor() + self.dx)
        self.sety(self.ycor() + self.dy)

    def bounce_x(self):
        self.dx *= -1

    def bounce_y(self):
        self.dy *= -1

    def reset_position(self):
        self.goto(0, -230)
        self.bounce_y()


# ---------------- BRICK ---------------- #
class Brick(turtle.Turtle):
    def __init__(self, x, y, color):
        super().__init__()
        self.shape("square")
        self.color(color)
        self.shapesize(stretch_wid=1, stretch_len=3)
        self.penup()
        self.goto(x, y)


# ---------------- SCOREBOARD ---------------- #
class Scoreboard(turtle.Turtle):
    def __init__(self):
        super().__init__()
        self.score = 0
        self.color("white")
        self.penup()
        self.hideturtle()
        self.goto(0, 260)
        self.update_score()

    def update_score(self):
        self.clear()
        self.write(
            f"Score: {self.score}",
            align="center",
            font=("Courier", 16, "normal"),
        )

    def increase(self):
        self.score += 10
        self.update_score()

    def game_over(self):
        self.goto(0, 0)
        self.write(
            "GAME OVER",
            align="center",
            font=("Courier", 24, "bold"),
        )


# ---------------- GAME ---------------- #
class BreakoutGame:
    def __init__(self):
        self.screen = GameScreen().screen
        self.paddle = Paddle()
        self.ball = Ball()
        self.scoreboard = Scoreboard()
        self.bricks = []
        self.create_bricks()
        self.bind_keys()

    def bind_keys(self):
        self.screen.listen()
        self.screen.onkeypress(self.paddle.move_left, "Left")
        self.screen.onkeypress(self.paddle.move_right, "Right")

    def create_bricks(self):
        colors = ["red", "orange", "yellow", "green", "blue"]
        for row, y in enumerate(range(200, 300, 20)):
            for x in range(-350, 350, 70):
                brick = Brick(x, y, colors[row % len(colors)])
                self.bricks.append(brick)

    def check_collisions(self):
        # Wall collision
        if self.ball.xcor() > 390 or self.ball.xcor() < -390:
            self.ball.bounce_x()

        if self.ball.ycor() > 290:
            self.ball.bounce_y()

        # Paddle collision
        if (
            -260 < self.ball.ycor() < -240
            and self.paddle.xcor() - 60 < self.ball.xcor() < self.paddle.xcor() + 60
        ):
            self.ball.bounce_y()

        # Brick collision
        for brick in self.bricks:
            if self.ball.distance(brick) < 40:
                brick.goto(1000, 1000)
                self.bricks.remove(brick)
                self.ball.bounce_y()
                self.scoreboard.increase()
                break

    def run(self):
        game_on = True
        while game_on:
            self.screen.update()
            time.sleep(0.02)
            self.ball.move()
            self.check_collisions()

            if self.ball.ycor() < -300:
                self.scoreboard.game_over()
                game_on = False

        self.screen.mainloop()


# ---------------- START ---------------- #
if __name__ == "__main__":
    game = BreakoutGame()
    game.run()
