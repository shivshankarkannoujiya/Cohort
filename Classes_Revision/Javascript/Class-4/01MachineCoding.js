const arr = [1, 2, 3, 4, 5, 6];

// Error: .forEach function does not exist on arr variable
/**
 * @description
 * Return: Nothing
 * Input: Callback Function
 *        Callback Fn: parameters: value, index
 * Call callback fn for every value
 */

if (!Array.prototype.myforEach) {
  Array.prototype.myforEach = function (callbackFn) {
    const originalArray = this;
    for (let i = 0; i < originalArray.length; i++) {
      callbackFn(originalArray[i], i);
    }
  };
}

arr.myforEach(function (value, index) {
  console.log(`Value at index ${index} is: ${value}`);
});
