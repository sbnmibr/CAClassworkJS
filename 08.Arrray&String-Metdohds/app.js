// ----------------------------------------------------- TASK 1 -----------------------------------------------------

// console.log(findFirstNotRepeatedChar('abacddbecz'));

// findFirstNotRepeatedChar adlı bir function yaradın. Bu function göndərdiyiniz string-in ilk təkrarlanmayan
// hərfini qaytarsın. Nəticə =====>> "e"

// function findFirstNotRepeatedChar(string) {
//   let newStr = "";
//   for (i = 0; i < string.lenght; i++) {
//     string.indexOf(string[i]) === string.lastIndexOf(string[i])
//     ? (newStr += string[i])
//     : null;
//     console.log(string.indexOf(i));
//   }

//   return newStr[0];
// }
// console.log(findFirstNotRepeatedChar("abacddbecz"));
// ---------------------------------------------------- TASK 2 -----------------------------------------------------

// console.log(charCount('w3rescource.com', 'c'));

// charCount adlı function yaradın. Bu function 2 ədəd argument qəbul edir. 2-ci göndərdiyiniz hərf 1-cinin içərisində
// neçə dəfə təkrarlanıbsa onun sayısını göstərin.

function charCount(string, letter) {
  let count = 0;
  for (let i = 0; i < string.length; i++) {
    if (string[i] === letter) {
      count++;
    }
  }
  return count;
}
console.log(charCount('w3rescource.com', 'c'));