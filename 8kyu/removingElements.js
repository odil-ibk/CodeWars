/*
Take an array and remove every second element from the array. Always keep the first element and start removing with the next element.
Example:

["Keep", "Remove", "Keep", "Remove", "Keep", ...] --> ["Keep", "Keep", "Keep", ...]

None of the arrays will be empty, so you don't have to worry about that!
*/
function removeEveryOther(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i = i + 2) {
    const element = arr[i];
    result.push(element);
  }
  return result;
}
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Better solution
/*
 return arr.filter(function(cur, i) {
    return i % 2 === 0;
  });
*/
