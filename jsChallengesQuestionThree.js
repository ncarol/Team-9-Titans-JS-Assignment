//jsChallengeThree

/*Write afunction named twoSum which takes two parameters: nums and target. Given an array of integers nums and an integer ,
return indices of the two numbers such that they add up to the target
You may assume that each input would have exactly one solution, and you may not use the same element twice.
You can return the answer in any order.*/

//sudo code

/*
 1.create a function twosum
 2.with two parameters nums and target
 3.within the function write logic that returns indices of two
 4.the two indicies should sumup to the target
 */

// solution

// declaring a function twosum
function twoSum(nums, target) {
  //use map to store key-value pairs an manuplate them
  let element = new Map();

  //the for loop will iterate through the array
  for (let i = 0; i < nums.length; i++) {
    //
    const currentValue = nums[i];
    const targetDifference = target - currentValue;

    if (element.has(targetDifference)) {
      return [element.get(targetDifference), i];
    }

    element.set(currentValue, i);
  }

  // No solution found
  return [];
}
const nums = [7, 4, 5, 2, 6, 11];
const target = 6;

const result = twoSum(nums, target);
console.log(result);
