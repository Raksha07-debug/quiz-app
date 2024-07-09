// let button=document.querySelector(".btn")
// button.onclick=(event)=>{
//     console.log(event);
//     console.log(event.type);

// }


// let button=document.querySelector(".btn");
// button.onclick=()=>{
//     alert("hello user ")
// }

// button.onclick=()=>{
//     console.log("button clicked ");

// }


//*******************************************

// button.addEventListner("click", () => {
//     console.log("button is clicked ");
// })
// const handlerfn=()=>{
// let message=document.createElement("h3");
// message.innerHTML="bahut shaandar";
// }

// button.addEventListner("click", () => {
//     console.log("thnks for visiting ");
// })

// button.addEventListner("click", () => {
//     console.log(" visit again ");
// })


let modeBtn=document.querySelector(".btn");
let currentMode="light"
let body=document.querySelector("body");
const handleClick=()=>{
    if(currentMode==="light")
    {
        currentMode="dark"
        console.log(currentMode);
        // document.querySelector("body").style.backgroundColor="black";
        body.classList.add("dark")
        body.classList.remove("light")

    }
    else{
        currentMode="light";
        console.log(currentMode);
        // document.querySelector("body").style.backgroundColor="white";
        body.classList.add("light")
        body.classList.remove("dark")

    }
}

modeBtn.addEventListener("click",handleClick)



