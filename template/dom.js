const ul=document.querySelector('ul');
window.onload=getAll;
function handlesubmit(event){

    event.preventDefault();
    const user={
    user:event.target.user.value,
    phone:event.target.phone.value,
    email:event.target.email.value}

    axios.post('http://localhost:3000/users/add-user',user).then(result=>{
        display(result.data,result.data.id);
        console.log(result.data);
    })
    
    event.target.user.value="";
    event.target.phone.value="";
    event.target.email.value="";

}

function getAll(){
    axios.get('http://localhost:3000/users').then(results=>{
        results.data.forEach(element => {
            display(element,element.id);
        });
        
    })
}


function display(obj,id){
    const li=document.createElement('li');
    li.textContent=`${obj.user} ${obj.phone} ${obj.email}`;

    const deltbtn=document.createElement('button');
    deltbtn.textContent="Delete";
    li.appendChild(deltbtn);

    const edtbtn=document.createElement('button');
    edtbtn.textContent="Edit";
    li.appendChild(edtbtn);


    ul.appendChild(li);

    deltbtn.addEventListener('click',(event)=>{
        axios.delete(`http://localhost:3000/users/delete-user/${id}`,user).then(result=>{
            event.target.parentElement.remove();
         })
       

    })

    edtbtn.addEventListener('click',(event)=>{
        axios.delete(`http://localhost:3000/users/delete-user/${id}`,user).then(result=>{
            document.querySelector('#user').value=obj.user;
            document.querySelector('#phone').value=obj.phone;
            document.querySelector('#email').value=obj.email;
            event.target.parentElement.remove();
         })
        
    })
}
