let a=10;
if(a>=10)
{
    console.log("I am become death destroyer of foods");
}
else if(a<10){
    console.log(" a is not a destroyer");
    console.log("∴ a can't become death");
}
else{
}

console.log(a>=10?"I am become death destroyer of foods":a<10?"a can't become death":"a is not a destroyer");

switch(a)
{
    case 1:
        console.log("a is 1");
        break;
    case 2:
        console.log("a is 2");
        break;
    case 10:
        console.log("a is 10");
        break;
    default:
        console.log("This is a default case");
}