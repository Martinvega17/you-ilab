<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $name = $_POST["name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $company = $_POST["company"];
  $message = $_POST["message"];

  $to = "martinvega0313@gmail.com"; // Reemplaza con tu dirección de correo electrónico
  $subject = "Nuevo mensaje del formulario";
  $body = "Nombre: " . $name . "\n";
  $body .= "Email: " . $email . "\n";
  $body .= "Teléfono: " . $phone . "\n";
  $body .= "Compañía: " . $company . "\n";
  $body .= "Mensaje: " . $message . "\n";

  $headers = "From: " . $email;

  if (mail($to, $subject, $body, $headers)) {
    echo json_encode(["message" => "Mensaje enviado correctamente"]);
  } else {
    echo json_encode(["message" => "Error al enviar el mensaje"]);
  }
}
?>
