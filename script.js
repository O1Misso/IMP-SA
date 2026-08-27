<script>
  document.addEventListener("DOMContentLoaded", () => {
  // Toggle buttons
  document.querySelectorAll('.toggle').forEach(button => {
    button.addEventListener('click', () => {
      const info = button.nextElementSibling;
      info.classList.toggle('show');
    });
  });

  // Contact form
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      alert('Thank you for your message! We will get back to you soon.');
      this.reset();
    });
  }

  // Registration form
  const registrationForm = document.getElementById('registrationForm');
  if (registrationForm) {
    registrationForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const name = document.getElementById('regName').value;
      const email = document.getElementById('regEmail').value;
      const role = document.getElementById('regRole').value;
      alert(`Registration successful!\nName: ${name}\nEmail: ${email}\nRole: ${role}`);
      this.reset();
    });
  }

// Mission Statement toggle
document.addEventListener("DOMContentLoaded", () => {
    const missionBtn = document.getElementById("missionBtn");
    const missionBox = document.getElementById("missionStatement"); // ✅ match the HTML ID

    missionBtn.addEventListener("click", () => {
        missionBox.style.display =
        missionBox.style.display === "block" ? "none" : "block";
    });
});

    </script>
