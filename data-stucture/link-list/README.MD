আলোচ্যসুচীঃ

[1. লিঙ্কড লিস্ট কি?](#1)

[2. লিঙ্কড লিস্ট কয় প্রকার?](#2)

[3. সাধারণ আলোচনা।](#3)

[4. লিঙ্কড লিস্টের head এ value insert ও head থেকে value remove করা ।](#4)

[5. লিঙ্কড লিস্টের tail এ value insert ও tail থেকে value remove করা ।](#5)

[6. লিঙ্কড লিস্টের নির্দিষ্ট position এ value insert ও নির্দিষ্ট position থেকে value remove করা ।](#6)

[7. লিঙ্কড লিস্টের value কে reverse করা ।](#7)

[8. লিঙ্কড লিস্টের নির্দিষ্ট position এর value update করা ।](#8)

<a id="1"></a>

[1. লিঙ্কড লিস্ট কি?]()

লিঙ্কড লিস্ট হল item এর list কে represent করার একটা উপায়, যা অ্যারে এর মতই । লিঙ্কড লিস্ট-এ list এর item গুলো একটার পরে আরেকটা, লিঙ্ক আকারে থাকে । list এর প্রত্যেকটা item একটা single object ধারণ করে । যা value এবং next এই দুইটা property ধারণ করে । value যেকোন জাভাস্ক্রিপ্ট ডাটা-টাইপ(string, object, number) হতে পারে । next পরবর্তী item কে ধারণ করে । এই item গুলোকেই আমরা node নামে ডেকে থাকি । প্রথম node কে head এবং শেষ node কে tail বলা হয় ।

```
{
  head: {                       //প্রথম node বা head
    value: 7,                   // first value
    next: {                     //second node
      value: false,             // second value
      next: {                   // শেষ node বা tail
        value: "A string",      // third value
        next: null
      }
    }
  }
}
```

<a id="2"></a>

[2. লিঙ্কড লিস্ট কয় প্রকার?]()

লিঙ্কড লিস্ট তিন প্রকার ।

i) Singly linked list => প্রত্যেকটা node এ শুধুমাত্র next পয়ন্টার থাকে ।

ii) Doubly linked list => প্রত্যেকটা node এ শুধুমাত্র next এবং previous পয়ন্টার থাকে ।

iii) Circular linked list => tail node পয়েন্ট করে head node কে ।

Circular linked list, Singly অথবা Doubly উভয়ই হতে পারে ।

<a id="3"></a>

[3. সাধারণ আলোচনা]()

node আমরা ২ ভাবে বানাতে পারি । function ব্যবহার করে অথবা class ব্যবহার করে ।

```
i) function ব্যবহার করে
function createNode(value) {
  return {
    value: value,
    next: null,
  };
}
let newNode = createNode("Hello");

console.log(newNode);
// { value: 'Hello', next: null }

ii) class ব্যবহার করে
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

let newNode = new Node("World");
console.log(newNode);
// Node { value: 'World', next: null }
```

এখন একের পর একের node কে যুক্ত করে List বানানোর জন্য LinkedList class লিখে ফেলি ।

```
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
```

<a id="4"></a>
[4. লিঙ্কড লিস্টের head এ value insert ও head থেকে value remove করা ।]()

```
//লিঙ্কড লিস্টের head এ value insert ও head থেকে value remove করা ।

function createNode(value) {
    return {
        value: value,
        next: null
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insertAtHead(value) {
        this.length++
        let newNode = createNode(value)
        if (this.head) {
            newNode.next = this.head;
            this.head = newNode;
            return
        }
        this.head = this.tail = newNode;
        return
    }
    removeFromHead() {
        if (this.head) {
            this.length--;
            this.head = this.head.next
            return
        }
        return
    }
    print() {
        let current = this.head
        while (current) {
            console.log(current.value);
            current = current.next;
        }
        return undefined
    }
}

let list = new LinkList();

list.insertAtHead(5)
list.insertAtHead(7)
list.insertAtHead(8)
list.removeFromHead();
list.print();
```

<a id="5"></a>
[5. লিঙ্কড লিস্টের tail এ value insert ও tail থেকে value remove করা ।]()

```
//লিঙ্কড লিস্টের tail এ value insert ও tail থেকে value remove করা ।
function createNode(value) {
    return {
        value: value,
        next: null
    }
}

class LinkList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
    insertAtTail(value) {
        this.length++;
        let newNode = createNode(value);
        if (this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
            // console.log(newNode);
            return
        }
        this.head = newNode;
        this.tail = newNode;
        return
    }
    removeFromTail() {
        if (this.tail) {
            this.length--;
            const tailNode = this.tail;
            let currentNode = this.head
            while (currentNode.next != tailNode) {
                currentNode = currentNode.next;
            }
            let beforeTailNode = currentNode;
            this.tail = beforeTailNode
            this.tail.next = null;
            return
        }
        return
    }
    print() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
        return
    }
}

let list = new LinkList();
list.insertAtTail(5);
list.insertAtTail(6);
list.insertAtTail(7);
list.removeFromTail();
list.print();
// console.log(list);
```
