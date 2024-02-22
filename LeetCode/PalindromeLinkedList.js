/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val === undefined ? 0 : val)
 *     this.next = (next === undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  // Yardımcı fonksiyon: Bir bağlı listeyi ters çevirme
  function reverseList(node) {
    let prev = null;
    while (node) {
      let next = node.next;
      node.next = prev;
      prev = node;
      node = next;
    }
    return prev;
  }

  // Yardımcı fonksiyon: Bağlı listenin ortasını bulma
  function findMiddle(node) {
    let slow = node;
    let fast = node;
    while (fast && fast.next) {
      slow = slow.next;
      fast = fast.next.next;
    }
    return slow;
  }

  // Bağlı listenin bir palindrom olup olmadığını kontrol et
  if (!head || !head.next) {
    return true; // Boş liste veya tek düğümlü liste bir palindromdur
  }

  // Bağlı listenin ortasını bul
  const middle = findMiddle(head);

  // Bağlı listenin ikinci yarısını ters çevir
  let reversedSecondHalf = reverseList(middle);

  // Ters çevrilmiş ikinci yarıyı birinci yarıyla karşılaştır
  while (reversedSecondHalf) {
    if (head.val !== reversedSecondHalf.val) {
      return false;
    }
    head = head.next;
    reversedSecondHalf = reversedSecondHalf.next;
  }

  return true;
};
