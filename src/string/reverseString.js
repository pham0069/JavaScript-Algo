/**
 * Reverse the provided string.
 * e.g. hello -> olleh
 */

 function reverseString1(str) {
    let reversed = "";
    for (let i = str.length-1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
  }

  function reverseString2(str) {
    let reversed = [];
    for (let i in str) {
        reversed.unshift(str[i]);
    }
    return reversed.join("");
  }

 function reverseString(str) {
    return str.split("")
    .reverse()
    .join("");
  }
  
  console.log(reverseString("hello"));