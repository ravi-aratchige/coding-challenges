def twoSum(nums: list[int], target: int) -> list[int]:
    for i in range(0, len(nums)):
        num1 = nums[i]
        for j in range((nums.index(num1) + 1), len(nums)):
            num2 = nums[j]
            if num1 + num2 == target:
                return [i, j]
 
#  Test statements
                
print(twoSum([2, 7, 11, 15], 9))    # expected output = [0, 1]
print(twoSum([3,2,4], 6))           # expected output = [1, 2]
print(twoSum([3,3], 6))             # expected output = [0, 1]