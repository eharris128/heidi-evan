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