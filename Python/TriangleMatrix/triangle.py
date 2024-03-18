def isPrime(number):
    if number <= 1:
        return False
    for i in range(2, int(number ** 0.5) + 1):
        if number % i == 0:
            return False
    return True


def main():
    # Example triangle of numbers
    triangle = [
        [3],
        [7, 4],
        [2, 4, 6],
        [8, 5, 9, 3]
    ]

    for i in range(len(triangle)):
        for j in range(len(triangle[i])):
            if isPrime(triangle[i][j]):
                triangle[i][j] = -555

    for i in range(len(triangle) - 2, -1, -1):
        for j in range(len(triangle[i])):
            triangle[i][j] += max(triangle[i + 1][j], triangle[i + 1][j + 1])

    print("Max:", triangle[0][0])


if __name__ == "__main__":
    main()
