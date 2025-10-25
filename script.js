console.log("js started");

// Wait for the HTML page to fully load
document.addEventListener("DOMContentLoaded", function () {
    
    console.log("DOM loaded, now running scripts..."); // For debugging

    // --- Code for Product Page: Cart Button ---
    let cart = document.getElementById("cart-btn");
    if (cart) {
        cart.addEventListener("click", () => {
            cart.innerHTML = "✓ Added to Cart";
            cart.disabled = true; // Good practice
        });
    }

    // --- Code for Product Page: Quantity Counter ---
    let cnt = 1;
    let sub = document.getElementById("sub");
    let quantity = document.getElementById("cnt");
    let add = document.getElementById("add");

    // Check if ALL counter elements exist
    if (sub && quantity && add) {
        sub.addEventListener("click", () => {
            if (cnt > 1) {
                quantity.innerHTML = `${cnt - 1}`;
                cnt--;
            } else {
                alert("Sorry! quantity can't be less than 1");
            }
        });

        add.addEventListener("click", () => {
            quantity.innerHTML = `${cnt + 1}`;
            cnt++;
        });
    }

    // --- Code for Product Page: Thumbnail Gallery ---
    let main_img = document.getElementById("image");
    let image1 = document.getElementById("img-1");
    let image2 = document.getElementById("img-2");
    let image3 = document.getElementById("img-3");

    // Check if ALL gallery elements exist
    if (main_img && image1 && image2 && image3) {
        image1.addEventListener("click", () => {
            main_img.style.backgroundImage = "url('images/laptop-img-1.jpg')"; // Use local images!
        });
        image2.addEventListener("click", () => {
            main_img.style.backgroundImage = "url('images/laptop-img-2.jpg')";
        });
        image3.addEventListener("click", () => {
            main_img.style.backgroundImage = "url('images/laptop-img-3.jpg')";
        });
        
        // Also add the 'active' border logic
        const allThumbnails = document.querySelectorAll('.thumbnail');
        allThumbnails.forEach(function(thumbnail) {
            thumbnail.addEventListener('click', function(event) {
                allThumbnails.forEach(item => item.classList.remove('active'));
                event.target.classList.add('active');
            });
        });
    }

    // --- Code for Product Page: Buy Now Button ---
    let buyNow = document.getElementById("buy-btn");
    if (buyNow) {
        buyNow.addEventListener("click", () => {
            window.location.href = "payment.html"; // Use relative path
        });
    }

    // --- Code for Payment Page: Form Validation ---
    let paymentForm = document.getElementById("payment-form");
    
    if (paymentForm) {
        
        // Get the form elements ONLY if the form exists
        let cardNum = document.getElementById("card-number");
        let cardName = document.getElementById("card-name");
        let cardDate = document.getElementById("expiry-date");
        let cvv = document.getElementById("cvv");
        let errorMsg = document.getElementById("payment-error");

        paymentForm.addEventListener("submit", (event) => {
            event.preventDefault(); // Stop the page from reloading

            if (cardNum.value.trim() == '' || cardName.value.trim() == '' || cardDate.value.trim() == '' || cvv.value.trim() == '') {
                
                if (errorMsg) {
                    errorMsg.textContent = "Please fill out all card details!";
                }
                
            } else {
                window.location.href = "finalMsg.html"; // Use relative path
            }
        });
    }

}); // --- End of DOMContentLoaded ---