function send_techvmail(techvid){
$.ajax({
url  : 'techvmailer.php',
method : 'POST',
data : {userid: techvid},
success : function(sMsg){
alert("tech visit proforma Sent");
console.log(sMsg);
},
error : function(err){
alert("unable to shoot mail");
console.log(err);
}
});
}
