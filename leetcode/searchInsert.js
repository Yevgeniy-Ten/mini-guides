var searchInsert = function (nums, target) {
    let i = 0;
    for (i; i < nums.length; i++) {
        if (nums[i] === target || nums[i] > target) {
            return i
        }
    }
    return i;
};
console.log(searchInsert([2, 3, 4, 7, 8, 9], 5))