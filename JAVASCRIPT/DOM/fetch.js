const url="https://dummy.restapiexample.com/api/v1/employees"

const button=document.getElementById("btn")
const para =document.getElementById("data")


async function getData(){
    console.log("getting data");
    const response=await fetch(url)
    console.log(response);
}

addEventListener("click",getData)