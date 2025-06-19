function countVowels(str) {
  let count = 0;
  const vowels = "aeiou";

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }

  return count;
}



console.log(countVowels("Sufiyan"));  // Output: 3
console.log(countVowels("ChatGPT"));  // Output: 1
console.log(countVowels("rhythm"));   // Output: 0
