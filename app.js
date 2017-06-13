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
    sum += numbers.length;
  }
  return sum/numbers.length;
}

function average(numbers) {
  var sum = 0;
  var i = 0;
  while (i < numbers.length) {
    sum += numbers[i];
    // console.log(i);
    i++;
  }
  return sum/numbers.length;
}
