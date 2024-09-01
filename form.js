const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent default form submission

  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  // Basic validation
  if (!name || !email || !message) {
    alert('Please fill in all required fields.');
    return;
  }

  // Additional validation (e.g., email format)
  if (!isValidEmail(email)) {
    alert('Invalid email address.');
    return;
  }

  // Submit form data (e.g., send to a server)
  console.log('Form submitted:', { name, email, message });
});

function isValidEmail(email) {
  // Simple email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
