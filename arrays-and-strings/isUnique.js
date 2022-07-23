/*
  Implement an algorithm to determine if a string has all unique characters.
  What if you cannot use additional data structures?
*/

const unique = (str) => {
  let tracker = "";

  for (let char of str) {
    if (!tracker.includes(char)) {
      tracker += char;
    } else {
      return false;
    }
  }

  return true;
}

console.log(unique("hello"));
console.log(unique("world"));

/*
  "hello" -> false
  "world" -> true

  "hello"
      ^

*/
