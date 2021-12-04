var removeElement = function (nums, val) {
    if (nums.indexOf(val) === -1) return nums.length;
    const copy = nums[0]
    /* алгоритм действий:
    * Копируем первый элемент
    * Потом находим индекс того элемента который нужно удалить в номерах
    * в первый элемент номерах вставляем элемент который нужно удалить
    * а в тот место где раньше стоял найденный элемент вставляем копию первого элемента*/
    const indexVal = nums.indexOf(val)
    nums[0] = nums[indexVal]
    nums[indexVal] = copy
    nums.shift()
    return removeElement(nums, val)
};
console.log(removeElement([3, 2, 2, 3], 3))