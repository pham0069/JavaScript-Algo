/**
 * Create a function that looks through an array arr 
 * and returns the first element in it that passes a 'truth test'. 
 * This means that given an element x, the 'truth test' is passed if func(x) is true. 
 * If no element passes the test, return undefined.
 */

 function findElement(arr, func) {
    let num = 0;
  
    for (let i = 0; i < arr.length; i++) {
      num = arr[i];
      if (func(num)) {
        return num;
      }
    }
  
    return undefined;
  }

  // use Array.prototype.find() method
  function findElement2(arr, func) {
    return arr.find(func);
  }

  // use Array.prototype.indexOf() to return the first index that match the condition
  function findElement3(arr, func) {
    return arr[arr.map(func).indexOf(true)];
  }

  // recursive
  function findElement4(arr, func) {
    return arr.length && !func(arr[0]) 
      ? findElement4(arr.slice(1), func)
      : arr[0];
  }

  console.log(findElement3([1, 2, 3, 4], num => num % 10 === 0));