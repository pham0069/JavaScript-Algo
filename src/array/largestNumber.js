/**
 * Given a 2D array
 * Return a 1D array, which contains the largest number of each row
 */


 function largestNumber(arr) {
    let results = [];
    for (let i = 0; i < arr.length; i++) {
      let largestNumber = arr[i][0];
      for (let j = 1; j < arr[i].length; j++) {
        if (arr[i][j] > largestNumber) {
          largestNumber = arr[i][j];
        }
      }
      results[i] = largestNumber; // results.push(largestNumber);
    }
  
    return results;
  }

  function largestNumber2(arr) {
    return arr.map(function(row) {
      return row.reduce(function(prev, current) {
        return current > prev ? current : prev;
      });
    });
  }

  function largestNumber3(arr) {
    return arr.map(Function.apply.bind(Math.max, null));
  }

  console.log(largestNumber3([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));