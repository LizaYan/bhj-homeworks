const initialText = document.getElementsByClassName("has-tooltip");
for (i = 0; i < initialText.length; i++) {
    initialText[i].addEventListener("click", showTip);
    initialText[i].insertAdjacentHTML("beforeEnd", "<div class='tooltip'></div>");
}

function showTip(event) {
    event.preventDefault();
    const tip = event.target.lastChild;
    tip.innerHTML = event.target.title;
    tip.classList.add("tooltip_active");
    const position = event.target.offsetLeft;
    tip.setAttribute('style', 'left: ' + position + 'px');
}