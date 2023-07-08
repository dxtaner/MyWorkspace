#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'minimumSteps' function below.
#
# The function is expected to return an INTEGER.
# The function accepts STRING_ARRAY loggedMoves as parameter.
#


def minimumSteps(loggedMoves):
    step = 0
    for move in loggedMoves:
        if move == "../":
            step = step-1
        elif move == "./":
            continue
        else:
            step = step+1
    return step


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    loggedMoves_count = int(input().strip())

    loggedMoves = []

    for _ in range(loggedMoves_count):
        loggedMoves_item = input()
        loggedMoves.append(loggedMoves_item)

    result = minimumSteps(loggedMoves)

    fptr.write(str(result) + '\n')

    fptr.close()
