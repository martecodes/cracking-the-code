/*
  write a method to replace all spaces in a string with '%20'. You may assume
  that the string has sufficient space at the end to hold additional characters,
  and that you are given the "true" length of the string.
*/

const urlLify = (str) => {
  return str.trim().replaceAll(" ", "%20");
}

console.log(urlLify("Mr John Smith    "));
