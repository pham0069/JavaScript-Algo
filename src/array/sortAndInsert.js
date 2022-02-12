/**
 * Return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted. 
 * The returned value should be a number.
 */


 // arr.sort() will sort array in order of string value (even if array is of number)
 // to sort in numerical order, need to specify the numerical comparison
 function getIndexToIns(arr, num) {
    arr.sort((a, b) => a-b);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] >= num) {
        return i;
      }
    }
    return arr.length;
  }

  // no need to sort, only count number of items < num
  function getIndexToIns2(arr, num) {
    arr.filter(i => i < num).length;
  }

  // find index of the smallest item >= num in arr 
  // (i.e. the first one found >= num after array is sorted)
  function getIndexToIns3(arr, num) {
    let index = arr.sort((a, b) => a-b)
    .findIndex(i => i >= num);
    return index === -1 ? arr.length : i;
  }

  // find index of num when it is added to array and got sorted
  function getIndexToIns(arr, num) {
    return arr
      .concat(num)
      .sort((a, b) => a - b)
      .indexOf(num);
  }  
  
  console.log(getIndexToIns([40, 60], 50));