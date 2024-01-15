const a = document.querySelectorAll(".dropdown__value");
const c = document.getElementsByClassName("dropdown__item")

for (i = 0; i < a.length; i++) {
    a[i].addEventListener("click", dropList);
}

for (i = 0; i < c.length; i++) {
    c[i].addEventListener("click", itemSelect);
}

function dropList(event) {
    const b = event.srcElement.nextElementSibling;
    b.classList.toggle("dropdown__list_active");
}

function itemSelect(event) {  
    event.preventDefault();
    const e = event.srcElement.closest(".dropdown__list");
    e.previousElementSibling.textContent = event.target.innerText;
    e.classList.remove("dropdown__list_active");
}
