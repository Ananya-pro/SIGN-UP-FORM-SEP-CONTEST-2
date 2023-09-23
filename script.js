const name=document.getElementById('name');
const email=document.getElementById('email');
const password=document.getElementById('password');
const confirmPassword=document.getElementById('cpassword');


function userDetails(name, email, password){
    let userObj={
        name:name,
        email:email,
        password:password,
        // confirmpassword:confirmpassword,
    }
    let users =JSON.parse(localStorage.getItem('users'));

    if(users===null){
        users=[];
    }

    users.push(userObj);
    localStorage.setItem('users', JSON.stringify(users));

    sessionStorage.setItem('loggenInUser',JSON.stringify(userObj));
    name.value='';
    email.value='';
    password.value='';
    confirmPassword.value='';

    // alert('sign up succesfully');
 
    //abhi dusri page ki location lagani hai...
    window.location.href='./profile';


}


document.getElementById('continue').addEventListener('click' ,(event) =>{
    event.preventDefault();

    if(name.value.trim()===''||email.value.trim()===''||password.value.trim()===''||confirmPassword.value.trim()==='')
    {
        const errorMessage=document.getElementById('error-message');
        errorMessage.innerText="Error: All fields are mandatory!";
    }

    else{
        const errorMessage=document.getElementById('error-message');
        errorMessage.innerText="";

        if(password.value.trim()!==confirmPassword.value.trim()){
            alert("Password Mismatched");
        }
        else{
            userDetails(name.value, email.value,password.value)
        }
    }
});


