const fontSizeButtons = Array.from(document.querySelectorAll(".font-size"));
const bookPage = document.querySelector(".book");
for (i = 0; i < fontSizeButtons.length; i++) {
    fontSizeButtons[i].addEventListener("click", sizeChange);
}

function sizeChange(event) {
    const eventIndex = fontSizeButtons.indexOf(event.target);
    const notActive = fontSizeButtons.filter((elem) => fontSizeButtons.indexOf(elem) !== eventIndex);  
    const eventSize = event.target.dataset.size;
    event.preventDefault();
    event.target.classList.add("font-size_active");
    for (i = 0; i < notActive.length; i++) {
        notActive[i].classList.remove("font-size_active"); 
    }
 
    if (eventSize == fontSizeButtons[0].dataset.size) {
        bookPage.classList.add("book_fs-small");   
        bookPage.classList.remove("book_fs-big");
    } 
    
    if (eventSize == fontSizeButtons[2].dataset.size) {
        bookPage.classList.add("book_fs-big");  
        bookPage.classList.remove("book_fs-small");
    } 

    if (eventIndex == 1) {
        bookPage.classList.remove("book_fs-big", "book_fs-small");   
    }
}
