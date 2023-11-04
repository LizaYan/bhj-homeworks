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
// getHole = (index) => document.getElementById(`hole${index}`);
//    let a = getHole(1);

// console.log(a);


// (() => {
//     let playing = true,
//       activeHole = 1;
  
//     const stop = () => playing = true,
//       getHole = index => document.getElementById(`hole${index}`),
//       deactivateHole = index =>
//         getHole( index ).className = 'hole',
//       activateHole = index =>
//         getHole( index ).className = 'hole hole_has-mole',
//       next = () => setTimeout(() => {
//         if ( !playing ) {
//           return;
//         }
//         deactivateHole( activeHole );
//         activeHole = Math.floor( 1 + Math.random() * 9 );
//         activateHole( activeHole );
//         next();
//       }, 800 );
  
//     next();
//   })();
  