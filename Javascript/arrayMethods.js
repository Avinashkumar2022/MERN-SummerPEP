// var arr1=[1,2,3];
// var arr2=[4,5,6];
// var arr3=[6,7,8];

//Concatination method:- 
// var arr4=arr2.concat(arr1,arr3);
// var arr5=[].concat(arr1,arr3);
// console.log(arr4);
// console.log(arr5);

// flatting an array
// var arr=[1,2,[2,[4,[5]]],5,6,7,[23,23],12];
// var arr2=arr.flat(Infinity);
// console.log(arr2);

//For of loop
// For each loop
// Map
// Filter
// Reduce
// sort
// Every
// some
// Find Index
// Find

// For off loop
// var arr=[1,2,3,4,5,6,27,82,9];
// for( let auto of arr)
//{
//     console.log(auto);
//}

//Map method
// var arr=[1,2,3,4,5,6,2,2,9];
// var arr2=arr.map((item,index)=>
    // {
//     return item*index;
//     // return item*2;
//     // return item>5;
//     // console.log(`${item} => ${index}`);
// })

// console.log(arr);
// console.log(arr2);

//Filter Method
// var arr=[1,2,3,4,5,6,2,2,9];
// var arr2=arr.filter((item,index)=>
    // {
//     return item>4;
// })
// console.log(arr2);

//Sort Method
// var arr=[21,32,53,46,52.4,6.123,-2,-0.2,9];
// var arr2=arr.sort((a,b)=>
    // {
//     return a-b;
//     //a-b=0 ignore
//     //a-b>0 swap
//     //a-b<0 No swap
//a-b ->Ascending
    //b-a ->Descending
    // });
    // console.log(arr2);

    // var arr=[2,1,8,7,6,9];
// for(let auto of arr)
// {
//     count=auto+count;
// }


//Reduce Method
// var arr=[1,2,3,4,5,6,2,2,9];
// var sum=arr.reduce((total,item,index)=>
    // {
//     return total+item;
// },10)
// console.log(sum);


//for each
// var arr=[1,2,3,4,5,6,2,2,9];
// var arr2=[];
// arr.forEach((item,index)=>
    // {
//     arr2.push(item*item);
//     // console.log(item);
//     console.log(item*10);
// })


//Some and Every
// var arr=[1,2,3,4,5,6,2,2,9];
// var result=arr.some((x,y)=>
    // {
//     return x>5;
// })
// console.log(`Result of Some method:- ${result}`);

// var result=arr.every((x,y)=>
    // {
//     return x>5;
// })
// console.log(`Result of Every method:- ${result}`);


//Find and FindIndex
// var arr=[1,2,3,4,5,6,2,2,9];
// let value=arr.find((x)=>{
//     return x>5 && x<15;  //Will return the first element that matches the condition
// })
// console.log(value);

// let value2=arr.findIndex((x)=>{
//     return x>5 && x<15;  //Will return the first element that matches the condition
// })
// console.log(value2);


var arr=[5,6,7,8,9,0];
var value=arr.includes(6,1); //(element to find,from where to start) returns a boolean value
var index= arr.indexOf(6,5); //(element to find,from where to start) returns the index of the element, if not found then returns -1
var lastIndex= arr.lastIndexOf(6) //Finds the last occurrence of the element
console.log(value);
console.log(index);
console.log(lastIndex);