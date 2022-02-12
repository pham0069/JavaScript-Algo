/**
 * Return the length of the longest word in the provided sentence.
 */

 function findLongestWordLength(str) {
    let words = str.split(' ');
    let maxLength = 0;
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > maxLength) {
        maxLength = words[i].length;
      }
    }
  
    return maxLength;
  }

  function findLongestWordLength2(s) {
    return s.split(' ')
      .reduce(function(longest, word) {
        return Math.max(longest, word.length)
      }, 0);
  }

  function findLongestWordLength3(s) {
      return Math.max(...s.split(' ').map(w => w.length));
  }

  console.log(findLongestWordLength3("The quick brown fox jumped over the lazy dog"));

