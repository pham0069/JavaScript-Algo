/**
 * We have to return a sentence with title case.
 *  This means that the first letter will always be in uppercase and the rest will be in lowercase.
 */


 String.prototype.replaceAt = function(index, character) {
    return (
      this.substr(0, index) + character + this.substr(index + character.length)
    );
  };
  
  function titleCase(str) {
    var newTitle = str.split(" ");
    var updatedTitle = [];
    for (var st in newTitle) {
      updatedTitle[st] = newTitle[st]
        .toLowerCase()
        .replaceAt(0, newTitle[st].charAt(0).toUpperCase());
    }
    return updatedTitle.join(" ");
  }

  function titleCase2(str) {
    var convertToArray = str.toLowerCase().split(" ");
    var result = convertToArray.map(function(val) {
      return val.replace(val.charAt(0), val.charAt(0).toUpperCase());
    });
    return result.join(" ");
  }

  console.log(titleCase("I'm a little tea pot"));