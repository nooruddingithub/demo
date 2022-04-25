var messages = {};
messages['acess_to_mic'] = 'We need to access your microphone in order to place calls.<br />Just select <strong>Allow</strong>.';
messages['check_remember'] = 'Check <strong>Remember</strong> and we will not bother you with this dialog ever again.<br />Click <strong>Close</strong> to finish the process.';
messages['enter_phone_free_call'] = 'Enter phone number in international format to perform free call.';
messages['enter_phone_paid_call'] = 'Enter phone number in international format to perform paid call.';
messages['invalid_phone_number_message'] = 'Invalid phone number. Enter phone number in international format';
messages['time_left'] = 'Time left: ';
messages['need_flash_player'] = 'Kindly install latest version of Google Chrome to proceed.<br/><a href="https://support.google.com/chrome/answer/95346?hl=en" rel="nofollow" style="color: white;text-decoration:underline">https://support.google.com/chrome/answer/95346?hl=en</a>';
messages['operation_status_unsupported_call_direction'] = 'Call direction is not supported';
messages['free_direction_notsupported'] = 'There are no free minutes for direction. ';
messages['price_per_minute'] = "Price per minute call to {1} is $ {2}. You can talk for {3} minutes.";
messages['direction_name'] = "Direction name: {1}. You can talk for {2} seconds.";
messages['microphone_not_found'] = 'Microphone is not found';
messages['needs_access_to_microphone'] = 'Allow access to the microphone.';
messages['no_free_minutes'] = 'Currently, there is no free minutes available for direction: {1}. ';
messages['connection_impossible'] = 'Connection is impossible. Check phone number';
messages['connection_failed'] = 'Connection failed';
messages['not_enought_funds'] = 'Insufficient funds to make paid call';
messages['free_personal_call_limit_exceed'] = 'You reached the limit of free calls for today.'
messages['busy'] = 'Phone is busy, call back later'
messages['bad_responce'] = 'Unable to establish a connection, most likely you enetered invalid number. If the number is correct, please contact us at support@call2friends.com'
	

function localize() {
	var msg = arguments[0];
	
	for(var i=1; i<arguments.length; i++) {
		msg = msg.replace('{' + i + '}', arguments[i]);
	}
	return msg;
}