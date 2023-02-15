// Given an array of integers 'nums' and an integer 'target', return indices
// of the two numbers such that they add up to 'target'.
// You may assume that each input would have exactly one solution, and
// you may not use the same element twice.
// You can return the answer in any order.

// PROBLEM SOURCE - LeetCode (https://leetcode.com/problems/two-sum/)

function twoSum(nums: number[], target: number): void {
    let index1: number = 0, index2: number = 0;
    let num1: number = 0, num2: number = 0;
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