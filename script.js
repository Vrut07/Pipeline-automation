let cart = [];
let totalPrice = 0;

// Function to add a product to the cart
function addToCart(productName, price, imageUrl) {
    cart.push({ productName, price, imageUrl });
    totalPrice += price;
    updateCartDisplay();
    alert(`${productName} has been added to your cart!`);
}

// Function to update the cart display in the icon and the cart popup
function updateCartDisplay() {
    const cartCount = document.getElementById("cart-count");
    const cartList = document.getElementById("cart-list");
    const totalPriceElement = document.getElementById("total-price");

    // Update cart count in the header
    cartCount.textContent = cart.length;

    // Update cart list in the popup
    cartList.innerHTML = '';
    cart.forEach((item, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `
            <img src="${item.imageUrl}" alt="${item.productName}">
            <span>${item.productName} - $${item.price}</span>
            <button class="remove-btn" onclick="removeFromCart(${index})">Remove</button>
        `;
        cartList.appendChild(listItem);
    });

    // Update total price
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Function to remove an item from the cart
function removeFromCart(index) {
    totalPrice -= cart[index].price;
    cart.splice(index, 1);
    updateCartDisplay();
}

// Show or hide the cart popup
function toggleCart() {
    const cartPopup = document.getElementById("cart-popup");
    cartPopup.style.display = cartPopup.style.display === "flex" ? "none" : "flex";
}

// Close the cart popup
function closeCart() {
    document.getElementById("cart-popup").style.display = "none";
}

// Simulate the checkout process (can be extended later)
function checkout() {
    alert(`Total: $${totalPrice.toFixed(2)}. Thank you for shopping with us!`);
    cart = [];
    totalPrice = 0;
    updateCartDisplay();
    closeCart();
}
