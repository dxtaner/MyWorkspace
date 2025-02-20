#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'getSmallestString' function below.
#
# The function is expected to return a STRING.
# The function accepts following parameters:
#  1. STRING word
#  2. STRING substr
#

def getSmallestString(word, substr):
    # Write your code here
    if substr not in word:
        return "-1"
    word = word.replace("?", "a")
    return word


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    word = input()

    substr = input()

    result = getSmallestString(word, substr)

    fptr.write(result + '\n')

    fptr.close()
