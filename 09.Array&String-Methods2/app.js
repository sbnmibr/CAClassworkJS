// -------------------------------------------- TASK 1 --------------------------------------------

// const text = "Java is awesome. Java is fun.";

// text dəyişəndə Java sözünün əvəzinə Javascript yazdırın
// ====>> JavaScript is awesome. Java is fun.
// let text="Java is awesome.Java is fun";
// let newText= text.replaceAll("Java","JavaScript");

// console.log(newText);

// -------------------------------------------- TASK 2 --------------------------------------------

// function mixUp(a, b) {

// }

// mixUp adlı function yaradın. function 2 parametr qəbul edir. Ən sonda aşağıdakı kimi
// nəticə çıxardın.

// console.log(mixUp("val", "pur")); //'pul var'
// console.log(mixUp("donce", "gevlet")); //'gence dovlet'

// function mixUp(a,b){
// // return  b.slice(0,2)+a.slice(-1)+ " " + a.slice(0,2)+b.slice(-1);
// return b.slice(0,2)+a.slice(-3)+" "+a.slice(0,2)+b.slice(-4);
// }

// // console.log(mixUp("val", "pur")); 'pul var'
// console.log(mixUp("donce", "gevlet")); 'gence dovlet'

//     -------------------------------------------- TASK 3 --------------------------------------------

// function verbing(word) {

// }

// verbing adlı function yaradın. Bu function bir parametr(feil) qəbul edir. Bu feil əgər 3 hərfdən
// kiçikdirsə sözün özün return edin. Əgər sonu "ing" ilə bitirsə sonuna "ly" əlavə edin. Digər
// hallarda sözün sonuna "ing" əlaavə edin.

// console.log(verbing('go')); // go
// console.log(verbing('swim')); //swiming
// console.log(verbing('swiming')); //swimingly

// function verbing(word) {
//     if (word.length<3) {
//         return word;

//     }

//     if (word.endswith("ing")) {
//         return word +"ly";
//     }

//    else {
//     return word +"ing"
//    }
// }
// console.log(verbing('go'));
// console.log(verbing('swim'));
// console.log(verbing('swiming'));

// -------------------------------------------- TASK 4 --------------------------------------------

// Sözün palindrom olub olmadığını yoxlayın.

function isPalindrome(string) {
  if (string.split("").reverse().join("") == string) {
    console.log("is palindrom");
  } else {
    console.log("is not palindrom ");
  }
}

isPalindrome("radar");