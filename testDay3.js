//    ************  1. program tryout(nested object access by using for in loop)     *********
// const sabi = {
//     address : "YNR",
//     company : "FMQ",
//     org : {},
//     workingHours : {
//         start : "9 a.m",
//         end   : "7 p.m"
//     },
//     webTech : {
//         Language : "JavaScript"
//     }

// };
// console.log('Test 7');
// for(let key in sabi){
//     if(typeof sabi[key] === 'object' ){
//         for(let key2 in sabi[key]){
//         console.log( key2, " : ", sabi[key][key2]);
//         }
//     }
//     else(
        
//         console.log(key , " : " , sabi[key])
//     )
    
// }

 

//   *********    2. programme tryout (Truthy and falsy values)  *********
// if (5>'8'){
//     console.log("your input is truthy");
// }
// else(
//     console.log("your  input is falsy ")
// );



//  ******** 3. programme tryout (nested ternary operator)    ********
// program to check if number is positive, negative or zero
// let a = "2";
// let result = (a >= 3) ? (a === 3 ? "equal" : "positive") : "negative";
// console.log(`The number is ${result}.`);


// ******** 4. programme tryout (async/await,promise,callbacka)   *******
const datas = [
    {fname : "sabi", profession : "software engineer"},
    {fname : "alam", profession : "software engineer"},
];


function getdatas(){
    setTimeout(() =>{
        let output ="";
        datas.forEach((data,index)=>{
          output=output +  ' ' + datas[index]['fname'];
        })
        console.log(output);
    },1000
    );
}
df
function createdata(newdata,callback){

    setTimeout(() => {
      datas.push(newdata);  
      getdatas();
    }, 2000);
}
//getdatas();
 createdata({fname : "ansari", profession : "software engineer"},getdatas);