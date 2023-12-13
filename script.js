// Get the popup container element
const popupContainer = document.getElementById("popupContainer");

// Function to show the popup
function showPopup() {
  popupContainer.style.display = "block";
}

// Function to close the popup
function closePopup() {
  popupContainer.style.display = "none";
}

// Show the popup when the page is loaded (you can use window.onload or DOMContentLoaded)
document.addEventListener("DOMContentLoaded", showPopup);
