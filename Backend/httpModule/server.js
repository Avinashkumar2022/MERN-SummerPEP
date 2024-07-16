const http=require("http")
const fs= require("fs")


// const server=http.createServer((req,res)=>{
//     const data=fs.readFileSync("./userapi.json","utf-8")

//     const file=fs.readFileSync("./index.html","utf-8")

//     const myData=JSON.parse(data)

//     if(req.url==="/"){
//         res.end(file)
//     }
//     else if(req.url==="/about")
//     {
//         res.end("<h1> About page </h1>")
//     }
    
//     else if(req.url==="/contact")
//     {
//         res.end("<h1> Contact page </h1>")
//     }
//     else if(req.url==="/userapi")
//     {
//         res.end(myData[3].email)
//     }
//     else{
//         res.end("Error Page")
//     }

// }).listen(3000,()=>{console.log("listening to port 3000")})

const path=require("path")

const server=http.createServer((req,res)=>{
    let filepath=path.join(__dirname,"public",req.url==="/"?"index.html":req.url)

    let contentType="text/html";
    const extName=path.extname(filepath)

    const mimeTypes={   //Multipurpose Internet Mail Extension
        "html":"text",
        "css":"text/css",
        "js":"text/javascript",
        "png":"image/png",
        "jpg":"image/jpg",
        "jpeg":"image/jpeg"
    }
    contentType=mimeTypes[extName]
    fs.readFile(filepath,(err,content)=>{
        if(err){
            if(err.code==='ENOENT')
            {
                fs.readFile(path.join(__dirname,"public","404.html"),(error,content)=>{
                    res.writeHead(404,{"Content-Type":"text/html"})
                    res.end(content,"utf-8")
                })
            }
            else{
                res.writeHead(500,{"Content-Type":contentType})
                res.end(`Server Error:${err.code}`)
            }
        }
        else{
            res.writeHead(200,{"Content-Type":"text/html"});
            res.end(content,'utf-8')
        }
    })
}).listen(4000,()=>{
    console.log("Listening to port 4000")
})