// function max(numbers) {
//   var i = 0;
//   var maximum = numbers[i];
//   while (i < numbers.length) {
//     if (numbers[i] > maximum) {
//       maximum = numbers[i];
//     }
//     i++;
//   }
//       return maximum;
// }

// function min(numbers) {
//    var i = 0;
//    var minimum = numbers[i];
//    while (i < numbers.length) {
//       if (numbers[i] < minimum) {
//       minimum = numbers[i];
//     }
//     i++;
//    }
//       return minimum;
// }

// function average(numbers) {
//   var sum = 0;
//   var i = 0;
//   while (i < numbers.length) {
//     sum += numbers[i];
//     i++;
//   }
//   return sum/numbers.length;
// }

// //FizzBuzz

// function fizzBuzz(countTo) {
//   var array = [];
//   for (var i = 1; i < countTo; i++) {
//     //Alternative approach outlined in comments: 
//     //switch (i % 15)
//     switch(true) {
//       //case 3 , 6 , 9 , 12 array.push('fizz')
//       case i % 3 === 0:
//         array.push("fizz");
//         break;
//       //case 5 , 10 array,push('buzz')
//       case i % 5 === 0:
//         array.push("buzz");
//         break;
//       //case 0 array.push('fizzbuzz')
//       case i % 15 === 0:
//         array.push('fizzbuzz');
//         break;
//       default:
//         array.push(i);
//         break;
//     }
//   }
//   console.log(array);
// }


// fizzBuzz(15);

// //HOF 1

// function repeat(fn, n) {
//   var i = 0;
//   while(i < n) {
//     i++;
//     fn();
//   }
// }

// function hello() {
//   console.log("Hello World");
// }

// function goodbye() {
//   console.log("Goodbye world");
// }

// repeat(hello, 5);
// repeat(goodbye, 5);

// //HOF 2

// // Return only names that begin with 'R'
// const myNames = ['Rich', 'Joe', 'Bhaumik', 'Ray'];

// const filteredNames = filter(myNames, function(name) {
//     // This is a "predicate function" - it's a function that only returns a boolean
//     return name[0] === 'R';
// });

// console.log(filteredNames) // => ['Rich', 'Ray']

// // TASK -- DEFINE YOUR FILTER FUNCTION BELOW:
// function filter(arr, fn) {
//   let newArray = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (fn(arr[i]) === true) {
//       newArray.push(arr[i]);
//     }
//   }
//   return newArray;
// }

// filter(myNames, function(name) {
//   for (let i = 0; i < name.length; i++) {
//     if (name[i] === 'a') {
//     return true;
//     }
//   }
// });


// //HOF 3

// function hazardWarningCreator(typeOfWarning) {
//   let warningCounter = 0;
//   return function (location) {
//     warningCounter++;
//     console.log(`DANGER! There is a ${typeOfWarning} hazard at ${location}!`);
//     console.log(`The ${typeOfWarning} hazard alert has triggered ${warningCounter} time(s) today.`);
//   }
// }

// const rocksWarning = hazardWarningCreator('Rocks on the road');
// const flyingPigWarning = hazardWarningCreator('Flying pigs');
// const polarIceCapMeltWarning = hazardWarningCreator('Polar ice cap melt')

// rocksWarning("Himalayas");
// flyingPigWarning("Atlantis");
// polarIceCapMeltWarning("Florida");

//HOF 4

// let turtleMoves = [[0, 0], [0, 5], [-1, -3], [-3, 1], [2, -4], [3, 2]];

// function checkIfNegative(move) {
//   for (let i = 0; i < move.length; i++) {
//     if (move[i] < 0) {
//       return false;
//     }
//   }
//   return true;
// }

// console.log(turtleMoves.filter(checkIfNegative));

