<?php

$subject 	= 	"Contact Us";
$headers 	= 	"From:" . $_POST['email'];

/* Admin Email Address */
$to = "nooruddinjs@gmail.com" . "," ;
$to .= "nzami786@gmail.com". "," ; 	//for cc

/*Message Body*/
$message  = 'First Name : '.$_POST['first_name'] . "\n\n";
$message  = 'Last Name : '.$_POST['last_name'] . "\n\n";
$message .= 'Email Address : '.$_POST['email'] . "\n\n";
$message .= 'Contact No. : '.$_POST['phone_number'] . "\n\n";
$message .= 'Gender : '.$_POST['gender'] . "\n\n";
$message .= 'Address 1 : '.$_POST['address_1'] . "\n\n";
$message .= 'Address 2 : '.$_POST['address_2'] . "\n\n";
$message .= 'City : '.$_POST['city'] . "\n\n";
$message .= 'State : '.$_POST['state'] . "\n\n";
$message .= 'Zip Code : '.$_POST['zip_code'] . "\n\n";
$message .= 'Story : '.$_POST['textarea_1'] . "\n\n"; 
$message .= 'Checkbox 1 : '.$_POST['checkbox_1'] . 	"\n\n";
$message .= 'Checkbox 2 : '.$_POST['checkbox_2'] . 	"\n\n";

@mail($to, $subject, $message, $headers);
echo 'Your Message has been sent Successfully.';
?>
