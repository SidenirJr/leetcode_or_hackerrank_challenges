// Function to remove duplicates from a sorted array, link: https://leetcode.com/problems/remove-duplicates-from-sorted-array/
function removeDuplicates(nums: number[]): number {
    let k = 0;

    for (let i = 1; i < nums.length; i++) {
        if (nums[k] !== nums[i]){
            nums[k+1] = nums[i];
            k++;
        }
    }

    return k+1;
};

// Test cases
console.log(removeDuplicates([1, 1, 2])); // Output: 2
console.log(removeDuplicates([0,0,1,1,2,2,3,3,4])); // Output: 5

/*
The function works by using a two-pointer approach.
The first pointer `k` keeps track of the position of the last unique element found,
while the second pointer `i` iterates through the array. 
Whenever a new unique element is found (i.e., `nums[k] !== nums[i]`), 
it is moved to the position `k + 1`, and `k` is incremented. Finally, the function returns `k + 1`,
which represents the new length of the array without duplicates.
*/