// const person={
//     firstName:"pankaj",
//     lastName:"oberoi",
//     age:(2024-2001),
//     jobStatus: true,
//     experience:2,
//     salary:200000,
//     friends:['raju','chutki',"bheem"]

// }
// console.log(person);
// const experienceKey="experience"
// console.log(person['experience']);

// // dot vs bracket 
// console.log(person.firstName);
// console.log(person.age); 
// console.log(person.friends[1]);

// const nameKey= "Name";
// console.log(person['first'+ nameKey]);
// console.log(person['last'+ nameKey]);


// const info=prompt("which info do you want ")
// console.log(person['info']);

// if(person[info])
// {
//     console.log("naukri hai ");
// }
// else{
//     console.log("berozgaar");
// }

// person.location="Bhopal"
// person["insta"]="anglePriya"
// console.log(person);

// if(person[info]>=2)
// {
//     person.salary=person.salary+5000;
//     console.log(person.salary);
// }
// else{
//     person.salary+=1000;
//     console.log(person.salary);

// }

//******************LOOP******************** */

//********FOR LOOP */
let sum = 0;
for (var i = 1; i <= 10; i++) {
    sum = i * (i + 1) / 2;
}
console.log(sum);

//********* WHILE LOOP */
// 

// while(open==='yes')
// {
//     kamai+=50;
//     open=prompt("naya customer aaya")
//     customer++;
// }
// console.log("mere pure din ki kamai" + kamai + "and total customer were"+customer);


//*************DO while **************/


// do{
//     kamai+=50;
//     open=prompt("kya naya customer aaya")
//     customer++;
// }
// while(open==="yes");
// console.log("mere pure din ki kamai" + kamai + "and total customer were"+customer)


//*****************FOR OF VS FOR IN LOOP (jab apke pas string ho ya array ho )  */
let str = "JavaScript"
let length = 0;
for (let item of str) {
    console.log("value =" + item);
    length++;
}
console.log("length of pure string is" + length);


// *******FOR IN ************
let student = {
    name: "Rahul",
    age: 20,
    cgpa: 9.2,
    isPass: true,

}
for (let key in student) {
    console.log(student[key]);
}

//********************Guessing number game  */
// let guess=prompt("enter your number ")
// let RandomNum=prompt("enter the guessed number ")
// let attempt=0;
// while(guess!=RandomNum)
// {
//     if(guess>RandomNum){
//      RandomNum=prompt("bada number daalo ") }
//     else{
//         RandomNum=prompt("chota number daalo ")
//      }
//   attempt++;   

// }

// console.log("numbers of attempt in the game "+attempt);

//*********************** */
const arr = ["savi", "nisha", "siya", "anaisha"]


const arrNext = arr.map((item) => item.toUpperCase());
console.log(arrNext);

const output = arr.filter((item) => {
    if (item.length <= 5)
        return item;
})
console.log(output);

let array = [1, 20, 5, 4, 6]
const arrayEven = array.filter((item) => {
    if (item % 2 == 0)
        return item;
})
console.log(arrayEven);



const sum1 = array.reduce((addEls, curr) => {
    addEls = addEls + curr;
    return addEls;
}, 0)
console.log(sum1);



//************************ */
let shopingCart = {
    Name: "suchi",
    price: 10000,
    quantity: 2
}




addItem(name, price, quantity) 
{
    const newItem = {
        name: name,
        price: price,
        quantity: quantity
    };
}
shopingCart.addItem('Tshirt',20,2);







