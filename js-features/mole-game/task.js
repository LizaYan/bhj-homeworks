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
}

function getHole(n) {
    return document.getElementById(`hole${n}`);
}
