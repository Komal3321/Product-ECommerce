function openPopup(popupId) {
    document.getElementById(popupId).style.display = "block";
}

function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

// Close popup when clicking outside of it
window.onclick = function(event) {
    let popups = document.querySelectorAll(".popup");
    popups.forEach(popup => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
};

document.querySelector(".add-to-cart").addEventListener("click", function() {
    alert("Item added to cart!");
});


let cart = [];
let totalPrice = 0;

function addToCart(name, price, image) {
    cart.push({ name, price, image });
    totalPrice += price;
    updateCart();
}

function updateCart() {
    let cartList = document.getElementById("cart-items");
    let totalElement = document.getElementById("total-price");
    cartList.innerHTML = "";
    
    cart.forEach((item, index) => {
        let li = document.createElement("li");
        li.innerHTML = `<img src="${item.image}" width="50"> ${item.name} - $${item.price} 
                        <button onclick="removeFromCart(${index})">Remove</button>`;
        cartList.appendChild(li);
    });

    totalElement.textContent = totalPrice;
}

function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    updateCart();
}