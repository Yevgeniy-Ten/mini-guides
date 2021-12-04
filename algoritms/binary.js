function searchEl(arr, el) {
  let left = -1;
  let right = arr.length;
  console.log("right", right);
  while (right - left > 1) {
    const mid = Math.floor((right + left) / 2);
    if (arr[mid] === el) {
      return mid;
    } else if (arr[mid] > el) {
      right = mid;
    } else {
      left = mid;
    }
  }
  return -1;
}

const arr = [1, 2, 3, 4];
