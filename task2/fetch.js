const postsList=document.querySelector('.posts-list');
const url='https://jsonplaceholder.typicode.com/posts';

let result='';

const Add_Form=document.querySelector('.Add_Form');
const userId=document.getElementById('.userid');
const Id=document.getElementById('.id');
const Title=document.getElementById('.title');
const Body=document.getElementById('.body');
const btnSubmit=document.querySelector('.button')

const renderPost=(post)=>{
    post.forEach(post => {
        result+=`
        
        <div class="card">
        <div class="body" data-id=${post.userId}>
        <h5 class="userid">${post.userid}</h5>
        <h4 class="id">${post.id}</h4>
         <h3 class="title" >${post.title}</h3>
         <p class="content">${post.body}</p>
         <a href="#" class="link" id="edit-post">Edit post</a>&nbsp &nbsp
         <a href="#" class="link" id="delete-post">Delete post</a>
         </div>
         </div>
    `;
         
        
    });
    postsList.innerHTML=result;
}

//get req


fetch(url)
.then(response=> response.json())
.then(data=> renderPost(data))

postsList.addEventListener('click',(e)=>{
    e.preventDefault();
    let delBtnPressed=e.target.id=='delete-post';
    let editBtnPressed=e.target.id=='edit-post';

    let id=e.target.parentElement.dataset.id;


    //delete
    if(delBtnPressed){
        e.preventDefault();
        fetch(`${url}/${id}` ,{
            method:'DELETE'
        })

        .then(response=>response.json())
        .then(()=>location.reload())
    }

    if(editBtnPressed){
        const parent=e.target.parentElement;
        let userContent=parent.querySelector('.userid').textContent;
        let idContent=parent.querySelector('.id').textContent;
        let titleContent=parent.querySelector('.title').textContent;
        let bodyContent=parent.querySelector('.content').textContent;

        userId.value=userContent;
        Id.value=idContent;
        Title.value=titleContent;
        Bodyid.value=bodyContent;


    }

    //update
    btnSubmit.addEventListener('click',(e)=>{
        e.preventDefault();
        fetch(`${url}/${id}` ,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                body:Body.value,
            })

    })
    .then(response=>response.json())
    .then(()=>location.reload())

})
});

//creating
Add_Form.addEventListener('submit',(e)=>{
    e.preventDefault();
        fetch(url,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                userid:userId.value,
                id:Id.value,
                title:Title.value,
                body:Body.value,
            })
        })
    
    
        .then(response=>response.json())
        .then(data=>{
             const dataArray=[];
             dataArray.push(data);
             renderPost(dataArray);
    })
})
