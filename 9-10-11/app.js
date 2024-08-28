// 9---- Create a function to check anagrams.
function checkAnagram(s, t) {
  if (s.length !== t.length) {
    return false;
  }
  let str1 = s.split("").sort().join("");
  let str2 = t.split("").sort().join("");
  if (str1 === str2) return true;
  else return false;
}
// 10---Implement a function to count the number of vowels in a given string.
function countVowels(s) {
  let arr = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    if (arr.includes(s[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}
// 11-----Create a function to check if a string is a palindrome.
function checkPalindrome(s) {
  let reverse = s.split("").reduce((acc, curr) => curr + acc, "");
  if (reverse === s) return true;
  else return false;
}
