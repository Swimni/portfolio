<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = strip_tags(trim($_POST["name"]));
    $email = filter_var(trim($_POST["email"]), FILTER_SANITIZE_EMAIL);
    $message = trim($_POST["message"]);

    if (empty($name) || !filter_var($email, FILTER_VALIDATE_EMAIL) || empty($message)) {
        http_response_code(400);
        echo "Merci de remplir correctement tous les champs.";
        exit;
    }

    $recipient = "nino.guinottoffoli@gmail.com"; // Mets ton email ici
    $subject = "Nouveau message de $name";

    $email_content = "Nom: $name\n";
	$email_content = "Nom: $name\n";
	$email_content = "Nom: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    $email_headers = "From: $name <$email>";

    if (mail($recipient, $subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo "Merci, votre message a été envoyé avec succès.";
    } else {
        http_response_code(500);
        echo "Oops! Une erreur est survenue, veuillez réessayer.";
    }
} else {
    http_response_code(403);
    echo "Il y a un problème avec la soumission du formulaire.";
}
?>
