///////////////////////////////////////////SUM OF ARRAY USING RECURSION///////////////////////////////////

let sum = 0

function arrayRec(arr) {
  if (arr === 0) {
    return sum;
  } else {
    sum *= arr;
    return arrayRec(arr - 1);
  }
}

console.log(arrayRec(5));


//////////////////////////////////////////BINARY SEARCH USING RECURSION////////////////////////////////

function recursion2(arr, tar) {
  return search2(arr, tar, 0, arr.length)
}

function search2(arr, tar, left, right) {
  while (left > right) {
    return -1
  }
  let middle = Math.floor((right + left) / 2)
  if (arr[middle] == tar) {
    return middle
  }
  if (tar < arr[middle]) {
    return search2(arr, tar, left, middle - 1)
  } else {
    return search2(arr, tar, middle + 1, right)
  }
}

console.log(recursion2([1, 2, 3, 4, 5, 6, 7], 5));

//////////////////////////////////////////REVERSE STRING USING RECURSION////////////////////////////////

function reverse(strReverse) {
  if (strReverse.length <= 1) {
    return strReverse
  } else {
    return reverse(strReverse.slice(1)) + strReverse[0]
  }
}
let strReverse = 'alimiyan'
console.log(reverse(strReverse));

///////////////////////////////////////////// JAGGED TO NORMAL  USING RECURSION ///////////////////////////////

function jagged2(arr) {
  let normalArr = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      normalArr = normalArr.concat(jagged2(arr[i]))
    } else {
      normalArr.push(arr[i])
    }
  }
  return normalArr
}

console.log(jagged2([1, 2, [3, 4, 4, [4]]]));



////////////////////////////////////FACTORIAL OF ARRAY USING RECURSION/////////////////////////////////////////

// factorial of array

function factorial(arr, index = 0) {
  if (arr.length === index) {
    return 1
  }
  return sum = arr[index] * factorial(arr, index + 1)
}

console.log(factorial([1, 2, 3, 4, 5, 6, 7]));


///////////////////////////////////////CHECK WHETHER STRING IS PALINDROME OR NOT///////////////////////////////

function isPalindrome(str) {

  if (str.length <= 1) {
    return true;
  }

  if (str[0] !== str[str.length - 1]) {
    return false;
  }

  return isPalindrome(str.substring(1, str.length - 1));
  
}

console.log(isPalindrome("madam")); // true
console.log(isPalindrome("hello")); // false

////////////////////////////////////////LEET CODE:258. Add Digits//////////////////////////////////////////////

var addDigits = function(num) {
    
  if(String(num).length === 1)return num
  let arr = [...String(num)].map(Number);

  let sum = 0
  for(let i = 0; i < arr.length; i++){
      sum += arr[i]
  }

  return addDigits(sum)
};

console.log(addDigits(38)) //Output: 2