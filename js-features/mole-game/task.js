let winningPoints = document.getElementById('dead');
let losingPoints = document.getElementById('lost');



holeCheck();

function holeCheck() {
    for (let i = 1; i < 10; i++) {
    let a =  getHole(i)
    a.onclick = () => checkHole(i);
    }
}

function checkHole(n) {
   let a = getHole(n);
   if (a.className.includes('hole hole_has-mole')) {
    winningPoints.textContent++;
   } else {
    losingPoints.textContent++;
   }
   
   if (winningPoints.textContent == 10) {
    alert("Ура! Победа!");
    winningPoints.textContent = 0;
    losingPoints.textContent = 0;
   }

   if (losingPoints.textContent == 5) {
    alert("Ты проиграл!");
    winningPoints.textContent = 0;
    losingPoints.textContent = 0;
   }
}

function getHole(n) {
    return document.getElementById(`hole${n}`);
}
