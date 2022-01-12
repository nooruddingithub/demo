$(document).ready(function(){
	$("#contactform").submit(function() {
		$.ajax({
		   type: "POST",
		   url : "mail.php",
		   data: $("#contactform").serialize(),
		   success: function(data) {
			   //alert(data);
				$('#contactform')[0].reset();
				$('#succ').css({'color':'#f00', 'font-size':'14px'});
				$('#succ').fadeIn(500).fadeOut(5000);
				$('#succ').html(data);
			}
		 });
		return false;
	});
	
})



