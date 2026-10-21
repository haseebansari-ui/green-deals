"use strict"



// faq Accordian


const faqItems = document.querySelectorAll(".content-bx");

faqItems.forEach((item) => {
    const header = item.querySelector(".header-title");

    header.addEventListener("click", () => {
        // Close all other FAQ items
        faqItems.forEach((otherItem) => {
            if (otherItem !== item) {
                otherItem.classList.remove("active");
            }
        });

        // Toggle the clicked FAQ item
        item.classList.toggle("active");
    });
});


// Add to card Button



const addCart = document.querySelectorAll(".btn-add");

function addToCart() {
    addCart.forEach((button) => {
        button.addEventListener("click", () => {
            // Show check icon and Added text
            button.innerHTML = `
                <i class="ri-check-line"></i>
                <span>Added</span>
            `;

            // Switch back after 1 second
            setTimeout(() => {
                button.innerHTML = `
                    <i class="ri-shopping-cart-2-line"></i>
                    <span>Add to cart</span>
                `;
            }, 1500);
        });
    });
}

addToCart();
