// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
  let arrayA = a.split('');
  let arrayB = b.split('');
  let numberArrayA = arrayA.map((character) => {
    return Number(character);
  })
  let numberArrayB = arrayB.map((character) => {
    return Number(character);
  })
  let smallerNumber = numberArrayA;
  let largerNumber = numberArrayB;
  if (numberArrayA.length > numberArrayB.length) {
    smallerNumber = numberArrayB;
    largerNumber = numberArrayA;
  }
  for (let i = 1; i <= smallerNumber.length; i++) {
    largerNumber[largerNumber.length - i] = largerNumber[largerNumber.length - i] + smallerNumber[smallerNumber.length - i];
  }
  for (let i = 1; i <= largerNumber.length; i++) {
    if (largerNumber[largerNumber.length - i] >= 10) {
      largerNumber[largerNumber.length - i] -= 10;
      if (i < largerNumber.length) {
        largerNumber[largerNumber.length - i - 1] += 1;
      } else {
        largerNumber.unshift(1);
      }
    }
  }
  let resultArray = largerNumber.map((number) => {
    return number.toString();
  })
  return resultArray.join('');
}

// describe('add', function() {
//   // Disable Node 10.x
//   if (!/^v[68]\./.test(process.version)) throw new Error("Only Node < 10.x are allowed");

//   it('should handle small numbers', function() {
//     Test.assertEquals(add('91', '19'), '110');
//     Test.assertEquals(add('123456789', '987654322'), '1111111111');
//     Test.assertEquals(add('999999999', '1'), '1000000000');

//     var a, b, i;
//     for(i = 0; i < 3; i++) {
//       a =  Math.round(Math.random() * 1000000);
//       b = Math.round(Math.random() * 1000000);

//       Test.expect(add('' + a, '' + b) === '' + (a + b));
//     }
//   });
//   it('should handle big numbers', function() {
//     var sum;

//     sum = add('823094582094385190384102934810293481029348123094818923749817',
//               '234758927345982475298347523984572983472398457293847594193837');
//     Test.assertEquals(sum, '1057853509440367665682450458794866464501746580388666517943654');

//     sum = add('234859234758913759182357398457398474598237459823745928347538',
//               '987429134712934876249385134781395873198472398562384958739845');
//     Test.assertEquals(sum, '1222288369471848635431742533238794347796709858386130887087383');

//     sum = add('854694587458967459867923420398420394845873945734985374844444',
//               '333333333333439439483948394839834938493843948394839432322229');
//     Test.assertEquals(sum, '1188027920792406899351871815238255333339717894129824807166673');

//     sum = add('666666665656566666666565656666666656565666666665656566666666',
//               '464646464646464644646464646464646464646464646463463463463466');
//     Test.assertEquals(sum, '1131313130303031311313030303131313121212131313129120030130132');

//     sum = add('987429134712934876249385134781395873198472398562384958739845234859234758913759182357398457398474598237459823745928347538',
//               '835743829547328954732895474893754893753281957319857432958432548937859483265893274891378593187431583942678439217431924789');
//     Test.assertEquals(sum, '1823172964260263830982280609675150766951754355882242391698277783797094242179652457248777050585906182180138262963360272327');
//   });
// });