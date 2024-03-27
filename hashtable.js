/////////////////////////////////////////////////////// HASH TABLE //////////////////////////////////

class hashTable {
  constructor(size) {
    this.items = Array(size)
    this.size = size
  }

  hash(key) {
    let hashKey = key.toString()
    let hashedVal = 0
    for (let i = 0; i < hashKey.length; i++) {
      hashedVal += hashKey.charCodeAt(i)
    }
    return hashedVal % this.size
  }

  set(key, val) {
    const index = this.hash(key)
    this.items[index] = val
  }

  get(key) {
    const index = this.hash(key)
    return this.items[index]
  }

  remove(key) {
    const index = this.hash(key)
    delete this.items[index]
  }

  print() {
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i]) {
        console.log(i, this.items[i]);

      }
    }
  }

}

const hash = new hashTable(50)

hash.set('ali', 'miyan')
console.log(hash.get('ali'));
hash.print()

let arr = [1, 3, 4, 4, 4, 5, 122, 4, 6, 7]
let ind = 0
for (let i = 0; i < arr.length; i++) {
  if (!hash.get(arr[i])) {
    hash.set(arr[i], true)
    arr[ind] = arr[i]
    ind++
  }
}
arr.length = ind
console.log(arr);


hash.set('name', 'ali')
hash.set('age', 87)
console.log(hash.get('name'));
console.log(hash.get('age'));
hash.print()




/////////////////////////////////////////////// MAP QUESTIONS///////////////////////////////////

const map = new Map()
const result = []

// let arr = ['a','a','a','l','d','f']

for (let i = 0; i < arr.length; i++) {
  if (!hash.get(arr[i])) {
    hash.set(arr[i], true)
    result.push(arr[i])
  }
}


let index = 0
for (let i = 0; i < arr.length; i++) {
  if (!map.has(arr[i])) {
    map.set(arr[i])
    arr[index] = arr[i]
    index++
  }
}

arr.length = index
console.log(arr);

for (let i = 0; i < arr.length; i++) {
  if (map.has(arr[i])) {
    map.set(arr[i], map.get(arr[i]) + 1)
  } else {
    map.set(arr[i], 1)
  }
}
console.log(map);



//////////////////////////////////////////LEET CODE 448:Find All Numbers Disappeared in an Array///////////////


var findDisappearedNumbers = function (nums) {
  let obj = {}
  let arr = []

  for (let i = 0; i < nums.length; i++) {
    obj[nums[i]] = true
  }
  for (let i = 1; i <= nums.length; i++) {
    if (!obj[i]) {
      arr.push(i)
    }
  }

  return arr

};

const ans = findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1])
console.log(ans);//OUTPUT [5,6]




//////////////////////////////////////////LEET CODE 268. Missing Number ////////////////////////////////

var missingNumber = function (nums) {
  let hash = {}
  for (let i = 0; i < nums.length; i++) {
    hash[nums[i]] = true
  }
  for (let i = 0; i <= nums.length; i++) {
    if (!hash[i]) {
      return i
    }
  }
};

console.log(missingNumber([0, 4, 3, 5, 1]));//OUTPUT[2]  


///////////////////////////////////LEET CODE 2956. Find Common Elements Between Two Arrays//////////////////////

var findIntersectionValues = function (nums1, nums2) {
  const map = new Map()
  for (let i = 0; i < nums1.length; i++) {
    map.set(nums1[i], true)
  }
  let count = 0
  for (let i = 0; i < nums2.length; i++) {
    if (map.has(nums2[i])) {
      count++
    }
  }
  const map2 = new Map()
  let count2 = 0
  for (let i = 0; i < nums2.length; i++) {
    map2.set(nums2[i], true)
  }
  for (let i = 0; i < nums1.length; i++) {
    if (map2.has(nums1[i])) {
      count2++
    }
  }

  return [count2, count]
};

console.log(findIntersectionValues([4, 3, 2, 3, 1], [2, 2, 5, 2, 3, 6]));//Output: [3,4]
// Explanation: We calculate the values as follows:
// - The elements at indices 1, 2, and 3 in nums1 occur at least once in nums2. So the first value is 3.
// - The elements at indices 0, 1, 3, and 4 in nums2 occur at least once in nums1. So the second value is 4.


///////////////////////////////////LEET CODE : 771. Jewels and Stones/////////////////////////////////////////

var numJewelsInStones = function (jewels, stones) {
  let map = new Map()
  for (let i = 0; i < jewels.length; i++) {
    map.set(jewels[i], true)
  }
  let count = 0
  for (let i = 0; i < stones.length; i++) {
    if (map.has(stones[i])) {
      count++
    }
  }
  return count
};

console.log(numJewelsInStones('aA', "aAAbbbb")); //Output: 3



/////////////////////////////////////////2965. Find Missing and Repeated Values///////////////////////////////

var findMissingAndRepeatedValues = function (grid) {
  let arr = []
  let map = new Map()
  let count = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[i].length; j++) {
      if (map.has(grid[i][j])) {
        arr.push(grid[i][j])
      } else {
        map.set(grid[i][j], true)
      }
      count++
    }
  }

  for (let i = 1; i <= count; i++) {
    if (!map.has(i)) {
      arr.push(i)
    }
  }
  return arr
};

console.log(findMissingAndRepeatedValues([[1, 3], [2, 2]]));// Output: [2,4]
// Explanation: Number 2 is repeated and number 4 is missing so the answer is [2,4].

////////////////////////////1941. Check if All Characters Have Equal Number of Occurrences/////////////////

var areOccurrencesEqual = function (s) {
  let map = new Map()
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1)
    } else {
      map.set(s[i], 1)
    }
  }

  let set = new Set(map.values());
  return set.size === 1;
};

console.log(areOccurrencesEqual('abacbc'));//Output: true


/////////////////////////////////LEET CODE:961. N-Repeated Element in Size 2N Array////////////////////////////


var repeatedNTimes = function(nums) {
  let map = new Map()
  for(let val of nums){
      if(map.has(val)){
          map.set(val,map.get(val)+1)
      }else{
          map.set(val,1)
      }
  }

  let result = 0
  let maxKey;

  for(let [key,value] of map){
      if(value > result){
          result = value
          maxKey = key;
      }
  }

  return maxKey
};

console.log(repeatedNTimes([1,2,3,3]));//Output: 3

/////////////////////////////////////LEET CODE:2215. Find the Difference of Two Arrays/////////////////////////

var findDifference = function(nums1, nums2) {
  const s1 = new Set(nums1);
  const s2 = new Set(nums2);
  
  let arr1 = [];
  let arr2 = [];

  for (let num of s1) {
      if (!s2.has(num)) {
          arr1.push(num);
      }
  }

  for (let num of s2) {
      if (!s1.has(num)) {
          arr2.push(num);
      }
  }

  return [arr1, arr2];
};

console.log(findDifference([1,2,3],[2,4,6]));//Output: [[1,3],[4,6]]
