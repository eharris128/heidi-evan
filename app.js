function max(numbers) {
  var i = 0;
  var maximum = numbers[i];
  while (i < numbers.length) {
    if (numbers[i] > maximum) {
      maximum = numbers[i];
    }
    i++;
  }
      return maximum;
}

function min(numbers) {
   var i = 0;
   var minimum = numbers[i];
   while (i < numbers.length) {
      if (numbers[i] < minimum) {
      minimum = numbers[i];
    }
    i++;
   }
      return minimum;
}

function average(numbers) {
  var sum = 0;
  var i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    i++;
  }
  return sum/numbers.length;
}

//FizzBuzz

function fizzBuzz(countTo) {
  var array = [];
  for (var i = 1; i < countTo; i++) {
    switch(true) {
      case i % 3 === 0:
        array.push("fizz");
        break;
      case i % 5 === 0:
        array.push("buzz");
        break;
      case i % 15 === 0:
        array.push('fizzbuzz');
        break;
      default:
        array.push(i);
        break;
    }
  }
  console.log(array);
}


fizzBuzz(15);




