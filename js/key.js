window.onload = function ()
{
	function createCookie(name,value,days)
	{
		if (days)
		{
			var date = new Date();
			date.setTime(date.getTime()+(days*24*60*60*1000));
			var expires = "; expires="+date.toGMTString();
		}
		else
			var expires = "";
		document.cookie = name+"="+value+expires+"; path=/";
	}
	function readCookie(name)
	{
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++)
		{
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
	function eraseCookie(name)
	{
		createCookie(name,"",-1);
	}
	document.getElementById('sno').value = readCookie('sno');
	//erase or not erase sno cookie
	if (readCookie('key_msg') == '1')
	{
		document.getElementById('message').innerHTML = "Key has expired!";
		eraseCookie('key_msg');
	}
	else if (readCookie('key_msg') == '2')
	{
		document.getElementById('message').innerHTML = "Invalid key!";
		eraseCookie('key_msg');
	}
	//retrieve sno cookie, save it in the hidden input field 
	document.getElementById("sno").value = readCookie("sno");
	//eraseCookie("sno");
}
