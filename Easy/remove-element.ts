// This function removes all instances of a specific value from an array. Link: https://leetcode.com/problems/remove-element/
function removeElement(nums: number[], val: number): number {
    let k: number = 0;

    for (let i = 0; i < nums.length; i++){
        if(nums[i] !== val) {
            nums[k] = nums[i];
            k++
        }
    }

    return k;
};

/*
This function removes all instances of a specific value from an array.
Why don't we use .filter?
Because .filter creates a new array, while this function modifies the original array in place and returns the new length.
Remember to look in the question if it needs to modify the original array (in place).
*/

