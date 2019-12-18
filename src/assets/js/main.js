
"use strict";
const headerNav = document.getElementById("js-header--nav");
const mainWrapper = document.getElementById("js-wrapper");
// Add Event Listener for the hamburger Menu
document.getElementById("js-header--toggle").addEventListener("click", displayMobileMenu);

function displayMobileMenu() {
    headerNav.classList.toggle("header__mobile");
    mainWrapper.classList.toggle("wrapper__mobile-menu")
}

let userDetails, parentElement, profileImage, currentTarget, 
    items = document.getElementsByClassName("js-list--item");
for (var i = 0; i < items.length; i++) {
    items[i].addEventListener("mouseenter", toggleUserDetails);
    items[i].addEventListener("mouseleave", toggleUserDetails);
}
function toggleUserDetails(currentElement) {
    currentTarget = currentElement.target;
    profileImage = currentTarget.firstElementChild;
    userDetails = currentTarget.lastElementChild;
    parentElement = currentTarget.parentElement;
    if ((parentElement.offsetWidth + parentElement.offsetLeft) == (currentTarget.offsetLeft + currentTarget.offsetWidth)) {
        userDetails.classList.toggle("last");
        userDetails.classList.toggle("show");
        profileImage.classList.toggle("imageOverlay");
    }
    else {
        userDetails.classList.toggle("show");
        profileImage.classList.toggle("imageOverlay");
    }
}
