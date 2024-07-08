const os=require("os")

console.log("CPU Architechture: "+os.arch())

console.log("Free Memory: "+os.freemem())
const memory=(os.freemem()/(1024*1024*1024))
console.log(memory)

console.log("Total Memory: "+os.totalmem()/1024*1024*1024)

console.log("Host name: "+os.hostname());
console.log("Operating System name: "+os.type());
console.log("OS platform: "+os.platform())
console.log("OS release: "+ os.release())