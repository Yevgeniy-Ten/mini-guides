const array = [1, 5, 6, 7, 8, 3, 6, 9, 10]
function linearSearch(arr, item) {
    let itemIndex = null
    arr.forEach((el, i) => {
        if(el===item){
            itemIndex = i
        }
    })
    return itemIndex
}
// O(n)
console.log(linearSearch(array, 11))