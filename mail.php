<?php

$nom = $_POST["nom"];
$prenom = $_POST["prenom"];
$email = $_POST["email"];
$email2 = $_POST["email2"];

$to = "vincentjimi50@gmail.com";
$subject = "Concours festival Motion Motion";
$message = "Participation de".$nom." ".$prenom." ".$email."au concours Motion Motion";
$headers = "From: ". $email . "\r\n";
$headers .= "Reply-To: ". $email . "\r\n";
$headers .= "MIME-Version: 1.0\r\n";
$headers .= "Content-Type: text/html; charset=ISO-8859-1\r\n";

mail($to,$subject,$message,$headers);

echo '<p class="text-white"> Votre participation au concours a bien été enregistré!</p>';


?>