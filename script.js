document.addEventListener("DOMContentLoaded", () => {
  emailjs.init('VcL-kSYiWB1uwcYAK');

  const form = document.querySelector(".form-contact");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm('service_d9i1eqc', 'template_axuw026', this)
      .then(() => {
        alert("Message envoyé !");
        form.reset();
      })
      .catch((error) => {
        alert("Erreur lors de l'envoi.");
        console.error(error);
      });
  });
});






