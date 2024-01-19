from typing import List

class Solution:
    def sortPeople(self, names: List[str], heights: List[int]) -> List[str]:
        people = list(zip(names, heights))

        people.sort(key=lambda x: x[1], reverse=True)

        sorted_names = [person[0] for person in people]

        return sorted_names