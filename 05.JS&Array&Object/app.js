// let numbers =[112,4445,6,78,34,999,23]       TAsk1
// let max = numbers[0]; 
// let min=numbers[0];

// for (let i = 0; i < numbers.length; i++) {
//   if (numbers[i] > max) {
//     max = numbers[i];
//   }
//   if (numbers[i] < min) {
//     min = numbers[i];
//   }
// }

// console.log("MAX: ", max);
// console.log("MIN: ", min);

// // Task2
// let numbers =[112,4445,6,78,34,999,23]
// let sum=0;
// for (let i = 0; i < numbers.length; i++){
//     sum+=numbers[i];
// }
// console.log(sum);


// Task3
// let elements=[1,2,3,4,5];
// let temp=elements[3];
// elements[3]=elements[2];
// console.log(elements[3]);
// elements[2]=temp;
// console.log(elements[2]);
// console.log(elements);

//  Task4
 let  numbers=[12,-5,6,-3,-34,7];
 let positivenumbers = [];

 for (i=0;i<=numbers.length;i++){
    if(numbers[i]>0) {
        positivenumbers.push(numbers[i])
    }
 }
 console.log(positivenumbers);