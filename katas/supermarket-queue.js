// There is a queue for the self-checkout tills at the supermarket. Your task is write a function to calculate the total time required for all the customers to check out!

// input
// customers: an array of positive integers representing the queue. Each integer represents a customer, and its value is the amount of time they require to check out.
// n: a positive integer, the number of checkout tills.
// output
// The function should return an integer, the total time required.

// Important
// Please look at the examples and clarifications below, to ensure you understand the task correctly :)

// Examples
// queueTime([5,3,4], 1)
// // should return 12
// // because when there is 1 till, the total time is just the sum of the times

// queueTime([10,2,3,3], 2)
// // should return 10
// // because here n=2 and the 2nd, 3rd, and 4th people in the
// // queue finish before the 1st person has finished.

// queueTime([2,3,10], 2)
// // should return 12
// Clarifications
// There is only ONE queue serving many tills, and
// The order of the queue NEVER changes, and
// The front person in the queue (i.e. the first element in the array/list) proceeds to a till as soon as it becomes free.

function queueTime(customers, n) {
  if (customers.length === 0) {
    return 0;
  }
  let queue = [];
  for (let i = 0; i < customers.length; i++) {
    if (queue.length < n) {
      queue.push(customers[i]);
    } else {
      let currentValue = customers[i];
      let finishedLine = queue.indexOf(Math.min(...queue));
      queue[finishedLine] += currentValue;
    }
  }
  return Math.max(...queue);
}

// Test
// describe("Basic tests", function() {
//   Test.assertEquals(queueTime([], 1), 0, "wrong answer for an empty queue");
//   Test.assertEquals(queueTime([5], 1), 5, "wrong answer for a single person in the queue");
//   Test.assertEquals(queueTime([2], 5), 2, "wrong answer for a single person in the queue");
//   Test.assertEquals(queueTime([1,2,3,4,5], 1), 15, "wrong answer for a single till");
//   Test.assertEquals(queueTime([1,2,3,4,5], 100), 5, "wrong answer for a case with a large number of tills");
//   Test.assertEquals(queueTime([2,2,3,3,4,4], 2), 9, "wrong answer for a case with two tills");
// });

// (function () {

//   function testFn(customers, n) {
//     let time = 0;
//     let tills = Array(n).fill(0);
//     while (customers.length != 0) {
//       if (tills.indexOf(0) != -1) {
//         tills[tills.indexOf(0)] = customers.shift() ;
//       }
//       else {
//         let tdelta = Math.min(...tills);
//         time += tdelta;
//         tills = tills.map(function(x) {return x - tdelta}) ;
//       }
//     }
//     return time + Math.max(...tills)
//   };

//   describe("Short random tests", function() {
//     for (let i=0; i<10; i++) {
//       let len = Math.floor(Math.random() * 20 + 10);
//       let testArr = Array(len).fill(50).map(x => Math.floor(x*Math.random()) + 1);
//       let testArrCopy = testArr.slice();
//       let testN = Math.floor(Math.random() * 6) + 1;
//       let message = "Wrong answer for customers = [" + testArr.toString() + "] and n = " + testN;
//       Test.assertEquals(queueTime(testArr, testN), testFn(testArrCopy, testN), message);
//     }
//   });

//   describe("Long random tests", function() {
//     for (let i=0; i<10; i++) {
//       let len = Math.floor(Math.random() * 140 + 10);
//       let testArr = Array(len).fill(20).map(x => Math.floor(x*Math.random()) + 1);
//       let testArrCopy = testArr.slice();
//       let testN = Math.floor(Math.random() * 20) + 1;
//       let message = "Wrong answer for customers = [" + testArr.toString() + "] and n = " + testN;
//       Test.assertEquals(queueTime(testArr, testN), testFn(testArrCopy, testN), message);
//     }
//   });

//   describe("Big number random tests", function() {
//     for (let i=0; i<10; i++) {
//       let len = Math.floor(Math.random() * 40 + 10);
//       let testArr = Array(len).fill(100).map(x => Math.floor(x*(Math.random()^2)) + 1);
//       let testArrCopy = testArr.slice();
//       let testN = Math.floor(Math.random() * 10) + 1;
//       let message = "Wrong answer for customers = [" + testArr.toString() + "] and n = " + testN;
//       Test.assertEquals(queueTime(testArr, testN), testFn(testArrCopy, testN), message);
//     }
//   });

// }) () ;