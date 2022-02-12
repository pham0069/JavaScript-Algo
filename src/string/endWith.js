function confirmEnding(str, target) {
    return str.slice(str.length - target.length) === target;
}

function confirmEnding2(str, target) {
    let re = new RegExp(target + "$", "i");
    return re.test(str);
}

// if a negative number is provided as the first parameter to slice() , 
// the offset is taken backwards from the end of the string.
function confirmEnding3(str, target) {
    return str.slice(-target.length) === target
}

function confirmEnding4(str, target) {
    return str.endsWith(target);
}
  
console.log(confirmEnding4("Bastian", "n"));
  