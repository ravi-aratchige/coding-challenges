// Given a sorted array of integers and a target value, return
// the index if the target is found, or return the index where
// it would be if it was inserted in the correct order.

function searchInsertPosition(array, target) {
    let index = 0;

    while (target > array[index]) {
        index++;
    }
    
    return index;
}

let array = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
let target = 65;

console.log(searchInsertPosition(array, target));