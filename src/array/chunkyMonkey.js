/**
 * Write a function that splits an array (first argument) 
 * into groups the length of size (second argument) and returns them as a two-dimensional array.
 * 
 * chunkArrayInGroups(["a", "b", "c", "d"], 2) should return [["a", "b"], ["c", "d"]].
 * chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3) should return [[0, 1, 2], [3, 4, 5]]
 * chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4) should return [[0, 1, 2, 3], [4, 5]]
 */

 function chunkArrayInGroups(arr, size) {
    let temp = [];
    let result = [];
  
    for (let a = 0; a < arr.length; a++) {
      if (a % size !== size - 1) temp.push(arr[a]);
      else {
        temp.push(arr[a]);
        result.push(temp);
        temp = [];
      }
    }
  
    if (temp.length !== 0) result.push(temp);
    return result;
  }

 function chunkArrayInGroups2(arr, size) {
    let newArr = [];
    for (let i = 0; i < arr.length; i += size) {
      newArr.push(arr.slice(i, i + size));
    }
    return newArr;
  }


  console.log(chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4));