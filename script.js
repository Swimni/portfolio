document.addEventListener("DOMContentLoaded", () => {
  emailjs.init('ta_clé_publique');

  const form = document.querySelector(".form-contact");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    emailjs.sendForm('service_d9i1eqc', 'template_axuw026', this)
      .then(() => {
        alert("Message envoyé avec succès !");
        form.reset();
      }, (error) => {
        alert("Une erreur est survenue, merci de réessayer.");
        console.error('FAILED...', error);
      });
  });
});

