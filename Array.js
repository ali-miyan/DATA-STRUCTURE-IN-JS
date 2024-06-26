
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

//////////////////////////////////////LEET CODE:3028. Ant on the Boundary/////////////////////////////////////////

var returnToBoundaryCount = function(nums) {
    let sum = 0
    let count = 0
    for(let i = 0; i < nums.length; i++){
        sum += nums[i]
        if (sum === 0) count++;
    }

    return count

};

console.log(returnToBoundaryCount([2,3,-5])) //OUTPUT 1

//////////////////////////////////////////LEET CODE:1652. Defuse the Bomb/////////////////////////////////////


var decrypt = function(code, k) {
    let arr = []
    for(let j = 0; j < code.length; j++){
        let sum = 0;
        if (k > 0) {
            for (let i = 0; i < k; i++) {
                sum += code[(j + i + 1) % code.length];
            }
        } else {
            for (let i = 0; i > k; i--) {
                sum += code[(j + i - 1 + code.length) % code.length];
            }
        }
        arr.push(sum)
    }

    return arr
};


/////////////////////////////////////FIND THE SECOND LARGEST AND LEAST IN AN ARRAY//////////////////////////////


let arr = [5,3,1,6,4,21,5]
let largest = 0;
let secondLargest = 0
let secondsmallest = Infinity
let smallest = Infinity

for(let i = 0; i < arr.length-1; i++){
        if(largest < arr[i]){
            largest = arr[i]
        }
        if(smallest > arr[i]){
            smallest = arr[i]
        }
}

for(let i = 0; i < arr.length-1; i++){
        if(secondLargest < arr[i] && arr[i] !== largest){
            secondLargest = arr[i]
        }
        if(secondsmallest > arr[i] && arr[i] !== smallest){
            secondsmallest = arr[i]
        }
}

console.log(secondLargest,secondsmallest)


///////////////////////////////////////////LEET CODE:238. Product of Array Except Self////////////////////////

var productExceptSelf = function(nums) {

    const result = new Array(nums.length).fill(1);
    
    let prefixProduct = 1;
    for (let i = 0; i < nums.length; i++) {
        result[i] *= prefixProduct;
        prefixProduct *= nums[i];
    }

    let suffixProduct = 1;
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= suffixProduct;
        suffixProduct *= nums[i];
    }

    return result;
};

console.log(productExceptSelf([1,2,3,4]));
// Output: [24,12,8,6]

//////////////////////////////////3079. Find the Sum of Encrypted Integers//////////////////////////////////

var sumOfEncryptedInt = function(nums) {

    let encrypt = (num) => {
        let largest = 0;
        let split = num.toString().split('')
        for(let i = 0; i < split.length; i++){
            if(largest < Number(split[i])){
                largest = Number(split[i])
            }
        }
    return new Array(split.length).fill(largest);

    }
    let sum = 0
    let arr = []
    for(let i = 0; i < nums.length; i++){
        if(nums[i].toString().length !== 1){
            arr = encrypt(nums[i])
            sum += Number(arr.join(''))
        }else{
            sum += nums[i]
        }
    }

    return sum
};


console.log(sumOfEncryptedInt([10,21,31]));//Output: 66

//////////////////////////////////////3069. Distribute Elements Into Two Arrays I///////////////////////////////

var resultArray = function(nums) {

    let arr1 = [nums[0]]
    let arr2 = [nums[1]]

    for(let i = 2; i < nums.length; i++) {
        if(arr1[arr1.length-1] > arr2[arr2.length-1]){
            arr1.push(nums[i])
        }else{
            arr2.push(nums[i])
        }
    }

    return [...arr1,...arr2];
};