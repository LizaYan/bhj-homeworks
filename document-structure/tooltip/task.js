const initialText = document.getElementsByClassName("has-tooltip");
for (let i = 0; i < initialText.length; i++) {
    initialText[i].addEventListener("click", showTip);
    initialText[i].insertAdjacentHTML("afterEnd", "<div class='tooltip'></div>");
}

function showTip(event) {
    event.preventDefault();
    const tip = event.target.nextElementSibling;
    tip.addEventListener("click", hideTip);
    tip.innerHTML = event.target.title;
    tip.classList.add("tooltip_active");
    const position = event.target.offsetLeft;
    tip.setAttribute('style', 'left: ' + position + 'px');
}

function hideTip(event) {
    const tip = event.target;
    tip.classList.remove("tooltip_active");
}


