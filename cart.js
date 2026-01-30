document.addEventListener("DOMContentLoaded", () => {

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const cartCountEl = document.getElementById("cart-count");
    if (cartCountEl) {
        cartCountEl.innerText = cart.length;
    }

    const buttons = document.querySelectorAll(".product-card button");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            const product = {
                name: button.dataset.name,
                price: button.dataset.price,
                image: button.dataset.image
            };

            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));

            if (cartCountEl) {
                cartCountEl.innerText = cart.length;
            }
        });
    });

});