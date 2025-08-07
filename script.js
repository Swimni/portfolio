document.addEventListener("DOMContentLoaded", () => {
  emailjs.init('VcL-kSYiWB1uwcYAK');

  const form = document.querySelector(".form-contact");
  const notification = document.getElementById("notification");

  function showNotification(message, type = "success") {
    notification.textContent = message;
    notification.className = `show ${type}`;
    setTimeout(() => {
      notification.className = "hidden";
    }, 4000);
  }

  if (!form) return;

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm('service_d9i1eqc', 'template_axuw026', this)
      .then(() => {
        showNotification("Message envoyé avec succès !", "success");
        form.reset();
      })
      .catch((error) => {
        console.error("Erreur EmailJS :", error);
        showNotification("Une erreur est survenue, merci de réessayer.", "error");
      });
  });
});




