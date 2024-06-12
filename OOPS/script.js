// const user1={
//     firstName:"Avinash",
//     lastName:"Kumar",
//     age:22,
//     getBirthYear : function(){
//         return new Date().getFullYear() - this.age
//     }
//     }
//     const user2={
//         firstName:"Subhanshu",
//         lastName:"Kumar",
//         age:22,
//         getBirthYear : function(){
//             return new Date().getFullYear() - this.age
//         }
// }
// const user3={
//     firstName:"Avesh",
//     lastName:"Singh",
//     age:21,

// }

//Factory Function
// function createUser(firstName,lastName,age)
// {
//     const user={
//         firstName,
//         lastName,
//         age,
//         getBirthYear(){
//             return new Date().getFullYear - user.age
//         }
//     }
//     return user;
// }

// let user1=createUser("Avinash","Kumar",22);
// let user2=createUser("Anshu","Priya",21);


function getBirthYear(){
    return new Date().getFullYear - user.age
}
function createUser(firstName,lastName,age)
{
    const user={
        firstName,
        lastName,
        age,
        getBirthYear,
    }
    return user;
}

let user1=createUser("Avinash","Kumar",22);
let user2=createUser("Anshu","Priya",21);

let arr=[2,3,4,5];
let arr2=[5,6,7,8,9];
arr2.pop();