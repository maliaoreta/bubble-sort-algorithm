function bubbleSort (arr) {

  var swapped = true;
  var swapCount = 0;

  while (swapped === true) {

    swapped = false;

    for (var i = 0; i < arr.length-1; i++) {

      var curr = arr[i];
      var next = arr[i+1];

      if (curr > next) {
        arr[i] = next;
        arr[i+1] = curr;
        swapCount += 1;
        swapped = true;
      }    
    }
  }

  this.arr = arr;
  console.log('swapCount', swapCount);
  return swapCount;
}

