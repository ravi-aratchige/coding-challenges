function searchInsertPosition(input) {
    let index = 0;

    for (let i = 0; i < input.length; i++) {
        if (input[i] === target) {
            index = i;
            break;
        }
    }

    if (index === 0) {
        for (let i = 0; i < input.length; i++) {
            if (input[i] > target) {
                index = i;
                break;
            }
        }
    }
    return index;
}

let array = [10, 20, 30, 40, 50, 70, 80, 90];
let target = 100;

console.log(searchInsertPosition(array));