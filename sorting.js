

let arr = [0, 2, 213, 4, 21, 5, 3]


////////////////////////////////////////////////////////////merge sort//////////////////////////////////////


function mergeArr(arr) {
  if (arr.length <= 1) {
    return arr
  }

  let middle = Math.floor(arr.length / 2)
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  console.log(left, right);

  return sortMergeArray(mergeArr(left), mergeArr(right))
}

function sortMergeArray(left, right) {
  let sortedArr = []
  let i = 0
  let j = 0

  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      sortedArr.push(left[i])
      i++
    } else {
      sortedArr.push(right[j])
      j++
    }
  }

  while (i < left.length) {
    sortedArr.push(left[i])
    i++
  }
  while (j < right.length) {
    sortedArr.push(right[j])
    j++
  }
  console.log(sortedArr, 'sorted');

  return sortedArr
}

console.log(mergeArr(arr));



//////////////////////////////////////////////////////////////quick sort/////////////////////////////////////


function quickSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  let pivot = arr[arr.length - 1]
  let left = []
  let right = []

  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] > pivot) {
      right.push(arr[i])
    } else {
      left.push(arr[i])
    }
  }
  return [...quickSort(left), pivot, ...quickSort(right)]
}

console.log(quickSort(arr));



//////////////////////////////////////////////////////////////selection sort/////////////////////////////

//selection sort

for (let i = 0; i < arr.length; i++) {
  let min = i
  for (let j = i + 1; j < arr.length; j++) {
    if (arr[j] < arr[min]) {
      min = j
    }
  }
  let temp = arr[min]
  arr[min] = arr[i]
  arr[i] = temp
}

console.log(arr);



//////////////////////////////////////////////////////////////insertion sort//////////////////////////////


// insertion sort
for (let i = 0; i < arr.length; i++) {
  let numToInsert = arr[i]
  let j = i - 1
  while (j >= 0 && arr[j] > numToInsert) {
    arr[j + 1] = arr[j]
    j--
  }

  arr[j + 1] = numToInsert

}

console.log(arr);



//////////////////////////////////////////////////////////////bubble sort/////////////////////////////////////


// bubble sort
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length - 1 - i; j++) {
    if (arr[j] > arr[j + 1]) {
      let temp = arr[j]
      arr[j] = arr[j + 1]
      arr[j + 1] = temp
    }
  }
}

console.log(arr);


//////////////////////////////////////////LEET CODE:344. Reverse String////////////////////////////////////////


var reverseString = function(s) {
  let start = 0;
  let end = s.length - 1;
  
  while (start <= end) {
    [s[start], s[end]] = [s[end], s[start]];
      start++;
      end--;
  }

  console.log(s)
};

reverseString(['h','e','l','l','o']);

