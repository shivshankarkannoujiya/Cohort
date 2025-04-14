# Array Methods

## 1. every()
- The every() method checks if all items in an array meet a condition.
- It runs a function on each item in the array.
- If all items pass the test, it returns true.
- If any item fails the test, it returns false.
- It does not change the original array.

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const isAllEven = numbers.every((num) => num % 2 === 0);
console.log(isAllEven);
```
## Syntax
- every(callbackFn)
- every(callbackFn, thisArgs)

> callbackFn
- A function to execute for each element in the array

> callbackFn Arguments

`element`: The current element being processed in the array.

`index`: The index of the current element being processed in the array.

`array`: The array every() was called upon.

> Return value
- `True`: if the callbackFn return True
- `False`: if the callbackFn returns false


# 2. fill()
- The fill() method changes all or some elements in an array to a specified value.
- It modifies the original array.
- You can choose a start and end position (optional).
If no start and end are given, it fills the whole array.

```javascript
const arr = [1, 2, "abhi", 4, 5];
arr.fill(10, 1, 3)
console.log(arr);

// includes: startIndex
// exclude: endIndex
```

## Syntax
- fill(value)
- fill(value, startIndex)
- fill(value,startIndex, endIndex)

> Parameters

- value
- startIndex: (optional)
- endIndex: (optional)

> Return Value
- The modified array, filled with value.

### Description

- The fill() method modifies the array but does not change its length.

- It also fills empty slots in sparse arrays.

- It works on any object with a length property, but not on strings (because they are immutable).

## NOTE
- If an empty array (length = 0) uses fill(), nothing happens because there's nothing to modify.

- To use fill() when creating an array, make sure the array has a non-zero length.

```javascript
let emptyArr = [];
emptyArr.fill(5);  
console.log(emptyArr); // Still []

let nonEmptyArr = new Array(3).fill(5);
console.log(nonEmptyArr); // [5, 5, 5]
```

# 3. 