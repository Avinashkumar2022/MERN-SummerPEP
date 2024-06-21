import React, { useState } from "react"

function App4(){
    const [movie,setMovie]=useState("");
    const [condition,setCondition]=useState("true");
    handleSubmit(e)
    {
        e.preventDefault();
        setCondition(!condition)

    }
    return(
        <div>

            <input type="text" placeholder="Movie name" value={movie} onChange={(e)=>setMovie(e.target.value)}/>
            <button onClick={handleSubmit()}></button>
            {condition && (
            <div>
                My favorite movie is {movie}
            </div>
            )}
        </div>
    )
}