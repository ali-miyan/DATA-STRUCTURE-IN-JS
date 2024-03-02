
/////////////////////////////////////LEET CODE 2418:SORT THE PEOPLE//////////////////////////////////////////

var sortPeople = function (names, heights) {
    let temp;
    let tempHeight;

    for (let i = 0; i < heights.length; i++) {
        for (let j = i + 1; j < heights.length; j++) {
            if (heights[i] < heights[j]) {
                temp = names[i];
                names[i] = names[j];
                names[j] = temp;

                tempHeight = heights[i];
                heights[i] = heights[j];
                heights[j] = tempHeight;
            }
        }
    }

    return names;
};

console.log(sortPeople(["Mary", "John", "Emma"], [180, 165, 170]));
//Output: ["Mary","Emma","John"]
//Explanation: Mary is the tallest, followed by Emma and John.

/////////////////////////////////LEET CODE: 2176. Count Equal and Divisible Pairs in an Array/////////////////

var countPairs = function (nums, k) {
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j]) {
                if (i * j % k == 0) {
                    count++
                }
            }
        }
    }
    return count
};

console.log(countPairs([3, 1, 2, 2, 2, 1, 3], 2));//Output: 4
// Explanation:
// There are 4 pairs that meet all the requirements:
// - nums[0] == nums[6], and 0 * 6 == 0, which is divisible by 2.
// - nums[2] == nums[3], and 2 * 3 == 6, which is divisible by 2.
// - nums[2] == nums[4], and 2 * 4 == 8, which is divisible by 2.
// - nums[3] == nums[4], and 3 * 4 == 12, which is divisible by 2.

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////