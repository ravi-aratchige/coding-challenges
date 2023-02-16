function twoSum(nums: number[], target: number): number[] {
    let num1: number = 0, num2: number = 0, index1: number = 0, index2: number = 0;
    for (index1 = 0; index1 < nums.length; index1++) {
        num1 = nums[index1];
        for (index2 = (index1 + 1); index2 < nums.length; index2++) {
            num2 = nums[index2];
            if (target === num1 + num2) {
                break;
            }
        }
        if (target === num1 + num2) {
            break;
        }
    }
    return [index1, index2];
}

console.log(twoSum([2, 7, 11, 15], 9));      // expected output = [0,1];
console.log(twoSum([3,2,4], 6));             // expected output = [1,2];
console.log(twoSum([3,3], 6));               // expected output = [0,1];