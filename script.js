// Add any JavaScript code here if needed

// Example of a simple interactive functionality
// Show an alert when the "Explore Our Services" button is clicked
const exploreBtn = document.querySelector('.cta-btn');
exploreBtn.addEventListener('click', () => {
  alert('You clicked "Explore Our Services" button!');
});
// Smooth scroll to target section
const smoothScroll = (target) => {
  const element = document.querySelector(target);
  if (element) {
    const offsetTop = element.getBoundingClientRect().top;
    const navbarHeight = document.querySelector('nav').offsetHeight;
    window.scrollTo({
      top: offsetTop - navbarHeight,
      behavior: 'smooth',
    });
  }
};

document.getElementById("contactForm").addEventListener("submit", function (event) {
  event.preventDefault();

  // Simulate form submission delay (you can remove this in the actual implementation)
  setTimeout(function () {
    // Display confirmation message
    const confirmationMessage = document.getElementById("confirmationMessage");
    confirmationMessage.textContent =
      "You will be contacted back by our Research Manager within 24 hours.";
    
    // Clear the form after showing the confirmation message (optional)
    document.getElementById("contactForm").reset();

    // Remove the confirmation message after 5 seconds (optional)
    setTimeout(function () {
      confirmationMessage.textContent = "";
    }, 5000);
  }, 1000); // Delay for demonstration purposes (remove in actual implementation)
});