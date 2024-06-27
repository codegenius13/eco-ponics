(function () {
    "use strict"
    // STICKY HEADER ONSCROLL TOP
    const body = document.body;
    let lastScroll = 0;
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            body.classList.remove("scroll-up");
        }
        if (currentScroll > lastScroll && !body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-up");
            body.classList.add("scroll-down");
        }
        if (currentScroll < lastScroll && body.classList.contains("scroll-down")) {
            body.classList.remove("scroll-down");
            body.classList.add("scroll-up");
        }

        lastScroll = currentScroll;
    });
    // END STICKY HEADER ONSCROLL TOP

    // SIDEBAR ONCLICK 
    const toggleOpen = document.querySelector(".toggle-btn i");
    const toogleClose = document.querySelector(".toggle-cancel i");
    const sideNav = document.querySelector(".sidebar");
    const bodyScroll = document.querySelector("body");

    toggleOpen.addEventListener("click", () => {
        sideNav.style.top = "0";
        bodyScroll.style.overflow = "hidden";
    });
    toogleClose.addEventListener("click", () => {
        sideNav.style.top = "-100" + "%";
        bodyScroll.style.overflow = "auto";
    });
    // END SIDEBAR ONCLICK
}())
