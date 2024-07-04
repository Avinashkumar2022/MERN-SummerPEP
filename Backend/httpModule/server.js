const http=require("http")
const server=http.createServer((req,res)=>{
    if(req.url==="/"){
        res.end("<h1> Avinash Kumar </h1>")
    }
    else if(req.url==="/about")
    {
        res.end("<h1> About page </h1>")
    }
    
    else if(req.url==="/contact")
    {
        res.end("<h1> Contact page </h1>")
    }
    
}).listen(3000,()=>{
    console.log("listening to port 3000")
})