let btn = document.querySelector('#checkbutton');
btn.addEventListener('click',(e)=>{
e.preventDefault();
let pswd=document.getElementById('password').value;
let repswd=document.getElementById('repassword').value;
let msg=document.getElementById('result')
msg.style.backgroundColor='yellow';
msg.style.width='400px';
msg.style.color='black';
msg.style.margin='1px';
console.log(msg);
if(pswd==repswd){
msg.innerText='Password Matched. Password Validation Sucessfull';
}
else{
    msg.innerText='Password Not Matched';
}
})