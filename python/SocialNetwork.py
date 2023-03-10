from typing import List
from collections import Counter

def get_top_k_recommended_friends(user_id: int, cutoff_k: int) -> List[int]:
    # Step 1: Get the list of friends for the given user_id
    user_friends = set(get_friends(user_id))

    # Step 2: Get the list of friends for each of the user_id's friends
    mutual_friends = []
    for friend_id in user_friends:
        friend_friends = set(get_friends(friend_id))
        # Step 3: Calculate the number of mutual friends between each of the user_id's friend's friends and the original user_id
        mutual = friend_friends.intersection(user_friends)
        for mutual_friend in mutual:
            if mutual_friend != user_id and mutual_friend not in user_friends:
                mutual_friends.append(mutual_friend)

    # Step 4: Sort the list of recommended friends based on the number of mutual friends in descending order
    sorted_mutual_friends = [friend_id for friend_id, count in Counter(mutual_friends).most_common()]

    # Step 5: Return the top k recommended friends
    return sorted_mutual_friends[:cutoff_k]

def get_friends(user_id: int) -> List[int]:
    # Assuming that the social network is stored in a dictionary of user_ids and their friends
    social_network = {
        "Ahmet": ["Ekrem", "Sabri", "Messi"],
        "Ekrem": ["Ahmet", "Sabri"],
        "Sabri": ["Ahmet", "Ekrem", "Messi"],
        "Messi": ["Ahmet", "Sabri"],
        "Hasan": ["Messi", "Terim"],
        "Terim": ["Hasan"]
    }
    
    return social_network[user_id]

user_id = "Sabri"
cutoff_k = 2
user_friends = get_friends(user_id)
recommended_friends = get_top_k_recommended_friends(user_id, cutoff_k)
print(user_friends)
print(recommended_friends)

"""
Step 1 -) Get friends list for given user_id.

  O(Friends), where Friends is the number of friends of user_id.

Step 2-) Get the list of friends for each of the user_id's friends.

    O(Friends x N ), where N is the average number of friends for each user in the social network.

Step 3-) Calculate the number of mutual friends between each of the user_id's friend's friends and the original user_id.

	O(Friends x N).

Step 4-) Sort the list of recommended friends based on the number of mutual friends in descending order.

	O(N x log N), where N is the length of the mutual_friends list.

Step 5-) Return the top k recommended friends.

	O(K), where K is the recommended friends parameter.

(this x is multiplication). Complexity of the function is O(Friends x N + N x log N + K), space complexity of the function is O(Friends x N + N).

"""