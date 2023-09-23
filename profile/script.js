const name=document.getElementById('names');
const token=document.getElementById('tokens');
const email = document.getElementById('emails');
const password=document.getElementById('passwords');

let currentUser = JSON.parse(sessionStorage.getItem('loggenInUser'));

name.innerText = currentUser.name;
email.innerText = currentUser.email;

password.innerText = currentUser.password;


// function to check that if the access token is present or not
function isAuthenticated(){
  return localStorage.getItem("accessToken") !== null;
}

// generate random token for user
function randomTokenGenerator(length){
    const character='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let token='';
    for(let i=0;i<length;i++){
        token+= character.charAt(Math.floor(Math.random()*character.length));

    }
    return token;
}

const randomToken =  randomTokenGenerator(10);
token.innerText = randomToken ;

// functionality of logout

const logoutButton = document.getElementById('logoutBtn');
logoutButton.addEventListener('click',(logoutHandler));
function logoutHandler(){
    localStorage.clear();
    // move to first page 
    window.location.href="../index.html";
}

//functions at profile page
function atProfile(){
    if (isAuthenticated()){
      window.location.href = 'profile.html';
    }
  }  