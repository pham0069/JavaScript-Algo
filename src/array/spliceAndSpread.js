let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice (2, 0, ["Lemon", "Kiwi"]); //[ 'Banana', 'Orange', ['Lemon', 'Kiwi'], 'Apple', 'Mango' ]

let foods = ["Banana", "Orange", "Apple", "Mango"];
// [2,0].concat([“Lemon”, “Kiwi”]) = [2, 0, “Lemon”, “Kiwi”]
// equivalent to foods.slice(2, 0, "Lemon", "Kiwi")
foods.slice(...[2, 0].concat(["Lemon", "Kiwi"])); // //[ 'Banana', 'Orange', 'Lemon', 'Kiwi', 'Apple', 'Mango' ]

/**
 * Copy each element from the first array into the second array starting at the index n of the second array. 
 * We’ve also got to ensure that the original arrays are not mutated.
 */

// dont do arr2.slice().splice(n, 0, ...arr1), it will return array of removed items, not the spliced array
  function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArr = arr2.slice();
    localArr.splice(n, 0, ...arr1);
    return localArr;
  }