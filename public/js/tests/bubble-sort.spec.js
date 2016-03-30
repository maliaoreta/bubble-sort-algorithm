describe('bubbleSort', function () {

  it('should be a function', function () {

    expect(bubbleSort).to.be.a('function');
  });

  it('should take a single Array as an argument and sort it to ascending order', function () {

    var testArr = [5, 1, 4, 2, 8];
    var testArr2 = [3, 4, 2, 1, 6];
    var testArr3 = [2, 5, 5, 6, 1];

    var bs1 = new bubbleSort(testArr);
    var bs2 = new bubbleSort(testArr2);
    var bs3 = new bubbleSort(testArr3);

    expect(bs1.arr).to.deep.equal([1, 2, 4, 5, 8]);
    expect(bs2.arr).to.deep.equal([1, 2, 3, 4, 6]);
    expect(bs3.arr).to.deep.equal([1, 2, 5, 5, 6]);
  });

  it('should return the amount of moves', function () {

    var testArr = [5, 1, 4, 2, 8];
    var testArr2 = [3, 4, 2, 1, 6];
    var testArr3 = [2, 5, 5, 6, 1];
    
    expect(bubbleSort(testArr)).to.equal(4);
    expect(bubbleSort(testArr2)).to.equal(5);
    expect(bubbleSort(testArr3)).to.equal(4);
  });

  describe('bubbleSort', function () {

    // checks if bubbleSort is a method available to all Arrays 
    it('should be a method available to all Arrays', function () {

      var checkMethodArr = [1, 2, 3];
      expect(checkMethodArr).to.respondTo('bubbleSort');
    });

    it('should return the sorted array', function () {

      var testArr = [3, 5, 1];
      var testArr2 = [3, 2, 6, 1, 1, 9];
      var testArr3 = [9, 7, 3, 0, 5];

      expect(testArr.bubbleSort()).to.deep.equal([1, 3, 5]);
      expect(testArr2.bubbleSort()).to.deep.equal([1, 1, 2, 3, 6, 9]);
      expect(testArr3.bubbleSort()).to.deep.equal([0, 3, 5, 7, 9]);
    });
  });
});