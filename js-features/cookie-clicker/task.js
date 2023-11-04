let clickCount = document.getElementById("clicker__counter")
let cookie = document.getElementById("cookie")
cookie.onclick = function clickingCookie() {
    clickCount.textContent++; 
    if (clickCount.textContent % 2 !== 0) {
       cookie.width = 210;
       cookie.height = 147;
    } else {
       cookie.width = 200;
       cookie.height = 127;
    }
}