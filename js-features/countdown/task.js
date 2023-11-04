function countdown() {
    timer = document.getElementById("seconds"); 
    timer.textContent--;
    if (timer.textContent == 0) {
     alert('Вы победили в конкурсе!')
     clearInterval(intervalId);
    }
 }
 
 let intervalId = setInterval(countdown, 1000);
