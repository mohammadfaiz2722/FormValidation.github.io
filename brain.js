console.log("This is project4");
const name=document.getElementById('name');
const email=document.getElementById('email');
const phone=document.getElementById('phone');
let emailvalid=false;
let phonevalid=false;
let namevalid=false;

name.addEventListener('blur',()=>{
    // console.log("Name is blured")
    let regex=/^[a-zA-Z][0-9a-zA-Z]{2,10}$/
    let str=name.value;
    // console.log(regex,str)
    if(regex.test(str))
    {
        console.log("Your name is valid")
        name.classList.remove('is-invalid')
        namevalid=true;
    }
    else{
        console.log('our name is not valid');
        name.classList.add('is-invalid')
        namevalid=false
    }
})
email.addEventListener('blur',()=>{
    // console.log("Email is blured")
    let regex=/^[\._\-a-zA-Z0-9]+@[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,7}$/
    let str=email.value;
    // console.log(regex,str)
    if(regex.test(str))
    {
        console.log("Your email is valid")
        email.classList.remove('is-invalid')
        emailvalid=true
    }
    else{
        console.log('our email is not valid');
        email.classList.add('is-invalid')
        emailvalid=false
        
    }
})
phone.addEventListener('blur',()=>{
    console.log("Phone is blured")
    let regex=/^[0-9]{10}$/
    let str=phone.value;
    // console.log(regex,str)
    if(regex.test(str))
    {
        console.log("Your phone is valid")
        phone.classList.remove('is-invalid')
        phonevalid=true
    }
    else{
        console.log('our phone is not valid');
        phone.classList.add('is-invalid')
        phonevalid=false
        
    }
})
let submit=document.getElementById('submit')
let success=document.getElementById('success')
let failure=document.getElementById('failure')
let c2=document.getElementById('c2')
let message="";
let para="";
let action="";
submit.addEventListener('click',(a)=>
{
a.preventDefault();
if(emailvalid&&phonevalid&namevalid)
{   
    message="Congrats the form has been submitted successfully"
    action='success'
    para="Success!"
    
c2.innerHTML=`    <div id="${action}" class="alert alert-${action} alert-dismissible fade show" role="alert">
<strong>${para}</strong>${message}
</div>`
setInterval(()=>
{
c2.innerHTML=""
},5000)
}
else{
    message="Form has not been submitted successfully"
    action='danger'
    para="Error!"
    c2.innerHTML=`<div id="${action}" class="alert alert-${action} alert-dismissible fade show" role="alert">
    <strong>${para}</strong>${message}
    </div>`
}
setInterval(()=>
{
c2.innerHTML=""
},5000)
})