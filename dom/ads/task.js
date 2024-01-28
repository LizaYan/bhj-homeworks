const rotators = Array.from(document.querySelectorAll(".rotator"));

setInterval(rotationStep, 1000);
function rotationStep() {
    for (i = 0; i < rotators.length; i++) {
        let a = rotators[i].querySelector(".rotator__case_active");
        let b = rotators[i].querySelectorAll(".rotator__case")
        if (a.nextElementSibling) {   
            a.classList.remove("rotator__case_active");
            a.nextElementSibling.classList.add("rotator__case_active");
        } else {
            a.classList.remove("rotator__case_active");
            b[0].classList.add("rotator__case_active");
        }
     
    }
 }   

