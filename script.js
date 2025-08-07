document.addEventListener("DOMContentLoaded", () => {
  emailjs.init('VcL-kSYiWB1uwcYAK');

  const form = document.querySelector(".form-contact");

  function showNotification(message, color = '#4caf50') {
    const notification = document.getElementById('notification');
    notification.textContent = message;
    notification.style.backgroundColor = color;
    notification.style.display = 'block';
    setTimeout(() => {
      notification.style.display = 'none';
    }, 3500);
  }

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm('service_d9i1eqc', 'template_axuw026', this)
      .then(() => {
        showNotification("Message envoyé avec succès !");
        form.reset();
      })
      .catch((error) => {
        console.error("Erreur EmailJS :", error);
        showNotification("Erreur lors de l'envoi.", '#f44336'); // rouge
      });
  });
});







