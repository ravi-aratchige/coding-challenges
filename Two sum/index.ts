function twoSum(nums: number[], target: number): void {
    let num1: number = 0, num2: number = 0, index1: number = 0, index2: number = 0;
    for (let i: number = 0; i < nums.length; i++) {
        num1 = nums[i];
        index1 = i;
        console.log(num1);
        for (let j: number = (i + 1); j < nums.length; j++) {
            num2 = nums[j];
            console.log(num2);
            if (target === num1 + num2) {
                index2 = j;
                break;
            }
        }
        if (target === num1 + num2) {
            break;
        }
    }
    console.log(`${index1}, ${index2}`);
}

twoSum([2, 7, 11, 15], 9);      // expected output = [0,1];
twoSum([3,2,4], 6);             // expected output = [1,2];
twoSum([3,3], 6);               // expected output = [0,1];