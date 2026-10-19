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

