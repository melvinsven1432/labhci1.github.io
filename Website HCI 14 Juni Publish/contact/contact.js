const navLinks = document.getElementById('nav-links');
const navBtn = document.getElementById('nav-btn');

navBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const form = document.getElementById("form");
const errormsg = document.getElementById("error-msg");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstname = document.getElementById("first").value;
    let lastname = document.getElementById("last").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let inquiry = document.getElementById("inquiry").value;

    function validatePhone(phone){
        const validCharacters = "0123456789";
        for(let i = 0; i < phone.length; i++){
            if (!validCharacters.includes(phone[i])) {
                return false;
            }
        }
    }

    if(firstname.length == 0){
        errormsg.style="display: block";
        errormsg.innerHTML = "First name must be filled";
        return;
    }
    else if(lastname.length == 0){
        errormsg.style="display: block";
        errormsg.innerHTML = "Last name must be filled";
        return;
    }
    else if(email.length == 0){
        errormsg.style="display: block";
        errormsg.innerHTML = "Email must be filled";
        return;
    }
    else if(!email.includes('@')){
        errormsg.style="display: block";
        errormsg.innerHTML = "Email must contain @";
        return;
    }
    else if(email.startsWith('@')){
        errormsg.style="display: block";
        errormsg.innerHTML = "Email is invalid";
        return;
    }
    else if(!email.endsWith(".com")){
        errormsg.style="display: block";
        errormsg.innerHTML = "Email must end with '.com'";
        return;
    }
    else if(validatePhone(phone) == false){
        errormsg.style="display: block";
        errormsg.innerHTML = "Phone number is invalid";
        return;
    }
    else if(phone.length < 11){
        errormsg.style="display: block";
        errormsg.innerHTML = "Phone number is too short";
        return;
    }
    else if(inquiry.length == 0){
        errormsg.style="display: block";
        errormsg.innerHTML = "Nature of inquiry must be filled";
        return;
    }
    else{
        errormsg.style="display: none";
        window.location.href = "/homepage/homepage.html";
    }
})