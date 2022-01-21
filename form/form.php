<?php

/* Admin email address for cc */
$to = "shaikhnooruddin4@gmail.com" . ",";
$to .= "nooruddinjs@gmail.com" . ",";
$to .= "nzami786@gmail.com" . ",";

/* Message Body */
if (isset($_POST["first_name"])) {
    $message = "First Name : " . $_POST["first_name"] . "\n";
}
if (isset($_POST["last_name"])) {
    $message .= "Last Name : " . $_POST["last_name"] . "\n";
}
if (isset($_POST["email"])) {
    $headers = "From:" . $_POST["email"];
    $message .= "Email Address : " . $_POST["email"] . "\n";
}
if (isset($_POST["phone_number"])) {
    $message .= "Contact No. : " . $_POST["phone_number"] . "\n";
}
if (isset($_POST["gender"])) {
    $message .= "Gender : " . $_POST["gender"] . "\n";
}
if (isset($_POST["address_1"])) {
    $message .= "Address 1 : " . $_POST["address_1"] . "\n";
}
if (isset($_POST["address_2"])) {
    $message .= "Address 2 : " . $_POST["address_2"] . "\n";
}
if (isset($_POST["city"])) {
    $message .= "City : " . $_POST["city"] . "\n";
}
if (isset($_POST["state"])) {
    $message .= "State : " . $_POST["state"] . "\n";
}
if (isset($_POST["zip_code"])) {
    $message .= "Zip Code : " . $_POST["zip_code"] . "\n";
}
if (isset($_POST["textarea_1"])) {
    $message .= "Message : " . $_POST["textarea_1"] . "\n";
}
if (isset($_POST["checkbox_1"])) {
    $message .= "Checkbox 1 : " . $_POST["checkbox_1"] . "\n";
}
if (isset($_POST["checkbox_2"])) {
    $message .= "Checkbox 2 : " . $_POST["checkbox_2"] . "\n";
}

$subject = "Contact Us";

@mail($to, $subject, $message, $headers);

$fp = fopen('data.txt', 'a');
fwrite($fp, $message);
fclose($fp);

?>
