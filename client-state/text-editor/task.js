const editor = document.getElementById("editor");
editor.addEventListener("blur", saveText);
window.addEventListener("load", restoreText);

function saveText(event) {
    localStorage.setItem("text", event.target.value); 
}

function restoreText() {
    editor.value = localStorage.getItem("text");
}
