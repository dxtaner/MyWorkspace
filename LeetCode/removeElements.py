# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution(object):
    def removeElements(self, head, val):
        """
        :type head: ListNode
        :type val: int
        :rtype: ListNode
        """
        # Create a dummy node to simplify edge cases
        dummy = ListNode(0)
        dummy.next = head
        current = dummy

        while current.next:
            if current.next.val == val:
                # Skip the node with the specified value
                current.next = current.next.next
            else:
                # Move to the next node
                current = current.next

        return dummy.next
