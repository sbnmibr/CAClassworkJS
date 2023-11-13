// task 1

// let arr=[];

// task 2
// let itCompanies =["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amzon"];
// console.log(itCompanies.length);
// task 4

// let itCompanies =["Facebook","Google","Microsoft","Apple","IBM","Oracle","Amazon"];
// for(i=0;i<=itCompanies;i++){
//   console.log(itCompanies[i]);  
// }

// let middleEl = Math.floor(itCompanies.length / 2)

// console.log(itCompanies[0]);
// console.log(itCompanies[middleEl]);
// console.log(itCompanies[itCompanies.length-1]);

// task5
// let uppercase=[];
// for(i=0;i<itCompanies.length;i++){
//     uppercase.push(itCompanies[i].toLocaleUpperCase())
// }
// console.log(uppercase);


// console.log(`${itCompanies.toString()} Boyuk IT sirketleridir`);
let companies =[
    "facebook",
    "Google",
    "Microsoft",
    "APPLE",
    "IBM",
    "Oracle",
    "Amazon",
]
    
for(let i=0;i<companies.length;i++){
    companies[i]===companies[i].toLocaleUpperCase() && console.log(`${companies[i]}`);
}
