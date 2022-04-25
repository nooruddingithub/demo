<?php

$cname 		= $_POST['cname'];
$cemail 	= $_POST['cemail'];
$cphone 	= $_POST['cphone'];
$ccomment 	= $_POST['ccomment'];

$subject 	= 	"Website Name";
$from		= 	$cemail;
$headers 	= 	"From:" . $from;

/* Admin Email Address */
$to = "shaikhnooruddin4@gmail.com" . "," ;
$to .= "nooruddinji@gmail.com". "," ; 	//for cc
$to .= "nooruddinji@gmail.com". "," ;
/*Message Body*/
$message .= 'Name : 				'.$cname . 		"\n\n";
$message .= 'Email Address : 		'.$cemail . 	"\n\n";
$message .= 'Contact No. : 			'.$cphone . 	"\n\n";
$message .= 'Comments : 			'.$ccomment . 	"\n\n";

@mail($to, $subject, $message, $headers);
echo 'Your Message has been sent Successfully.';

?>
