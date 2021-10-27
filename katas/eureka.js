// Description:
// The number 89 is the first integer with more than one digit that fulfills the property partially introduced in the title of this kata. What's the use of saying "Eureka"? Because this sum gives the same number.

// In effect: 89 = 8^1 + 9^2

// The next number in having this property is 135.

// See this property again: 135 = 1^1 + 3^2 + 5^3

// We need a function to collect these numbers, that may receive two integers a, b that defines the range [a, b] (inclusive) and outputs a list of the sorted numbers in the range that fulfills the property described above.

// Let's see some cases:

// sumDigPow(1, 10) == [1, 2, 3, 4, 5, 6, 7, 8, 9]

// sumDigPow(1, 100) == [1, 2, 3, 4, 5, 6, 7, 8, 9, 89]
// If there are no numbers of this kind in the range [a, b] the function should output an empty list.

// sumDigPow(90, 100) == []

function sumDigPow(a, b) {
  let result = [];
  // Iterate through the range
  for (let i = a; i <= b; i++) {
    let stringNumber = i.toString();
    let arrayNumber = stringNumber.split('');
    // Add power of digits
    let count = 0;
    for (let j = 0; j < arrayNumber.length; j++) {
      const currentDigit = parseInt(arrayNumber[j]);
      count += Math.pow(currentDigit, j + 1);
    }
    // Check if power of digits is equal to base
    if (count === i) {
      result.push(i);
    }
  }
  return result;
}

// Tests
// describe("Basic Tests", function() {
//   Test.assertSimilar(sumDigPow(1, 10), [1, 2, 3, 4, 5, 6, 7, 8, 9])
//   Test.assertSimilar(sumDigPow(1, 100), [1, 2, 3, 4, 5, 6, 7, 8, 9, 89])
//   Test.assertSimilar(sumDigPow(10, 100),  [89])
//   Test.assertSimilar(sumDigPow(90, 100), [])
//   Test.assertSimilar(sumDigPow(90, 150), [135])
//   Test.assertSimilar(sumDigPow(50, 150), [89, 135])
//   Test.assertSimilar(sumDigPow(10, 150), [89, 135])
// });

// describe("Random Tests", function() {
//   function filterFuncMine(n) {
//     return `${n}`.split("").map((x, i) => x ** (i+1)).reduce((a, b) => a+b) == n;
//   }

//   function *range(a, b) {
//     for (let i = a; i <= b; ++i) yield i;
//   }

//   function sumDigPowMine(a, b) {
//     return Array.from(range(a, b)).filter(filterFuncMine);
//   }

//   function randint(a, b) {
//     return ~~(Math.random() * (b-a+1)) + a;
//   }

//   for (let i = 0; i < 40; ++i) {
//     let a = randint(100, 500);
//     let b = randint(2000, 3000);
//     it(`a = ${a}, b = ${b}`, function() {
//       let result = sumDigPowMine(a, b);
//       Test.assertSimilar(sumDigPow(a, b), result);
//     });
//   }

//   for (let i = 0; i < 20; ++i) {
//     let a = randint(10, 1999);
//     let b = randint(2000, 3000);

//     it(`a = ${a}, b = ${b}`, function() {
//       let result = sumDigPowMine(a, b);
//       Test.assertSimilar(sumDigPow(a, b), result);
//     });
//   }

//   for (let i = 0; i < 15; ++i) {
//     let a = randint(2620000, 2640000);
//     let b = randint(2647000, 2648000);

//     it(`a = ${a}, b = ${b}`, function() {
//       let result = sumDigPowMine(a, b);
//       Test.assertSimilar(sumDigPow(a, b), result);
//     });
//   }
// });
