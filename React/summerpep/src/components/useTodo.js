import React from 'react'

export default function useTodo() {
    const [todos, setTodos]=useState([]);
    const push=(item)=>{
        //setTodos([...todos,item])
        let newList=todos.concat(item);
        setTodos(newList);
    }
    const pull=()=>{
 
    }
  return {
    todos,
    push
  }
}
