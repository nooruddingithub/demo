<?php

$cname 		= $_POST['cname'];
$cemail 	= $_POST['cemail'];
$cphone 	= $_POST['cphone'];
$ccity 		= $_POST['ccity'];

$subject 	= 	"AEGON Life";
$from		= 	$cemail;
$headers 	= 	"From:" . $from;

/* Admin Email Address */
$to = "shaikhnooruddin4@gmail.com" . "," ;
$to .= "nooruddinjs@gmail.com". "," ; 	//for cc

/*Message Body*/
$message  = 'Name : 			'.$cname . 	"\n\n";
$message .= 'Email Address : 	'.$cemail . "\n\n";
$message .= 'Contact No. : 		'.$cphone . "\n\n";
$message .= 'City : 			'.$ccity . 	"\n\n";

@mail($to, $subject, $message, $headers);
echo 'Your Message has been sent Successfully.';

?>
