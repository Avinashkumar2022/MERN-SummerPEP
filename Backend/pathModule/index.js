const path=require("path")

// console.log(path)

let dirName=path.dirname("D:/College/programming/MERN SummerPEP/Backend/pathModule")

console.log(dirName);
console.log((path.extname("D:/College/programming/MERN SummerPEP/Backend/pathModule/index.js")))

console.log(path.basename("D:/College/programming/MERN SummerPEP/Backend/pathModule/index.js"))

// path.parse(path)=> returns an object that contains properties-
// directory
// root name
// base name
// name
// extension

console.log(path.parse("D:/College/programming/MERN SummerPEP/Backend/pathModule/index.js"))

let path1=path.format({
    root:"D/",   //If dir and root both are passed in format method then the root will be ignored as root is also present in the dir part 
    dir:"D:/College/programming/MERN SummerPEP/Backend/pathModule",
    base:"index.js",
    ext:".js", //If there is base then the ext and name will be ignored
    name:"index"
})

console.log("The formatted path is: "+path1)