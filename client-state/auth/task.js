const xhr = new XMLHttpRequest();
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
    const formData = new FormData();
    formData.append('login', form[0].querySelector(".control").value);
    formData.append('password', form[0].querySelectorAll(".control")[1].value);

    if (xhr.readyState === xhr.DONE) {
        if (JSON.parse(xhr.response).success == true) {
            localStorage.setItem("id", JSON.parse(xhr.response).user_id); 
            showWelcome();
        } else {
            alert("Неверный логин/пароль");
        }
    }

    xhr.open("POST", "https://students.netoservices.ru/nestjs-backend/auth", true);
    xhr.send(formData);
   
}
