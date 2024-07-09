// window.console.log("raksha")
// console.log(document);

// //Dom Manipulation --> element --> Selector

//  const firstHeading=document.getElementById("heading");
//  console.log(firstHeading,"html element");
//  firstHeading.style.color="red"
//  const allHeadings=document.getElementsByTagName("h1")
//  console.log(allHeadings);

//  for(let heading of allHeadings)
//  {
//     heading.style.color="green"
//  }

//  const extr=document.getElementsByClassName("extra")
// //  console.log(extr);


// //  const container=document.queryselector("div")
// //  console.log(container);

// //  const header=document.querySelector("#heading")
// //  console.log(header);

// //  const tags= document.querySelector(".extra")

//  const element=document.querySelector('p')
//  console.log(element);
//  console.log(element.innerText);


//  const element2=document.querySelector('p')
//  console.log(element2.textContent);

//  const element3=document.querySelector('p')
//  console.log(element3.innerHTML);

// //  const heading=document.querySelector('h1');
// // heading.innerText="jai shree Ram"


// const isLoggedIn=false;
// const userName=prompt("enter your Name")

// const heading=document.querySelector('h1');

// if(isLoggedIn)
// {
//    heading.innerText="hello"+userName
// }
// else{
//    heading.innerText="kon h"
// }

//***********manipulating attributes  */
const link=document.querySelector("a")
console.log(link.getAttribute(href));
console.log(link.setAttribute('href','https://www.w3schools.com'));

let SearchEngine=prompt("which search engine you want to set by default")
const links=document.querySelector("a")

if(SearchEngine==='google')
{
   links.innerText="go to google "
   links.setAttribute=('href', "https://www.google.com/")
}

else{
   links.innerText="go to yahooo"
   links.setAttribute('href', "https://www.yahoo.com/")
}


