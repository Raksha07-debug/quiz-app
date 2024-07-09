// function fruitPRocessor(apples,oranges)
// {
//     console.log(apples,oranges);
//     const juice=`Juice with ${apples} and${oranges}`;
//     return juice;
// }
// console.log(fruitPRocessor(2,4));
//  const MixJuice=fruitPRocessor(2,4);
// console.log(MixJuice);

//function declaration vs function expression 
function calAge1(birthYear) {
    return 2024 - birthYear
}
const age1 = calAge1(2000);
console.log(age1);

//function expression -> it will return a value 
//__________________________________________

const calAge2 = function (birthYear) // anonymous function 
{
    return 2024 - birthYear // funct expression
}
const age2 = calAge2(1990);
console.log(age2);

//  ONE LINER FUNCTION
const calAge3 = birthYear => 2024 - birthYear;
const age3 = calAge3(1995);
console.log(age3);

const Retirement = (birthYear, name) => {
    console.log("hello" + name);
    const age = 2024 - birthYear;
    const Retirement = 65 - age
    return Retirement;
}
console.log("Your pending years to retire are " + Retirement(1992, "raju"));

function normal() {
    console.log("namaste");
}
normal();

const expression = function () {
    console.log("mitrooooo.....");
}
expression();

console.log(expression());

// ******************CALL BACK FUNCTION ********************

function cutPieces(fruit) {
    return fruit * 4;
}

function fruitProcessor(apples, oranges) {
    const applePieces = cutPieces(apples);
    const orangePieces = cutPieces(oranges);

    const juice = `Juice with ${apples} apples and${oranges} oranges`;
    return juice;
}
const namee = () => {
    return "pankaj";
}
console.log(fruitProcessor(2, 4));
const output = fruitProcessor(3, 5, namee())

//************************** */
const friends = ['raksha', 'nisha', 'savi', 'khushi']
console.log(friends);
const length = friends.push('pankaj')
console.log(friends);
console.log(length);

friends.unshift('sonu');
console.log(friends);

const deleted = friends.pop();
console.log(friends);
console.log(deleted);

const deletedTop = friends.shift();
console.log(friends);
console.log(deletedTop);

console.log(friends.indexOf('nisha'));

console.log(friends.includes('sarthi'));


//************************* */


const calTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
const bills = [125, 555, 44];
const tip = [calTip(bills[0]), calTip(bills[1]), calTip(bills[2])]

console.log(bills);
console.log(tip);
const total = [bills[0] + tip[0],
bills[1] + tip[0],
bills[2] + tip[0]]

console.log(total);

// ************MAP FUNCTION
const salaries = [200, 250, 450, 300]
const outpt = salaries.map((item) => item * 2)
//  function double(x)
//  {
//     return x*2;
//  }


console.log(outpt);


const arr = [5, 6, 7, 8, 24];
const op = arr.filter((item) => { return item % 2 == 0 })

//  function isOdd(x)
//  {
//     return x%2 !==0;
//  }
console.log(op);
let sum = 0;
let ar = [1, 2, 3, 4, 12];

function findSum(ar) {
    for (let i = 0; i < ar.length; i++) {

        sum = sum + ar[i];
        
    }
    return sum;
}
console.log(findSum(ar));
let max=ar[0];

function arrMax(ar)
{
    for(let i=0; i<ar.length; i++ )
    {
        if(ar[i]>max){
            max=arr[i];
        }
        
    }
    return  max;
}
console.log(arrMax(ar));

const opt=arr.reduce((max,curr)=>{
    if(curr>max){
        max=curr;
    }
    return max;
},0)
console.log(opt);
















