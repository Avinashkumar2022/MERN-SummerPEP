const EventEmitter=require("events");
const eventEmitter=new EventEmitter();

var fun1=(x)=>{
    console.log("Event has been triggered: "+x)
    
}

var fun2=(y)=>{
    console.log("event 2 fun triggered "+y)
}

eventEmitter.on("myEvent",fun1)
eventEmitter.on("myEvent",fun2)
eventEmitter.on("myEvent",fun1)
eventEmitter.on("myEvent",fun2)

// eventEmitter.removeListener("myEvent",fun1) //This will remove the last listener of that function from the listener array
// eventEmitter.removeAllListeners("myEvent") //Removes all teh listeners from the array


eventEmitter.prependListener("myEvent",fun2) //Adds an event at the start of the listeners array
console.log(eventEmitter.listenerCount("myEvent"))

console.log(eventEmitter.listeners("myEvent"))

eventEmitter.emit("myEvent","second argument")