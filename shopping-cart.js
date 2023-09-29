const books = [
    { id: 1, title: "", author: "" },
    { id: 2, title: "", author: "" },
    { id: 3, title: "", author: "" },
];


let shoppingCart = [];


function displayCart() {
    const cartItems = document.getElementById("cart-items");

    
    cartItems.innerHTML = '';

    shoppingCart.forEach(item => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.title}</td>
            <td>${item.author}</td>
            <td><button class="remove-btn" data-id="${item.id}">Remove</button></td>
        `;
        cartItems.appendChild(row);
    });

 
    const removeButtons = document.querySelectorAll(".remove-btn");
    removeButtons.forEach(button => {
        button.addEventListener("click", removeFromCart);
    });
}


function addToCart(bookId) {
    const book = books.find(item => item.id === bookId);
    if (book) {
        shoppingCart.push(book);
        displayCart();
    }
}


function removeFromCart(event) {
    const bookId = parseInt(event.target.getAttribute("data-id"));
    shoppingCart = shoppingCart.filter(item => item.id !== bookId);
    displayCart();
}


document.addEventListener("DOMContentLoaded", () => {
    displayCart();

   
    const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
    addToCartButtons.forEach(button => {
        button.addEventListener("click", event => {
            const bookId = parseInt(event.target.getAttribute("data-id"));
            addToCart(bookId);
        });
    });


    const checkoutButton = document.getElementById("checkout-btn");
    checkoutButton.addEventListener("click", () => {
        alert("Thank you for borrowing the selected books!");
        shoppingCart = []; 
        displayCart();
    });
});
