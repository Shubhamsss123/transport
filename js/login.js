window.onload = function()
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
	
	//read cookie remember_user and load the value in the input box
	eraseCookie('logged_user');
	if(readCookie('remember_me') == '1')
	{
		document.getElementById('username').value = readCookie('remember_user');
		document.getElementById('remember_me').checked = "true";
	}
	//read cookie login_msg and display the message and then delete the cookie
	
	if(readCookie('login_msg') != null)
	{
		if (readCookie('login_msg') == '1')
		{
			document.getElementById('message').innerHTML = "Wrong username!";
			eraseCookie('login_msg');
		}
		else if (readCookie('login_msg') == '2')
		{
			document.getElementById('message').innerHTML = "Please enter the password!";
			eraseCookie('login_msg');
			document.getElementById('username').value = readCookie('remember_user');
		}
		else if (readCookie('login_msg') == '4')
		{
			document.getElementById('message').innerHTML = "Wrong password!";
			eraseCookie('login_msg');
			document.getElementById('username').value = readCookie('remember_user');
		}
	}
}


