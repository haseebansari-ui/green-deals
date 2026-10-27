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


// Checkout payment Mode


const paymentMethods = document.querySelectorAll(
    'input[name="payment-method"]'
);

const cardDetails = document.querySelector(".card-details-main");

function updatePaymentMethod() {
    const selectedMethod = document.querySelector(
        'input[name="payment-method"]:checked'
    );

    if (!selectedMethod || !cardDetails) return;

    if (selectedMethod.value === "card") {
        cardDetails.style.display = "block";
    } else {
        cardDetails.style.display = "none";
    }
}

paymentMethods.forEach((method) => {
    method.addEventListener("change", updatePaymentMethod);
});

// Set the correct initial state on page load
updatePaymentMethod();



// Thankyou Page

document.addEventListener("DOMContentLoaded", () => {
    const successPage = document.querySelector(".place-order");

    if (successPage) {
        successPage.addEventListener("click", (event) => {
            event.preventDefault();
            window.location.href = "./thankyou.html";
        });
    };
});



// password

const password = document.querySelector('.password');
const eyeBtn = document.querySelector('.eye-icon');
const showPss = document.querySelector('.eye-icon .show-pss');
const hidePss = document.querySelector('.eye-icon .hide-pss');

if(password && eyeBtn && showPss && hidePss){

    eyeBtn.addEventListener('click', ()=>{
        if(password.type === "password"){
            password.type = "text";
            showPss.style.display = "none";
            hidePss.style.display = "flex";
        }else{
            password.type = "password";
            showPss.style.display = "flex";
            hidePss.style.display = "none";
        }
    })
}


