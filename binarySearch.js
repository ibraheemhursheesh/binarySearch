function binarySearch(arr, target, left, right) {
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

const arr = [5, 6, 7, 8, 9];
let key = 8;
console.log(binarySearch(arr, key, 0, arr.length - 1));
