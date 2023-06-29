// solution question 2
function hasDuplicates(nums) {
    //[1, 1, 2, 3]
    nums.sort((a, b) => {return b-a});
    for (let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i-1] === nums[i]) return true;
    } 
    return false;
}