function send_accmail(accid){
	$.ajax({
		url  : 'accmailer.php',
		method : 'POST',
		data : {userid: accid},
		success : function(sMsg){
			alert("Accomodation proforma Sent");
			console.log(sMsg);
		},
		error : function(err){
			alert("unable to shoot mail");
			console.log(err);
		}
	});
}
