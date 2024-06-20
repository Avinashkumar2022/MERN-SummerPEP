// localStorage.setItem("obj",JSON.stringify(
//     {
//         name:"adfar",age:32
// }));
// let age=JSON.parse(localStorage.getItem(obj.age));
// console.log(age);
// localStorage.removeItem("firstName");
// localStorage.clear();

function handleSubmit()
{
    let name=document.getElementById("name").value;
    let email=document.getElementById("email").value;

    localStorage.setItem("name",name)
    localStorage.setItem("email",email)
}