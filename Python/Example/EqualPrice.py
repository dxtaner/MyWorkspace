#!/bin/python3

import math
import os
import random
import re
import sys


#
# Complete the 'countMinimumOperations' function below.
#
# The function is expected to return a LONG_INTEGER_ARRAY.
# The function accepts following parameters:
#  1. INTEGER_ARRAY price
#  2. INTEGER_ARRAY query
#

def countMinimumOperations(price, query):
    # Write your code here
    return [sum(abs(p - q) for p in price) for q in query]


if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    price_count = int(input().strip())

    price = []

    for _ in range(price_count):
        price_item = int(input().strip())
        price.append(price_item)

    query_count = int(input().strip())

    query = []

    for _ in range(query_count):
        query_item = int(input().strip())
        query.append(query_item)

    result = countMinimumOperations(price, query)

    fptr.write('\n'.join(map(str, result)))
    fptr.write('\n')

    fptr.close()


# def countMinimumOperations(price, query):
#     result = []
#     for q in query:
#         total_diff = 0
#         for p in price:
#             diff = abs(p - q)
#             total_diff += diff
#             print(f" query {q}, price {p}, diff: {diff}")
#         result.append(total_diff)
#     return result
