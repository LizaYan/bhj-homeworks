document.addEventListener("scroll", elemReveal);
const viewportHeight = window.innerHeight;
const revealedBlock = Array.from(document.querySelectorAll(".reveal")); 

function elemReveal() {
    for (i = 0; i < revealedBlock.length; i++) {
    const {top, bottom} = revealedBlock[i].getBoundingClientRect();  
    if (top > 0 && top < viewportHeight && bottom > 0 && bottom < viewportHeight) {
        revealedBlock[i].classList.add("reveal_active");
    }
    if (top < 0 || top > viewportHeight || bottom < 0 || bottom > viewportHeight) {
        revealedBlock[i].classList.remove("reveal_active");
    }
    }
}