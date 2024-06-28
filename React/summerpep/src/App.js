import React, { useState, useEffect } from 'react'
// import Demo from './components/ClassBasedComponents/Demo'
import UseReducer from './components/UseReducer'

function App(){
return(
<UseReducer/>
)

  // const [count,setCount]=useState(0);
  // const [date,setDate]=useState(new Date());
  // useEffect(()=>
  // {
  //   // var date=new Date();
  //   var interval=setInterval(()=>{
  //     setDate(new Date())
  //   },1000);
    // return()=>{
    //   // clearInterval(interval)
    // }


    // console.log("useEffect")
    // var interval=setInterval(()=>{
    //   console.log("timer")
    // },3000)
    // return()=>{
    //   clearInterval(interval)
    // }



    // let fun=()=>{
    //       console.log("Avinash")
    // }
    // document.addEventListener("click",fun)
    // return()=>{
    //   console.log("cleanup")
    // }
  // })

  // function handleIncrement(){
  //   setCount(count+1);
  // }

  // return(
  //   // <h1>{date.toLocaleString()}</h1>

  //   // <div>
  //   //   <h1>Count: {count}</h1>
  //   //   <button onClick={handleIncrement}>Increase</button>
  //   // </div>
  // )

  // const [count,setCount]=useState(0)
  // const [number,setNumber]=useState(10)

  // useEffect(()=>{
  //   console.log('useEffect')
  // },[count,number])

  // function handleIncrement(){
  //   setCount(count+1);
  // }

  // function handleDecrement(){
  //   setNumber(number-1);
  // }
  // return (
  //   <div>

  //       <h1>Count: {count}</h1>
  //       <button onClick={handleIncrement}>Click</button>
  //       <h1>Number: {number}</h1>
  //       <button onClick={handleDecrement}>Click</button>
  //   </div>
  // )
}

export default App