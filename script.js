/*document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector(".form-contact");

  form.addEventListener("submit", (e) => {
    e.preventDefault(); // Empêche l'envoi réel
*/
    const inputs = form.querySelectorAll("input, textarea");
    let valid = true;

    inputs.forEach((field) => {
      if (!field.value.trim()) {
        field.style.borderColor = "red";
        valid = false;
      } else {
        field.style.borderColor = "#ccc";
      }
    });

    if (valid) {
      alert("Message envoyé avec succès !");
      form.reset();
    } else {
      alert("Merci de remplir tous les champs !");
    }
  });
});
