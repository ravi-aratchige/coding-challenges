function twoSum(nums, target) {
    var num1 = 0, num2 = 0, index1 = 0, index2 = 0;
    for (var i = 0; i < nums.length; i++) {
        num1 = nums[i];
        index1 = i;
        console.log(num1);
        for (var j = (i + 1); j < nums.length; j++) {
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
    console.log("".concat(index1, ", ").concat(index2));
}
twoSum([2, 7, 11, 15], 9); // expected output = [0,1];
twoSum([3, 2, 4], 6); // expected output = [1,2];
twoSum([3, 3], 6); // expected output = [0,1];
