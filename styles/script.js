document.addEventListener("DOMContentLoaded", function () {
  // 📩 CONTACT FORM FUNCTIONALITY
  const form = document.querySelector(".contact-form");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault(); // Stop form from refreshing the page

      const name = form.querySelector('input[type="text"]').value.trim();
      const email = form.querySelector('input[type="email"]').value.trim();
      const phone = form.querySelector('input[type="tel"]').value.trim();
      const comment = form.querySelector('textarea').value.trim();

      if (!name || !email || !phone || !comment) {
        alert("Please fill in all fields before sending.");
        return;
      }

      alert(`Thank you ${name}! Your message has been received.`);
      form.reset(); // Clears the form
    });
  }

  // 🛒 BUY NOW BUTTON FUNCTIONALITY FOR PRODUCTS PAGE
  const buyButtons = document.querySelectorAll(".buy-btn");

  buyButtons.forEach(button => {
    button.addEventListener("click", function () {
      alert("Thank you for shopping with us!");
    });
  });
});
