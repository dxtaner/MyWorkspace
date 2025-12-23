# Tic Tac Toe - Day 83

board = [" " for _ in range(9)]


def print_board():
    print()
    print(f" {board[0]} | {board[1]} | {board[2]} ")
    print("---+---+---")
    print(f" {board[3]} | {board[4]} | {board[5]} ")
    print("---+---+---")
    print(f" {board[6]} | {board[7]} | {board[8]} ")
    print()


def check_winner(player):
    win_combinations = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ]

    for combo in win_combinations:
        if all(board[pos] == player for pos in combo):
            return True
    return False


def check_draw():
    return " " not in board


def make_move(player):
    while True:
        try:
            move = int(input(f"Player {player}, choose position (1-9): ")) - 1
            if move < 0 or move > 8:
                print("Invalid position. Choose between 1 and 9.")
            elif board[move] != " ":
                print("Position already taken.")
            else:
                board[move] = player
                break
        except ValueError:
            print("Please enter a number.")


def play_game():
    current_player = "X"

    while True:
        print_board()
        make_move(current_player)

        if check_winner(current_player):
            print_board()
            print(f"🎉 Player {current_player} wins!")
            break

        if check_draw():
            print_board()
            print("🤝 It's a draw!")
            break

        current_player = "O" if current_player == "X" else "X"


if __name__ == "__main__":
    print("🎮 Welcome to Tic Tac Toe")
    play_game()
