/**
 * Repeat a given string str (first argument) for num times (second argument). 
 * Return an empty string if num is not a positive number.
 */

 function repeatStringNumTimes(str, num) {
     if (num < 0) {
         return "";
     }
     // repeat throw invalid arg exception when num < 0
    return str.repeat(num);
  }

  function repeatStringNumTimes2(str, num) {
    var accumulatedStr = "";
  
    while (num > 0) {
      accumulatedStr += str;
      num--;
    }
  
    return accumulatedStr;
  }
  

  
 console.log(repeatStringNumTimes2("abc", 3));