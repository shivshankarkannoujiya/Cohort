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

// Error: .map function does not exist on arr variable
/**
 * @description
 * Return: New Array
 * modify: Do not modify original array
 * input: callbackFn
 *        callbackFn parameters: value, index
 */

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callbackFn) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      const returnValueOfEachElement = callbackFn(this[i], i);
      result.push(returnValueOfEachElement);
    }
    return result;
  };
}

const doubledArray = arr.myMap((e) => e * 2);
console.log(doubledArray);
