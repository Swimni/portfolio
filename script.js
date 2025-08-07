document.addEventListener("DOMContentLoaded", () => {
  emailjs.init('VcL-kSYiWB1uwcYAK');

  const form = document.querySelector(".form-contact");

  if (!form) return;

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm('service_d9i1eqc', 'template_axuw026', this)
      .then(() => {
        alert("Message envoyé avec succès !");
        this.reset();
      })
      .catch((error) => {
        console.error("Erreur EmailJS :", error);
        alert("Une erreur est survenue, merci de réessayer.");
      });
  });
});

