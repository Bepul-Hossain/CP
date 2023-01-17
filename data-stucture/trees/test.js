// Initializing queue array.
var queue = [];

// Inserting vales into the queue.
queue.push(1);
queue.push(2);
queue.push(3);
queue.push(4);
queue.push(5);

console.log("The current queue is: ", queue);

// Removing element form queue using array method: shift()
var removed_element = queue.shift();
console.log("Removed element is: ", removed_element);

console.log("The current queue is: ", queue);

// We can check the if the queue is empty or not using the array.length method.
if (queue.length > 0) {
    console.log("The Queue is not empty!");
} else {
    console.log("The Queue is empty!");
}