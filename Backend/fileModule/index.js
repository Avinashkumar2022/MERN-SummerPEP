const fs=require("fs")

fs.writeFile("avinash.txt","Avinash is in love with Anshu and will forever will be.",(req,res)=>{
    console.log("file has been updated")
})

fs.readFile("avinash.txt", "utf-8",(req,data)=>{
    console.log(data)
})