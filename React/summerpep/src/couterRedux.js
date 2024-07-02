import React from "react";
import {useSelector} from "react-redux";

export default function Counterredux(){
    const count=useSelector((state)=>state)
    return (
        <div>
            <button>Increment</button>
            <h1>Count</h1>
            <button>Decrement</button>
        </div>
    )
}