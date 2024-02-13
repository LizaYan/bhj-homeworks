const quantityButtons = Array.from(document.getElementsByClassName("product__quantity-control"));
const addToCartButtons = Array.from(document.getElementsByClassName("product__add"));
for (let i = 0; i < quantityButtons.length; i++) {
    quantityButtons[i].addEventListener("click", quantityChange);
}

for (let i = 0; i < addToCartButtons.length; i++) {
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

    const cartProduct = Array.from(document.getElementsByClassName("cart__product")); 
    const productInCard = cartProduct.find((elem) => elem.dataset.id == selectedProduct.dataset.id);

    if (productInCard) {
        productInCard.lastChild.textContent = Number(productInCard.lastChild.textContent) + Number(selectedProduct.querySelector(".product__quantity-value").textContent);
    } else if (selectedProduct.querySelector(".product__quantity-value").textContent > 0) {
        cart[0].insertAdjacentHTML("beforeEnd", "<div class='cart__product' data-id='1'><img class='cart__product-image''><div class='cart__product-count'>20</div></div>");
        cart[0].lastChild.dataset.id = selectedProduct.dataset.id;
        console.log(selectedProduct.querySelector("img").src);
        cart[0].lastChild.firstChild.src = selectedProduct.querySelector("img").src;
        cart[0].lastChild.lastChild.textContent = selectedProduct.querySelector(".product__quantity-value").textContent;
    }
}
    