
from typing import List

class Solution:
    def fizzBuzz(self, n: int) -> List[str]:
        # Create an empty list to store the results
        result = []

        # Loop through numbers from 1 to n (inclusive)
        for i in range(1, n + 1):
            # If the number is divisible by both 3 and 5, add "FizzBuzz" to the list
            if i % 3 == 0 and i % 5 == 0:
                result.append("FizzBuzz")
            # If the number is divisible by only 3, add "Fizz" to the list
            elif i % 3 == 0:
                result.append("Fizz")
            # If the number is divisible by only 5, add "Buzz" to the list
            elif i % 5 == 0:
                result.append("Buzz")
            # If none of the conditions are met, add the number as a string to the list
            else:
                result.append(str(i))
        
        # Return the result list
        return result
