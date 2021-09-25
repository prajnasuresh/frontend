const is_login = localStorage.getItem('is_login');


const navbar = document.querySelector('.navbar');

if(!is_login){
    navbar.innerHTML+=`<li><a href="./login.html">ADMIN</a></li>`
}
else{
    navbar.innerHTML+=`<li><a href="./response.html">View Responses</a></li>`
}