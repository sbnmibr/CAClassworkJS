// 1. arrayın içindəki müsbət ədədləri tapın
// let arr = [2, 4, -3, 43, 41, -3];

// function findPositives(arr) {
//   let findArr = arr.filter((num) => num > -1);
//   return findArr;
// }
// console.log(findPositives(arr));

// / 2. üçbucağın tərəfləri verilib, düzbucaqlı üçbucaq olub olmamasını tapın
// function isRectangle(a, b, c) {
//  if(a**2+b**2===c**2 || b**2+a**2===c**2 ||a**2+c**2===b**2 )  {
//     return "yes"
//  }else {
//     return "no"
//  }
// }

// console.log(isRectangle(3, 4, 5)); //yes
// console.log(isRectangle(3, 6, 5)); //no
// console.log(isRectangle(4, 5, 3)); //yes

// 3. arrayın içindəki bütün hərfləri böyük olan elementin indexini tapın

// const webTechs = ["html", "CSS", "js", "REACT", "Redux", "Node", "MongDB"];

// console.log(webTechs.findIndex((item)=>item===item.toLocaleUpperCase()));

// 4. arrayın içindəki bütün hərfləri böyük olan elementləri başqa bir array şəklində return edin

// const webTechs2 = ["HTML", "CSS", "JS", "REACT", "Redux", "Node", "MongDB"];
// console.log(webTechs2.filter((item)=> item===item.toLocaleUpperCase()));

// 5. Reverse the Case
// Given a string, create a function called "reverseCase(str)" that to reverse the case.
//  All lower-cased letters should be upper-cased, and vice versa.

// function reverseCase(str) {
//   if (str === str.toLocaleUpperCase()) {
//     return str.toLocaleLowerCase();
//   } else {
//     return str.toLocaleUpperCase();
//   }
// }

// console.log(reverseCase("MANY THANKS"));; //"many thanks"
// // ; //"MANY THANKS"

// console.log(reverseCase("many thanks"));

// const users = [
//     { name: 'Anar', surname: 'Hesenli', age: '22', uni: 'ADA', gender: 'male', salary: '3001' },
//     { name: 'Nicat', surname: 'Sadiqov', age: '25', uni: 'GDU', gender: 'male', salary: '200' },
//     { name: 'Nezrin', surname: 'Reshidova', age: '23', uni: 'UNEC', gender: 'female', salary: '300' },
//     { name: 'Hikmet', surname: 'Hesenov', age: '22', uni: 'UNEC', gender: 'male', salary: '320' },
//     { name: 'Murad', surname: 'Salmanli', age: '23', uni: 'GDU', gender: 'male', salary: '420' },
//     { name: 'Aynure', surname: 'Hesenzade', age: '23', uni: 'BMU', gender: 'female', salary: '3210' },
// ]

// 2.1.Show users who is studying at 'UNEC' and surname starts 'r'.

// console.log(users.filter((item)=>item.uni.toLocaleUpperCase() ==='UNEC' && item.surname.toLocaleUpperCase()==='r'))
// 2.2.Show users whose age is eqaul to 22 and name start 'a'.
// console.log(users.filter((item)=>item.age===22 && item.surname.toLocaleUpperCase()==='a'))
// 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').
// console.log(users.map(item)=>{
//     return  { ...item,name:`Mr  ${item.name}`}
// });
// 2.4.Sort users by age (ascending).
// console.log(users.sort((a,b)=>(a.age-b.age)));

// Task1

// let result = 0;
// let number = 32243;

// result = Number(String(number).split('').reverse().join(''));

// console.log(result);

// task2

// let string = "webmaster";
// function reverseString(str) {
//   return str.split("").sort().join("");
// }
// console.log(reverseString("webmaster"));

// task3