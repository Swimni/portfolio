// script.js

document.addEventListener("DOMContentLoaded", () => {
  // Initialisation de EmailJS avec ta clé publique (user ID)
  emailjs.init('VcL-kSYiWB1uwcYAK');

  const form = document.querySelector(".form-contact");
  if (!form) return; // Sécurité : si le formulaire n'existe pas, on ne fait rien

  form.addEventListener("submit", function(event) {
    event.preventDefault(); // Empêche le rechargement de la page

    // Envoi du formulaire avec EmailJS
    emailjs.sendForm('service_d9i1eqc', 'template_axuw026', this)
      .then(() => {
        alert("Message envoyé avec succès !");
        form.reset(); // Réinitialise le formulaire
      })
      .catch((error) => {
        console.error("Erreur EmailJS :", error);
        alert("Une erreur est survenue, merci de réessayer.");
      });
  });
});



