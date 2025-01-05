const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

function listToArray(l) {
  let arr = [];
  while (l !== null) {
    arr.push(l.value);
    l = l.next;
  }
  return arr;
}

function arrayToList(arr) {
  let head = null;
  let current = null;
  for (let i = 0; i < arr.length; i++) {
    let newNode = new ListNode(arr[i]);
    if (head === null) {
      head = newNode;
      current = head;
    } else {
      current.next = newNode;
      current = current.next;
    }
  }
  return head;
}
function removeKFromList(l, k) {
  let arr = listToArray(l);

  arr = arr.filter(value => value !== k);

  return arrayToList(arr);
}

module.exports = {
  removeKFromList
};
