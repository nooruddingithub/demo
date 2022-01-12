<?php

$cname 		= $_POST['cname'];
$cemail 	= $_POST['cemail'];
$cphone 	= $_POST['cphone'];
$cwebsite = $_POST['cwebsite'];
$ccity 		= $_POST['ccity'];
$cage 		= $_POST['cage'];
$cdate 		= $_POST['cdate'];
$caboveinfo = $_POST['caboveinfo'];
$cterms 	= $_POST['cterms'];

$subject 	= 	"Contact Us";
$from		= 	$cemail;
$headers 	= 	"From:" . $from;

/* Admin Email Address */
$to = "shaikhnooruddin4@gmail.com" . "," ;

/*Message Body*/
$message  = 'Name : 			'.$cname . 	"\n\n";
$message .= 'Email Address : 	'.$cemail . "\n\n";
$message .= 'Contact No. : 		'.$cphone . "\n\n";
$message .= 'Website : 		'.$cwebsite . "\n\n";
$message .= 'City : 			'.$ccity . 	"\n\n";
$message .= 'Age : 			'.$cage . 	"\n\n";
$message .= 'Date Of Birth : 			'.$cdate . 	"\n\n";
$message .= 'Above Information : 			'.$caboveinfo . 	"\n\n";
$message .= 'Check yourself : 			'.$cterms . 	"\n\n";

@mail($to, $subject, $message, $headers);
echo 'Your Message has been sent Successfully.';

?>
