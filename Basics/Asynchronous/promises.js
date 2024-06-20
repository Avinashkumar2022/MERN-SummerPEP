let promise=new Promise(function(resolve,reject){
    console.log("I am an alert in promise");
    resolve(20);
})
setTimeout(function()
{
    console.log("Hello in 2 seconds")
},2000)

console.log("My name is "+"Avinash")
console.log(promise);