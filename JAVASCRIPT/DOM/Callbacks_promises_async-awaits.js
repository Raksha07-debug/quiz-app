// console.log("story template ");
// console.log("story data"); // --> time 3s
// console.log("Body template");

// console.log("story template ");

// setTimeout(() => {
//     console.log("namaste ");

// }, 5000);
// console.log("body template");

// setTimeout(() => {
//     console.log("hii guys ");

// }, 2000);

// console.log("footer template ");


// // setInterval(() => {
// //     console.log("har har mahadev ");

// // }, 2000);


// setTimeout(() => {
//     console.log("body ka data ");
// }, 3000);



// function sum(a, b) {
//     console.log("I am callback function which was passed in the parameters", a + b);

// }

// // call back function vo hot hai jab bhi hum ek function ke parameters mai dusre function ko call krte ho 

// function calculator(a, b, fn) {
//     fn(a, b);

// }

// agr uss function ko call kr dete toh vo function se pehle call ho jata isliye usko as a value pass kra hai 

// calculator(12, 2, sum);


// let age = 30;
// if (age >= 18) {
//     if (age >= 60) {
//         console.log("senior citizen");
//     }
//     else {
//         console.log("aish kro mitro ");
//     }


// }
// else {
//     console.log("ur still a kidd");
// }

// for (let i = 0; i < 5; i++) {
//     let str = "";
//     for (let j = 0; j < i; j++) {
//         str = str + j;
//     }
//     console.log(i, str);
// }
// //_________Callback _____

// function getData(dataId,GetCallBack) {
//     setTimeout(() => {
//         console.log(dataId, "data");
//         GetCallBack();
//     }, 2000);

// }


// getData(1, () => {
//     getData(2, () => {
//         getData(3, () => {
//             getData(4)
            
//         })
//     })
// })



//_____PROMISES_______________----

// const reusult=new Promise((resolve,reject)=>{
//     console.log("I am a promise ");
//     resolve("successful delievery of iphone ")
// })
// console.log(reusult);


// const getOrder=()=>{                    //.then --> age resolve hua toh  .catch--> age reject hua toh 
//     return new Promise((resolve,reject)=>{
//         console.log(" i am a new order ");
//         setTimeout(() => {
//             resolve("success");
//             // reject("out of stock ")
//         },5000);
       
        

//     })
// }

// const result=getOrder()

// result.then((res)=>{
//     console.log(res);
//     console.log("post your story ");
// })

// result.catch((err)=>{
//     console.log(err);
//     console.log(" paise wapis kr ");
// })



// promise-> Object -> security-> exe? -> get request 
// function asyncFunction1(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(" kuch data ");
//             resolve("balle balle oh shava ")

//         },5000)

//     })
// }

// function asyncFunction2(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             console.log(" kuch data2 ");
//            reject("galat jankari ")

//         },5000)

//     })
// }

// let R1=asyncFunction();

// R1.then((res=>{
//     console.log(res);
//     let R2=asyncFunction2();
//     R2.then((res)=>{
//         console.log(res);
//     })
// }))

// R1.catch((err)=>{
//     console.log(object);
// })

//promise chaining 
// asyncFunction1().then((res)=>{
//     console.log(res);
//     asyncFunction2().then((res)=>{
//         console.log(res);
//     })
// })


async function apiDelhi(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log("weather data of delhi is 52 deg ");
            resolve(" data aa gya ")
        }, 3000);
    })
}
async function apiBhopal(){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            console.log(" bhopal 42deg ");
            resolve("data aa gya ")
        }, 3000);
    })

}


function getData(dataId){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("balle balle ")
        },3000)
    })
}

async function getAllData(){
    
}
