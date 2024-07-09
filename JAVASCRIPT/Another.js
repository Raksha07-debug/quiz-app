const name="Pawan"
const job="software developer "
const birthYear=2003
const year=2024

const information="i am "+name+ "a "+job+" with age of "+(year-birthYear)+"year old"
console.log(information);


// *************************************************
// __________template literals 

const Newinfo= `I am ${name} a ${job} with  age of ${(year-birthYear)} years old`
console.log(Newinfo);

// ****************************************************
//_______________Prompt box______________

// const age =prompt("enter your age")
// 123
// if(age>=18 && age<60)
// {
//     console.log("you can drive ");
// }
// else if(age>=60 )
// {
//     console.log("stop driving");
// }
// else{
//     const yearLeft=18-age;
//     console.log(`wait for another ${yearLeft}`);
// }

// ************************************************
//______________type conversion and coersion__

// const inputYear=prompt("enter an year ")
// console.log(Number(inputYear)+18,inputYear);

console.log(typeof NaN);


let email="rm12@gmail.com";

if(email==undefined)
{
    console.log("email must be required ");
}
else{
    console.log(email);
}

// *********************************************************
const age=23;
console.log(age);
console.log("i am " + 23 + " year old");

console.log('23'-'10'-3);
console.log('23'+'10'+3);

// ***********************************
//___________Truthy and falsy _____
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));


// let ag=prompt("enter age ")
// if(ag==='18')
// {
//     console.log("jawaani jaane maan ");
// }else{

//     console.log("huttt jaa samne se");

// }

// ________________________________
const hasDriverLicense=true;
const hasGoodEye=true;
const isTired=true;
console.log(hasDriverLicense && hasGoodEye);
console.log(hasDriverLicense || hasGoodEye);
console.log(!hasGoodEye);


if(hasDriverLicense && hasGoodEye)
{
    console.log("you can drive ");
}
else{
    console.log("ghar betho ");
}
// *****************************************
const dolphins=(96+108+89)/3;
const koalas=(88+91+110)/3;



if((dolphins>koalas)&& dolphins>=100 ){
    console.log("dolphins are winner ");
}
else if(dolphins==koalas
    )
{
    console.log("draw");
}
else
{
    console.log("koalas are winner");
}