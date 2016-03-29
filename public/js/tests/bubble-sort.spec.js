describe('bubbleSort', function () {

  // var bubbleTest = null;

  // beforeEach(function () {

  //   bubbleTest = new bubbleSort();
  // });

  it('should be a function', function () {

    expect(bubbleSort).to.be.a('function');
  });

  it('should take an Array as an argument', function () {

    var testArr = [1,2,3];
    expect(bubbleSort(testArr)).to.equal(testArr);
  })
});