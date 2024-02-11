const quantityButtons = Array.from(document.getElementsByClassName("product__quantity-control"));
const addToCartButtons = Array.from(document.getElementsByClassName("product__add"));
for (i = 0; i < quantityButtons.length; i++) {
    quantityButtons[i].addEventListener("click", quantityChange);
}

for (i = 0; i < addToCartButtons.length; i++) {
    addToCartButtons[i].addEventListener("click", addToCart);
}

function quantityChange(event) {
    const increase = quantityButtons.filter((elem) => elem.classList.contains("product__quantity-control_inc"));
    const decrease = quantityButtons.filter((elem) => elem.classList.contains("product__quantity-control_dec"));
    if (increase.includes(event.target)) {
        event.target.previousElementSibling.textContent++;
    } else if (decrease.includes(event.target) && event.target.nextElementSibling.textContent > 0) {
        event.target.nextElementSibling.textContent--;
    } 
}

function addToCart(event) {
    const cart = Array.from(document.getElementsByClassName("cart__products"));
    const selectedProduct = event.target.closest(".product");
    cart[0].insertAdjacentHTML("beforeEnd", "<div class='cart__product' data-id='1'><img class='cart__product-image' src=''><div class='cart__product-count'>20</div></div>");
    const cartProduct = Array.from(document.getElementsByClassName("cart__product")); 
    cartProduct[cartProduct.length - 1].dataset.id = selectedProduct.dataset.id;
    cartProduct[cartProduct.length - 1].firstChild.src = selectedProduct.querySelector("img").src;
    cartProduct[cartProduct.length - 1].lastChild.textContent = selectedProduct.querySelector(".product__quantity-value").textContent;
    
    for (i = 0; i < cartProduct.length - 1; i++) {
        if (cartProduct.length > 1 && cartProduct[i].dataset.id == cartProduct[cartProduct.length - 1].dataset.id) {
            cartProduct[i].lastChild.textContent = Number(cartProduct[i].lastChild.textContent) + Number(selectedProduct.querySelector(".product__quantity-value").textContent);
            cartProduct[cartProduct.length - 1].remove();
        }
    }
}
