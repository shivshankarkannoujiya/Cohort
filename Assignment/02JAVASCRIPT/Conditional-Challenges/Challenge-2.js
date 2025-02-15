function findLargest(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    }  else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

console.log(findLargest(5, 5, 1));

