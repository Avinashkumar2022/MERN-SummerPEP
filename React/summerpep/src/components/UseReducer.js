import React, {useReducer} from 'react'

const reducer=(state,action)=>{
    console.log(state,action)
    // return 0;
    if(action==="one")
    {
        return{count:state.count+1}
    }
    else if(action==="two")
    {
        return{count:state.count+2}
    }
    else{
        return{count:state.count+3}
        
    }
    return state
}

export default function UseReducer() {
    const [state,dispatch]=useReducer(reducer,{count:0})
  return (
    <div>
      <h1>{state.count}</h1>
      <button onClick={()=>dispatch("one")}>Increment 1</button>
      <button onClick={()=>dispatch("two")}>Increment 2</button>
      <button onClick={()=>dispatch("three")}>Increment 3</button>
    </div>
  )
}
