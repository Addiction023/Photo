function highlightImage(event) {
  console.log("Mouse over or focus event triggered");
  event.target.style.borderColor = "#1d3557";
}

function resetImage(event) {
  console.log("Mouse leave or blur event triggered");
  event.target.style.borderColor = "#444";
}

function initializeGallery() {
  console.log("Page loaded, initializing gallery...");

  let images = document.querySelectorAll("#gallery img");

  // loop through each image
  for (let i = 0; i < images.length; i++) {
    images[i].setAttribute("tabindex", "0"); // keyboard access
    images[i].addEventListener("mouseover", highlightImage);
    images[i].addEventListener("mouseleave", resetImage);
    images[i].addEventListener("focus", highlightImage);
    images[i].addEventListener("blur", resetImage);
  }
}
