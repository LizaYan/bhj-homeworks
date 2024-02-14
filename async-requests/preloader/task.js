const currencyRequest = new XMLHttpRequest();

currencyRequest.addEventListener( "readystatechange", showCurrency);
function showCurrency() {
    if (currencyRequest.readyState === currencyRequest.DONE) {
        const currencyData = JSON.parse(currencyRequest.response);
        const itemsContainer = document.getElementById("items");
        const items = document.getElementsByClassName("item");
        const loader = document.getElementById("loader");
        const a = [Object.values(currencyData.response["Valute"])][0];
        
        loader.classList.remove("loader_active");
        for (let i = 0; i < a.length; i++) {
            itemsContainer.insertAdjacentHTML("beforeEnd", "<div class='item'><div class='item__code'>USD</div><div class='item__value'>32</div><div class='item__currency'>руб.</div></div>");
            items[i].firstChild.textContent = a[i]["CharCode"];
            items[i].firstChild.nextElementSibling.textContent = a[i]["Value"];
        }
        
    }
}

currencyRequest.open("GET", "https://students.netoservices.ru/nestjs-backend/slow-get-courses");
currencyRequest.send();