const signinBlock = document.getElementById("signin");
const form = document.getElementsByTagName("form");
const welcome = document.getElementById("welcome");
const userId = document.getElementById("user_id");
form[0].addEventListener("submit", submitForm);
window.addEventListener("load", idCheck);

function showWelcome() {
    userId.innerHTML = localStorage.getItem("id");
    signinBlock.classList.remove("signin_active");
    welcome.classList.add("welcome_active");
}

function idCheck(event) {
    if (localStorage.getItem("id")) {
       showWelcome();
    }
}

function submitForm(event) {
    event.preventDefault(); 
    const xhr = new XMLHttpRequest();
    const formData = new FormData(signin__form);

    xhr.addEventListener("load", responseCheck);
    function responseCheck() {
        if (xhr.response.success == true) {
            localStorage.setItem("id", xhr.response.user_id); 
            showWelcome();
        } else {
            alert("Неверный логин/пароль");
        }
    }

    xhr.responseType = 'json';
    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth", true);
    xhr.send(formData);
}
