var myArr = [30, 27, 24, 21, 18, 15, 12, 9, 6, 3];
var arrayContainer = document.getElementById('arrayContainer');
var bubbleSortButton = document.getElementById('bubbleSortButton');
  bubbleSortButton.addEventListener('click', function () { 

    bubbleSortDivs(myArr); 
  });

// Create initial array divs
myArr.forEach(function (index) {

  var divIndex = document.createElement('div');
    divIndex.style.height = '20px';
    divIndex.style.width = index + 'px';
    divIndex.style.backgroundColor = 'pink';
    divIndex.id = index.toString();
  arrayContainer.appendChild(divIndex);
});


function bubbleSortDivs (arr) {

  var swapped = true;
  while (swapped === true) {

    swapped = false;

    for (var i = 0; i < arr.length-1; i++) {

      var curr = arr[i];
      var next = arr[i+1];
      var currDiv = document.getElementById(curr);
      var nextDiv = document.getElementById(next);

      if (curr > next) {
        arr[i] = next;
        arr[i+1] = curr;
        swapped = true;

        currDiv.style.width = next + 'px';
        currDiv.id = next.toString();
        nextDiv.style.width = curr + 'px';
        nextDiv.id = curr.toString();
      }
    }
  }
}