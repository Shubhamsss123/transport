var regPrice = 14160;
var fees_others = 14160;
var fees_stdwp = 7080;
var regType = "delegate";



function updatePrice(){
	document.getElementById('total').textContent = "INR " + regPrice + "/-  (including 18% GST)";
}

function displayQuestion(answer) {
  document.getElementById(answer + 'Question').style.display = "block";
  if (answer == "yes") { 
	document.getElementById('noQuestion').style.display = "none";
	document.getElementById('totaltab').style.display = "block";
	updatePrice();
} else {
	document.getElementById('yesQuestion').style.display = "none";
	document.getElementById('totaltab').style.display = "block";
	regPrice = fees_others;
	regType = "delegate";
	updatePrice();
  }

}

function checkStudent(value) {
	if(value == "student"){
		regPrice = fees_stdwp;
		if($('#no').is(':checked')){
			regPrice = fees_others;
			regType = "delegate"
			updatePrice();
		}
		updatePrice();
		regType = "student"
		document.getElementById('stdinp').style.display = "block";
	} else {
		regPrice = fees_others;
		regType = "delegate";
		document.getElementById('stdinp').style.display = "none";
		updatePrice();
	}
}


function transactionIdGenerator() {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < 12; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}

$('#regsubmitbtn').on('click', function(e){
    event.preventDefault();
	var paperid = "NA";
	var studentid = "NA";
	var formvalidity = "valid";
	
	if($('#yes').is(':checked')){
		if(Number($("#papid").val()) > 100){
			paperid = Number($("#papid").val());
			formvalidity = "valid";
		}else{
			formvalidity = "invalid";
			return alert("Please provide a valid paper id to proceed");
		}
	}

	if($('#stuyes').is(':checked')){
		if($("#stdid").val()){
			studentid = $("#stdid").val();
			formvalidity = "valid";
		}else{
			formvalidity = "invalid";
			return alert("Please provide a valid student id to proceed");
		}
	}
	
    if($('#uname').val() && $('#uemail').val() && $('#uphone').val() && $('#uorg').val() && $('#addr').val() && $('#pin').val() && formvalidity == "valid"){
        var currency = "INR";
        var generatedUname = "TPMDC_" + $('#uname').val().match(/(\b\S)?/g).join("").toUpperCase() + Math.floor(Math.random()*(999999-100000+1)+100000);
	var ebtoken = regType + Math.floor(Math.random()*(999999-100000+1)+100000);
        var formData = {
            'userid' : generatedUname,
            'name' : $('#uname').val(),
            'email' : $('#uemail').val(),
            'phone' : $('#uphone').val(),
            'uorg' : $('#uorg').val(),
            'type' : regType,
	    'addr' : $('#addr').val(),
            'pin' : $('#pin').val(),
            'totalcharges' : regPrice,
            'currency' : currency,
            'paperid' : paperid,
	    'studentid' : studentid,
	    'token' : ebtoken
        }

        $.ajax({
            url  : 'parse_register.php',
            method : 'POST',
            data : formData,
            success : function(sMsg){
                console.log(sMsg);
                //https://testasc.iitb.ac.in/testonlinepay/commJsp/v2_accessPoint.jsp?sMsg=sAppId=10157%26sUserId='+formData.userid+'%26sUserName='+formData.name+'%26sAmountDue='+formData.totalcharges+'%26sPurpose=ICFMCF_Registration_Fee%26sReqId='+sMsg.transid+'%26sCurrency='+formData.currency
                var win = window.open('https://www.civil.iitb.ac.in/tpmdc/confirmandpay.php?sUserId='+formData.userid+'&sUserName='+formData.name+'&sUserEmail='+formData.email+'&sPhone='+formData.phone+'&sOrg='+formData.uorg+'&sType='+formData.type+'&sAmountDue='+formData.totalcharges+'&sCurrency='+formData.currency+'&sAddr='+formData.addr+'&sPin='+formData.pin+'&sPaper='+formData.paperid+'&sStuid='+formData.studentid+'&sToken='+formData.token, "_self");
                setTimeout(win.focus(), 5000);
		//$("#reg_form").trigger("reset");
            },
            error : function(err){
                console.log("Server Side error", err);
            }
        })
        return
    } else {
        alert("Something is missing !");
    }
})
