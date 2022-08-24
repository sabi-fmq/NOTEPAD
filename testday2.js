// let x = 0;
// let z = 0;
// labelCancelLoops: while (true) {
//   console.log('Outer loops: ', x);
//   x += 1;
//   z = 1;
//   while (true) {
//     console.log('Inner loops: ', z);
//     z += 1;
//     if (z === 10 && x === 10) {
//       break labelCancelLoops;
//     } else if (z === 10) {
//       break;
//     }
//   }
// }
// console.log('continue example');
// let i = 0;
// let n = 0;
// while (i < 5) {
//   i++;
//   if (i === 3) {
//     continue;
//   }
//   n += i;
//   console.log(n);
// }
// let i = 0;
// let j = 10;
// checkiandj: while (i < 4) {
//   console.log(i);
//   i += 1;
//   checkj: while (j > 4) {
//     console.log(j);
//     j -= 1;
//     if ((j % 2) === 0) {
//       continue checkj;
//     }
//     console.log(j, ' is odd.');
//   }
//   console.log('i = ', i);
//   console.log('j = ', j);
// }
// let obj1 = ['a','s','d','f','g','h','j','k','l'];
// console.log(obj1);
// for (let i in obj1) {

//     // Prints all the keys in
//     // obj1 on the console
//     console.log(i);
// } 
const myString = "My Nmae is Sabi Alam" ;
const obj1 = {
    FirstName : 'Sabi',
    company : "FMQ",
     experience : {
        start : 'aug',
        end : 'Nov'
    }
}
// let temp = ''; 
//  for(let key of obj1){

//    console.log(obj1.key ,":",obj1[key]);
//  }
console.log("in loop");
for(let key in obj1){
   if( typeof key === 'object' &&
   !Array.isArray(key) &&
   key !== null)
    console.log(key ,":",obj1.key[key]);
    else(
        console.log(key,":",obj1[key])
    )
}
const a = [4, 54, 65, 7];
// a.forEach((n, i,a)=> {
//     console.log( n , i, a[i]);;

// });

// const output = a.reduce(function (acc,cur){
//     if(cur>acc){
//         acc = cur;
//     }
//     return acc;
//  },0);
// console.log(output);

// const human = [
//     { FirstName: "donald", lastName: "trump", age: 59 },
//     { FirstName: "sabi", lastName: "alam", age: 24 },
//     { FirstName: "hema", lastName: "malik", age: 24 },

//     { FirstName: "elon", lastName: "musk", age: 48 },

//     { FirstName: "hema", lastName: "malik", age: 24 },

// ];
// //Map
// //const output = human.map((x) =>x.firstName + " " + x.lastName
// //);
// const output = human.reduce((x) => x.age == 24);
// console.log(output);