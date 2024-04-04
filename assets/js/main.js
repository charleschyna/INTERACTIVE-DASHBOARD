// add hovered clsss to the selected list item

let list = document.querySelectorAll(".navigation li");

function activeLink() {
    list.forEach((item) => {
        item.classList.remove("hovered");
    });
    this.classList.add("hovered");
}

list.forEach((item) => item.addEventListener("mouseover", activeLink));

// Menu Toggle
let toggle = document.querySelector(".toggle");
let navigation = document.querySelector(".navigation");
let main = document.querySelector(".main");

toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
}

// Select the help section list item
let helpSection = document.querySelector(".navigation li:nth-child(5)"); // Assuming it's the 5th list item

// Add an event listener to the help section
helpSection.addEventListener("click", handleHelpClick);

// Function to handle click on the help section
function handleHelpClick() {
    // Add functionality here
    window.location.href = "help.html"; // Redirect to a help page
}

// Select the dashboard section list item
let dashboardSection = document.querySelector(".navigation li:nth-child(2)"); // Assuming it's the 5th list item


// Add an event listener to the dashborad section
dashboardSection.addEventListener("click", handleDashboardClick);

// Function to handle click on the help section
function handleDashboardClick() {
    // Add functionality here
    window.location.href = "index.html"; // Redirect to a help page
}
