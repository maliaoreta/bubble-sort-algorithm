// (for morning challenge) bubbleSort function that returns swap count 
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
  return swapCount;
};


// bubbleSort func that returns the sorted array, and is available to all Arrays
Array.prototype.bubbleSort = function () {

  var swapped = true;

  while (swapped === true) {

    swapped = false;

    for (var i = 0; i < this.length-1; i++) {

      var curr = this[i];
      var next = this[i+1];

      if (curr > next) {
        this[i] = next;
        this[i+1] = curr;
        swapped = true;
      }    
    }
  }

  return this;
}

