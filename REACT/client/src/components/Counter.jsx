import React from 'react'

function Counter() {
    let count =0;
    function handleClick(){
        count=count+1;
        console.log(count);
    }
  return (
    <div>
        <h1>Count {count} </h1>
        <button onClick={handleClick}> Increment</button>
    </div>
  )

}
const App=()=>{

  let[count,Setcount]=Setcount(0);
 

  

}



export default Counter