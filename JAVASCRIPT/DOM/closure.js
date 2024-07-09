//lexical scope
let greetings ="welcome";
function someFunc(){
    let username="pankaj";
    function PrintName(){
        console.log(username);
    }
    PrintName();
}
someFunc();
//closure

function x(){
    usrname="sonu";
    console.log(username);
    return username;

}
let y=x();
console.log(y);