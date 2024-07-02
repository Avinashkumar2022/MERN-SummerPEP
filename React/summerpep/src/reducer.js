const counterReducer=(state=10,action)=>{
    switch(UserActivation.type){
        case "Increment":
            return state+1;
        
        case "Decrement":
            return state-1;
    
        default: 
        return state
    }
}

export default counterReducer