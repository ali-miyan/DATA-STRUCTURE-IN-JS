
////////////////////////////////////// finding index using binary search///////////////////////////////////////

function bin(arr,tar){
  let left = 0
  let right = arr.length-1
  while(left<=right){
    let middle = Math.floor(right+left/2)

    if(arr[middle] == tar){
      return middle
    }

    if (tar < arr[middle]) {
      right = middle-1
    } else {
      left = middle+1
    }

  }
  return -1
}

console.log( bin([1,2,3,4,5,6,7],3));


//////////////////////////////////////////BINARY SEARCH USING RECURSION////////////////////////////////

function recursion2(arr,tar){
    return search2(arr,tar,0,arr.length)
  }
  
  function search2(arr,tar,left,right){
    while(left>right){
      return -1
    }
    let middle = Math.floor((right+left)/2)
    if (arr[middle]==tar) {
      return middle
    }
    if(tar < arr[middle]){
      return search2(arr,tar,left,middle-1)
    }else{
      return search2(arr,tar,middle+1,right)
    }
  }
  
  console.log(recursion2([1,2,3,4,5,6,7],5));