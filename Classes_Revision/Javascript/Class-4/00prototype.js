const arr = [1, 2, 3, 4, 5];

Array.prototype.abhi = function () {
  console.log(`First Element of arr is : ${this[0]}`);
  console.log(this);
};

arr.abhi();

const arr2 = [1, 2, 3, 4, 5, 6];
arr2.abhi()