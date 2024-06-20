import { useState } from "react";
import React from 'react'

function App2() {
    // const [count,setCount]=useState(0);
//  var data=[1,2,3,4,5]
// var data2=[
//     1,
//     ["a","b","c"],
//     ["d","e","f"],
//     ["g","h","i"],
//     2]
    const [count,setCount]=useState(0);
    function handleIncrement(){
        // setCount(count+1)
        // setCount(count+1)
        setCount(n=>n+1)
        // setCount(n=>n+1)
    }
    function handleDecrement(){
        setCount(count-1)
    }

    return (
        <div>
            <h1>{count}</h1>
            <button onClick={handleIncrement}>Increament</button>
            <button onClick={handleDecrement}>Decreament</button>
            {/* if(i)
            {data2.map((item,index)=><l1 key={index}>{item}</l1>)}
          {data2.map((item,index)=>item.map((item2,index=1)=><li key={index} >{item2}</li>))} */}
        </div>
    )
}

export default App2