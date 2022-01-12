<?php

$subject = "Contact Us";
$headers = "From:" . $_POST["email"];

/* Admin email address for cc */
$to = "nooruddinjs@gmail.com".",";
$to .= "nzami786@gmail.com".",";

/* Message Body */
$message  = "First Name : ".$_POST["first_name"]."\n";
$message .= "Last Name : ".$_POST["last_name"]."\n";
$message .= "Email Address : ".$_POST["email"]."\n";
$message .= "Contact No. : ".$_POST["phone_number"]."\n";
$message .= "Gender : ".$_POST["gender"]."\n";
$message .= "Address 1 : ".$_POST["address_1"]."\n";
$message .= "Address 2 : ".$_POST["address_2"]."\n";
$message .= "City : ".$_POST["city"]."\n";
$message .= "State : ".$_POST["state"]."\n";
$message .= "Zip Code : ".$_POST["zip_code"]."\n";
$message .= "Story : ".$_POST["textarea_1"]."\n";
$message .= "Checkbox 1 : ".$_POST["checkbox_1"]."\n";
$message .= "Checkbox 2 : ".$_POST["checkbox_2"]."\n";

@mail($to, $subject, $message, $headers);

?>
