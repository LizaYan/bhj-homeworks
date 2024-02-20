const closeButton = document.getElementsByClassName("modal__close");
const popup = document.getElementById("subscribe-modal");
closeButton[0].addEventListener("click", closePopup);
window.addEventListener("load", cookieCheck);

function closePopup(event) {
    popup.classList.remove("modal_active");
    document.cookie = "popup_closed=true";
}

function cookieCheck(event) {
    if (document.cookie.includes("popup_closed=true")) {
        popup.classList.add("modal_active");
    }
}