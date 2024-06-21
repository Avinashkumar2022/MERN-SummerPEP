import React, { useState } from 'react'

function App3() {
    // const [username,setUsername]=useState("");
    // const [email,setEmail]=useState("");
    // const [password,setPassword]=useState("");

    // Can also be done with one state
    const [input,setInput]=useState({
      username:"",
      email:"",
      password:""
    })
    const [condition,setCondition]=useState("true");

    function handleSubmit(event){
        event.preventDefault();
        setCondition(!condition)
    }
 
  return (
    <div>
      <form>
        <input type='text' placeholder='Username' value={input.username} onChange={(event)=>setInput((prev)=>({...prev,username:event.target.value}))}/>

        <input type='email' placeholder='email' value={input.email} onChange={(e)=>setInput({email:e.target.value})}/>

        <input type='password' placeholder='password' value={input.password} onChange={(e)=>setInput({password:e.target.value})}/>

        <br/>

        <button onClick={handleSubmit()}>Submit</button>
      </form>
      {/* <h3>My username is {username}</h3> */}
      {/* {condition && (
        <div>
            <h3>My username is {username}</h3>
            <h3>My email is {email}</h3>
            <h3>My password is {password}</h3>
        </div>
      )} */}
    </div>
  )
}

export default App3