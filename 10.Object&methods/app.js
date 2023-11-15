// let person = {
//   firstName: "Sebnem",
//   lastName: "Ibrahimova",
//   age: 21,
//   skills: ["yemek", "yatmaq", "gezmek", "kod yazmaq"],
//   Uni: "GDU",
// };
// person.city = "Ganja";
// person["phone.number"]=216275765;


// console.log(person);



// task1
const employees ={
    boss:'michael',
    secretary:'pam',
    sales:'jim',
    accountant:'oscar'
};

//task1
// console.log(Object.keys(employees));
// console.log(Object.values(employees));
// console.log(Object.entries(employees));

// let arr=Object.values(employees);
// let newValues="";
// for (i=0;i<arr.length;i++){
//     if(newValues[i].length> arr.length)
//     arr=newValues[i];
// }
// console.log(newValues);

// delete employees.boss;
// console.log(Object.keys(employees));


// task2
var library = [
    {
      title: "The Road Ahead",
      author: "Bill Gates",
      readingStatus: true,
    },
    {
      title: "Walter Isaacson",
      author: "Steve Jobs",
      readingStatus: true,
    },
    {
      title: "Suzanne Collins",
      author: "Mockingjay: The Final Book",
      readingStatus: false,
    },
  ];
  
   library.forEach((item) =>{
    if( item.readingStatus===true)
    console.log( "Already read 'title' by author" );
    else if(item.readingStatus===false)
    console.log("You still need to read 'title' by author");
   });

   
   
