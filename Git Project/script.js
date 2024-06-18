function fetchUserInfo(username)
{
    fetch(`https://api.github.com/users/${username}`).then((response)=>
    {
        response.json()
        .then((user)=>{
            document.getElementById("overview").innerHTML=`
                <div>
                    <img src="${user.avatar_url}" alt="${user.name}"/>
                    <h2> user Name:${user.name}</h2>
                    <h2> user Bio:${user.bio}</h2>
                    <h2> user Followers:${user.followers}</h2>
                    <h2> user Followings:${user.following}</h2>
                    <h2> user Repos:${user.public_repos}</h2>
                    <a href=${user.html_url}">${user.name}</a>
                </div>
            `
        }).catch(()=>
        {
            document.getElementById("overview").innerHTML="<h1>User not Found</h1>"
        })
    })
}
document.getElementById("searchForm").addEventListener("submit",(e)=>
{
    // alert("My name is John Cena");
    e.preventDefault()
    let username=document.getElementById("username").value;
    if(username)
        {
            fetchUserInfo(username);
            fetchUserRepos(username,1)
            setPagination(username,1)
        }
})

function fetchUserRepos(username,page)
{
    fetch(`https://api.github.com/users/${username}/repos?per_page=6&${page}`).then((response)=>response.json())
    .then((repos)=>{
        let repolist=repos.map((repo)=>`                   
            <div class="repo"> 
                <div>
                <a href="${repo.html_url}" target="_blank">${repo.name}</a>
                <p>${repo.description||"no description available"}</p>
            </div>
            </div>
            `
        ).join("")
        document.getElementById("repos").innerHTML=repolist;
        
    })
}
// function setPagination(username,currentPage,totalRepos)
// {
//     let pagination=document.getElementById("pagination")
//     pagination.innerHTML=`
//     <button onclick="fetchUserRepos('${username}',${page-1}")>Previous</button>
//     <button onclick="fetchUserRepos('${username}',${page+1}">Next</button>
//     `
// }

function setPagination(username,page,totalRepos){
    totalRepos=25;
    let pagination=document.getElementById("pagination");
    pagination.innerHTML="";
    let totalPages=Math.ceil(totalRepos/5);
    const createButton=(text,page)=>
        {
            let button=document.createElement("button");
            button.textContent=text;
            button.oncick=()=>fetchUserRepos(username,page);
            return button;
        }
        const prevButton=createButton("prev",page-1);
        prevButton.disabled=page===1;
        pagination.appendChild(prevButton)

        const maxBtns=5;
        let startPage=Math.max(1,currentPage-Math.floor(maxBtns/2));
        let endPage=Math.min(totalPages,startPage+maxBtns-1);
        for(let i=startPage;i<=endPage;i++)
        {
            const pageButton=createButton(1,i);
            pagination.appendChild(pageButton);
        }
            const nextButton=createButton("next",currentPage+1);
            nextButton.disabled=currentPage===totalPages;
            pagination.appendChild(nextButton);
}

// function setPagination(username,currentPage,totalRepos)
// {
//     totalRepos=25
//     let pagination=document.getElementById("pagination")
//     let prevBtn=document.createElement("button");
//     prevBtn.innerHTML=`
//      <button onclick="fetchUserRepos('${username}',${page-1}")>Previous</button>
//      <button onclick="fetchUserRepos('${username}',${page+1}">Next</button>`
     
    
//     let btnCount=Math.ceil(totalRepos/5);
//     for(let i=1;i<btnCount;i++)
//     {
//         let pageBtn=document.createElement("button");
//         pageBtn.textContent=i;
//         pageBtn.onclick=()=>
//         {
//             fetchUserRepos(username,i)
//         }
//         pagination.appendChild(pageBtn)
//     }
//     let nextBtn=document.createElement("button");
//     nextBtn.innerHTML=`
//      <button onclick="fetchUserRepos('${username}',${page-1}")>Previous</button>
//      <button onclick="fetchUserRepos('${username}',${page+1}">Next</button>`


// }