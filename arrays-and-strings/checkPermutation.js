/*
  Given two strings, write a method to decide if one is a permutation of the other
*/

const permutation = (str1, str2) => {
  const map1 = {};
  const map2 = {};

  let arr1 =  str1.split(" ");
  let arr2 =  str2.split(" ");

  for (let word of arr1) {
    let chars = word.split("");

    for (let char of chars) {
      map1[char] = (map1[char] || 0) + 1;
    }
  }

  for (let word of arr2) {
    let chars = word.split("");

    for (let char of chars) {
      map2[char] = (map2[char] || 0) + 1;
    }
  }

  if(Object.keys(map1).length > Object.keys(map2).length || Object.keys(map2).length > Object.keys(map1).length) return false;

  for (let char in map1) {
    if (map1[char] - map2[char] != 0) {
      return false;
    }
  }

  return true;

}

console.log(permutation("hello world", "world hellossss"));


/*
  str1 = "hello world", str2 = "world hello" -> true;

*/
