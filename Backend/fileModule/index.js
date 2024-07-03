const fs=require("fs")

fs.writeFile("avinash.txt","Avinash is in love with Anshu and will forever will be. ",(req,res)=>{
    console.log("file has been updated")
})

fs.readFile("avinash.txt", "utf-8",(req,data)=>{
    console.log(data)
})

fs.appendFile("avinash.txt", "He never thought that he will find someone so beautiful and kind.",(req,data)=>{
    console.log("data has been appended");
})

fs.rmdir("test folder",(res,req)=>{
    console.log("Folder has been deleted")
})
fs.unlink("test.txt",(res,data)=>{
    console.log("file has been deleted")
})

fs.renameSync("avinash.txt","Anshu.txt") 