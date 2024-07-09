import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react';

// const Apps=()=>{
// let [city,SetCity]=useState("Bhopal");
//  let a="hello";
//  console.log(a);
// function fun1(){
//     SetCity("delhi")
// }

// return (
//     <div> 
//     <p>{city} </p>
//     <button onClick={fun1}>change </button>

//     </div>
// )


// }



// const Apps = () => {
   
//         let [count, SetCount] = useState(0);
//         let [city, SetCity] = useState("BHOPAL")
//         let[data,SetData]=useState([])
//         useEffect(() => {
//             fetch("https://dummy.restapiexample.com/api/v1/employees").then((res) => {
//                 return res.json()
//             }).then((data) => {
                
//                 console.log(data);
//                 SetData(data)
//             })
//         },[])
    
//     function fun1(){
//         SetCity("delhi"); 
//     }
//     function fun2(){
//         SetCount(count++);
//     }

//     return (
//       <div> 
//       <p>{count}</p>
//       <button onClick={fun2} >add</button>
//       <p>{city}</p>
//       <button onClick={fun1}>addCity </button>
//       </div>
        
//     )
// }

const Apps = () => {
    let date=new Date().toLocaleTimeString();
    console.log(date,"date");
    let[time,SetTime]=useState()
    setInterval(()=>{
        SetTime(date)
    })

  return (
    <div>{time
    }</div>
  )
}



export default Apps

