/**
 * Given 2 strings
 * Check if the first string contains all the letters of the second string
 * ignore case
 */

// indexOf() allows finding index of character present in the string (same as array)
 function mutation(arr) {
    let str = arr[0].toLowerCase();
    let check = arr[1].toLowerCase();
    console.log(str, check)
    for(let i in check) {
      if (str.indexOf(check[i]) === -1) {
        return false;
      }
    }
    return true;
  }

  // every() ~ match all return true, otherwise return false
  function mutation2(arr) {
    return arr[1]
      .toLowerCase()
      .split("")
      .every(function(letter) {
        return arr[0].toLowerCase().indexOf(letter) != -1;
      });
  }
  
  console.log(mutation(["hello", "Hello"]));