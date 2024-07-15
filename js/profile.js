//window.result="";
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

function trim(s)
{
	s = s.replace(/(^\s*)|(\s*$)/gi,"");
	s = s.replace(/[ ]{2,}/gi," ");
	s = s.replace(/\n /,"\n");
	return s;
}

/*function decode64(input)
{
	var output = "";
   var chr1, chr2, chr3 = "";
   var enc1, enc2, enc3, enc4 = "";
   var i = 0;
   // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
   var base64test = /[^A-Za-z0-9\+\/\=]/g;
   if (base64test.exec(input))
	{
		alert("There were invalid base64 characters in the input text.\n" + "Valid base64 characters are A-Z, a-z, 0-9, '+', '/',and '='\n" +        "Expect errors in decoding.");
	}
   input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
   do
	{
	   enc1 = keyStr.indexOf(input.charAt(i++));
      enc2 = keyStr.indexOf(input.charAt(i++));
      enc3 = keyStr.indexOf(input.charAt(i++));
      enc4 = keyStr.indexOf(input.charAt(i++));
      chr1 = (enc1 << 2) | (enc2 >> 4);
      chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
      chr3 = ((enc3 & 3) << 6) | enc4;
      output = output + String.fromCharCode(chr1);
      if (enc3 != 64)
		{
	      output = output + String.fromCharCode(chr2);
	   }
	   if (enc4 != 64)
		{
			output = output + String.fromCharCode(chr3);
	   }
	   chr1 = chr2 = chr3 = "";
	   enc1 = enc2 = enc3 = enc4 = "";
	}
	while (i < input.length);
   return unescape(output);
}*/

window.onload = function()
{
	upload_paper();	//by default the paper upload form is displayed
	//view_profile();
	//change_password();
}

function edit()
{
	document.getElementById('abstractid').disabled = false;
	document.getElementById('title').disabled = false;
	document.getElementById('keywords').disabled = false;
	document.getElementById('abstractfile').disabled = false;
	document.getElementById('date').disabled = false;
	document.getElementById('fname1').disabled = false;
	document.getElementById('lname1').disabled = false;
	document.getElementById('emailid1').disabled = false;
	document.getElementById('fname2').disabled = false;
	document.getElementById('lname2').disabled = false;
	document.getElementById('emailid2').disabled = false;
	/*document.getElementById('fname3').disabled = false;
	document.getElementById('lname3').disabled = false;
	document.getElementById('emailid3').disabled = false;
	document.getElementById('fname4').disabled = false;
	document.getElementById('lname4').disabled = false;
	document.getElementById('emailid4').disabled = false;
	document.getElementById('fname5').disabled = false;
	document.getElementById('lname5').disabled = false;
	document.getElementById('emailid5').disabled = false;
	*/
	document.getElementById('edit_profile').disabled = true;
	
	document.getElementById('update_profile').enabled = false;
	
}

function update()
{
	var xmlhttp;
	try
	{
		xmlhttp = new XMLHttpRequest();
	}
	catch(e)
	{
		try
		{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e)
		{
			try
			{
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch(e)
			{
				alert("Please upgrade your browser or switch to another browser for editing your profile!");
				return false;
			}
		}
	}
	var separator = "!)@(";
	var tab_user = document.getElementById('profile').value;
	var info = tab_user;
	info += separator;
	info += trim(document.getElementById('abstractid').value);	//remove leading and trailing spaces
	info += separator;
	info += trim(document.getElementById('title').value);
	info += separator;
	info += trim(document.getElementById('keywords').value);
	info += separator;
	info += trim(document.getElementById('abstractfile').value);
	info += separator;
	info += trim(document.getElementById('date').value);
	info += separator;
	info += trim(document.getElementById('fname1').value);
	info += separator;
	info += trim(document.getElementById('lname1').value);
	info += separator;
	info += trim(document.getElementById('emailid1').value);
	info += separator;
	info += trim(document.getElementById('fname2').value);
	info += separator;
	info += trim(document.getElementById('lname2').value);
	info += separator;
	
		/*
	info += trim(document.getElementById('emailid2').value);
	info += separator;
	info += trim(document.getElementById('fname3').value);
	info += separator;
	info += trim(document.getElementById('lname3').value);
	info += separator;
	info += trim(document.getElementById('emailid3').value);
	info += separator;
	info += trim(document.getElementById('fname4').value);
	info += separator;
	info += trim(document.getElementById('lname4').value);
	info += separator;
	info += trim(document.getElementById('emailid4').value);
	info += separator;
	info += trim(document.getElementById('fname5').value);
	info += separator;
	info += trim(document.getElementById('lname5').value);
	info += separator;
	info += trim(document.getElementById('emailid5').value);
	*/
	xmlhttp.onreadystatechange=function()
	{
		if(xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			if(xmlhttp.responseText == '1')
			{
				alert("Profile updated");
			}
			else if(xmlhttp.responseText == '0')
			{
				alert("Sorry we could not update your profile: Please try again!");
			}
			document.getElementById('edit_profile').disabled = false;
			document.getElementById('update_profile').disabled = true;
			document.getElementById('abstractid').disabled = true;
			document.getElementById('title').disabled = true;
			document.getElementById('keywords').disabled = true;
			document.getElementById('abstractfile').disabled = true;
			document.getElementById('date').disabled = true;
			document.getElementById('fname1').disabled = true;
			document.getElementById('lname1').disabled = true;
			document.getElementById('emailid1').disabled = true;
			document.getElementById('fname2').disabled = true;
			document.getElementById('lname2').disabled = true;
			document.getElementById('emailid2').disabled = true;
			/*
			document.getElementById('fname3').disabled = true;
			document.getElementById('lname3').disabled = true;
			document.getElementById('emailid3').disabled = true;
			document.getElementById('fname4').disabled = true;
			document.getElementById('lname4').disabled = true;
			document.getElementById('emailid4').disabled = true;
			document.getElementById('fname5').disabled = true;
			document.getElementById('lname5').disabled = true;
			document.getElementById('emailid5').disabled = true;
			*/
		}
	}
	xmlhttp.open("POST","../php/update_info.php",true)
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send('info='+info);

	
}






function check_id(id)
{
	if(trim(id) == "" || trim(id) == null)
		return true;
	var lastAtPos = id.lastIndexOf('@');
   var lastDotPos = id.lastIndexOf('.');
	var reg1 = /@*@/;
	if (lastAtPos < lastDotPos && lastAtPos > 0 && id.indexOf('@@') == -1 && id.indexOf('@.') == -1 && id.split(/@/g).length - 1 == 1 &&lastDotPos > 2 && (id.length - lastDotPos) > 2)
		return true;
	else
	{
		//alert("Seems to be an invalid email-id!");
		return false;
	}
   
		
}

function validate()
{
	//check required fields not empty
	var title = document.getElementById('title').value;
	var abstract = document.getElementById('abstract').value; // added on 09/07/12
	if(trim(abstract) == "" || trim(abstract) == null)
	{
		alert("Abstract Missing!");
		return false;
	}
	if(trim(title) == "" || trim(title) == null)
	{
		alert("Title of the paper missing!");
		return false;
	}
		//check if paper has been uploaded
	var filename = document.getElementById("paper_file").value;
	if( filename == "" || filename == null)
	{
		alert("Paper missing!");
		return false;
	}
	var ext = filename.substr(filename.lastIndexOf('.') + 1);
  	ext = ext.toLowerCase();
 	 if(ext != 'pdf') 
	 {
    	alert('You selected a .'+ext+' file; please select a .pdf file instead!');
    	return false; 
     }
  	 else
	 {
    	return true; 
	 }
	
			
	return true;
}
//ochange function of Title list in the upload paper
function insertTitle(a)
{
	document.getElementById('title').value = a.value;
}

window.tlist = "";
function upload_paper()
{
	window.tlist = "";
	document.getElementById("VP").style.textDecoration = "none";
	document.getElementById("VA").style.textDecoration = "none";
	document.getElementById("UP").style.textDecoration = "underline";
	document.getElementById("VPa").style.textDecoration = "none";
	document.getElementById("CP").style.textDecoration = "none";
	if(document.getElementById && document.createElement)
	{
		//var x = document.createElement('hr');
		//var line1 = document.getElementById('line1');
		//line1.appendChild(x);
		document.getElementById('line1').innerHTML="";
		document.getElementById('line2').innerHTML="";
		document.getElementById('line3').innerHTML="";
		document.getElementById('line4').innerHTML="";
		document.getElementById('line5').innerHTML="";
		document.getElementById('line6').innerHTML="";
		document.getElementById('line7').innerHTML="";
		document.getElementById('line8').innerHTML="";
		document.getElementById('line9').innerHTML="";
		document.getElementById('line10').innerHTML="";
		document.getElementById('line11').innerHTML="";
		document.getElementById('line12').innerHTML="";
		document.getElementById('line13').innerHTML="";
		document.getElementById('line14').innerHTML="";
		document.getElementById('line15').innerHTML="";	
		document.getElementById('line16').innerHTML="";
	    document.getElementById('line17').innerHTML="";
		document.getElementById('line1').style.position = "relative";
		document.getElementById('line1').style.left = "0px";
		document.getElementById('line2').style.position = "relative";
		document.getElementById('line2').style.left = "0px";
		document.getElementById('line3').style.position = "relative";
		document.getElementById('line3').style.left = "0px";
		document.getElementById('line4').style.position = "relative";
		document.getElementById('line4').style.left = "0px";
		document.getElementById('line5').style.position = "relative";
		document.getElementById('line5').style.left = "0px";
		document.getElementById('line6').style.position = "relative";
		document.getElementById('line6').style.left = "0px";
		document.getElementById('line7').style.position = "relative";
		document.getElementById('line7').style.left = "0px";
		document.getElementById('line8').style.position = "relative";
		document.getElementById('line8').style.left = "0px";
		document.getElementById('line9').style.position = "relative";
		document.getElementById('line9').style.left = "0px";
		document.getElementById('line10').style.position = "relative";
		document.getElementById('line10').style.left = "0px";
		document.getElementById('line11').style.position = "relative";
		document.getElementById('line11').style.left = "0px";
		document.getElementById('line12').style.position = "relative";
		document.getElementById('line12').style.left = "0px";
		document.getElementById('line13').style.position = "relative";
		document.getElementById('line13').style.left = "0px";
		document.getElementById('line14').style.position = "relative";
		document.getElementById('line14').style.left = "0px";
		document.getElementById('line15').style.position = "relative";
		document.getElementById('line15').style.left = "0px";
		document.getElementById('line16').style.position = "relative";
		document.getElementById('line16').style.left = "0px";	
        document.getElementById('line17').style.position = "relative";
		document.getElementById('line17').style.left = "0px";

		//extract abstracts' titles
		var xmlhttp;
		try
		{
			xmlhttp = new XMLHttpRequest();
		}
		catch(e)
		{
			try
			{
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(e)
			{
				try
				{
					xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
				}
				catch(e)
				{
					alert("Please upgrade your browser or switch to another browser for editing your profile!");
					return false;
				}
			}
		}
		
		var tab_user = document.getElementById('profile').value;	//user for whose the profile is open maybe different then the logged in user
		xmlhttp.onreadystatechange=function()
		{
			if(xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				if(xmlhttp.responseText == '0')
				{
					alert("Could not connect to server - try again!");
				}
				else if(xmlhttp.responseText == '1')
				{
					alert("Could not retrieve the profile!");
				}
				else
				{
					window.tlist = xmlhttp.responseText.split("ℳ");
					//alert(window.tlist[1]);
					xmlhttp.close();
				}
			}
		}
		xmlhttp.open("POST","../php/getAbstractTitle.php",false)
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send('tab_user='+tab_user);

		document.getElementById('line1').innerHTML = "Title of paper: <input type=\'text\' name= \'title\' id=\'title\'  readonly=\'readonly\' disabled=\'disabled\'><br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<select id='titleList' name='titleList' onchange='insertTitle(this)' style='width:400px;'></select>(choose the title from the list)";
		//populate dropdown list
		var i=1;
		for(i=1; i<=window.tlist[0]; i++)
		{
			var z = document.getElementById('titleList');
			var option = document.createElement('option');
			option.text = window.tlist[i];
			option.value = window.tlist[i];
			try
			{
				z.add(option,z.options[null]);
			}
			catch(e)
			{
				z.add(option,null);
			}
			document.getElementById('title').value = window.tlist[1];
			document.getElementById('title').disabled=false;
		}
		//document.getElementById('title').style = "font-family:Tahoma, myFont2, Geneva, sans-serif;width:200px;margin:0px;padding:1px;letter-spacing:normal;vertical-align:middle;white-space:normal;	word-spacing:normal;";
		document.getElementById('title').style.width = "400px";

		/*
		document.getElementById('line2').style.position = "relative";
		document.getElementById('line2').style.left = "22px";
		document.getElementById('line2').innerHTML = "Abstract: <textarea rows=\'10\' cols=\'250\' name= \'abstract\' id=\'abstract\' style=\'vertical-align:text-top;\'>";
		document.getElementById('abstract').style.width = "600px";
		
		document.getElementById('line4').innerHTML = "Other Author's email id: <input type=\'text\' name= \'author2\' id=\'author2\'>";
		document.getElementById('author2').style.width = "200px";

		document.getElementById('line5').style.position = "relative";
		document.getElementById('line5').style.left = "103px";		
		document.getElementById('line5').innerHTML = "(if any) <input type=\'text\' name= \'author3\' id=\'author3\'>";
		document.getElementById('author3').style.width = "200px";

		document.getElementById('line6').style.position = "relative";
		document.getElementById('line6').style.left = "150px";		
		document.getElementById('line6').innerHTML = "<input type=\'text\' name= \'author4\' id=\'author4\'>";
		document.getElementById('author4').style.width = "200px";

		document.getElementById('line7').style.position = "relative";
		document.getElementById('line7').style.left = "150px";		
		document.getElementById('line7').innerHTML = "<input type=\'text\' name= \'author5\' id=\'author5\'>";
		document.getElementById('author5').style.width = "200px";

		document.getElementById('line8').style.position = "relative";
		document.getElementById('line8').style.left = "150px";		
		document.getElementById('line8').innerHTML = "<input type=\'text\' name= \'author6\' id=\'author6\'>";
		document.getElementById('author6').style.width = "200px";

		document.getElementById('line9').style.position = "relative";
		document.getElementById('line9').style.left = "106px";		
		document.getElementById('line9').innerHTML = "Paper:<input type=\'hidden\' name= \'MAX_FILE_SIZE\' value=\'1000000\'> <input name=\'paper_file\' id='paper_file' title=\'Upload your abstract\' type=\'file\'> ";
		
		document.getElementById('line10').style.position = "relative";
		document.getElementById('line10').style.left = "148px";		
		document.getElementById('line10').innerHTML = "<input type=\'submit\' name= \'submit\' id=\'submit\' value=\'Submit\'>";
		//onclick=\'formvalidation('paper_submission');return false;\'

*/		

	
		document.getElementById('line2').style.position = "relative";
		document.getElementById('line2').style.left = "28px";
		document.getElementById('line2').innerHTML = "Abstract: <textarea rows=\'10\' cols=\'250\' name= \'abstract\' id=\'abstract\' style=\'vertical-align:text-top;\'>";
		document.getElementById('abstract').style.width = "600px";
		
		document.getElementById('line3').style.position = "relative";
		document.getElementById('line3').style.left = "44px";		
		document.getElementById('line3').innerHTML = "Paper:<input type=\'hidden\' name= \'MAX_FILE_SIZE\' value=\'1000000\'> <input name=\'paper_file\' id='paper_file' title=\'Upload your abstract\' type=\'file\'>(in .pdf format) ";
		
		document.getElementById('line4').style.position = "relative";
		document.getElementById('line4').style.left = "28px";		
		document.getElementById('line4').innerHTML = "<input type=\'submit\' name= \'submit\' id=\'submit\' value=\'Submit\'>";

	}
	else
	{
		alert("Your browser doesn\'t support Level 1 DOM. Please upgrade your browser or use another one!");
	}
	
}

function view_uploadedProfile()
{
	document.getElementById("VP").style.textDecoration = "underline";
	document.getElementById("VA").style.textDecoration = "none";
	document.getElementById("UP").style.textDecoration = "none";
	document.getElementById("VPa").style.textDecoration = "none";
	document.getElementById("CP").style.textDecoration = "none";
	if(document.getElementById && document.createElement)
	{
		
		document.getElementById('line1').innerHTML="";
		document.getElementById('line2').innerHTML="";
		document.getElementById('line3').innerHTML="";
		document.getElementById('line4').innerHTML="";
		document.getElementById('line5').innerHTML="";
		document.getElementById('line6').innerHTML="";
		document.getElementById('line7').innerHTML="";
		document.getElementById('line8').innerHTML="";
		document.getElementById('line9').innerHTML="";
		document.getElementById('line10').innerHTML="";	
		document.getElementById('line11').innerHTML="";
		document.getElementById('line12').innerHTML="";
		document.getElementById('line13').innerHTML="";
		document.getElementById('line14').innerHTML="";
		document.getElementById('line15').innerHTML="";	
		document.getElementById('line16').innerHTML="";
		document.getElementById('line17').innerHTML="";
		document.getElementById('line1').style.position = "relative";
		document.getElementById('line1').style.left = "0px";
		document.getElementById('line2').style.position = "relative";
		document.getElementById('line2').style.left = "0px";
		document.getElementById('line3').style.position = "relative";
		document.getElementById('line3').style.left = "0px";
		document.getElementById('line4').style.position = "relative";
		document.getElementById('line4').style.left = "0px";
		document.getElementById('line5').style.position = "relative";
		document.getElementById('line5').style.left = "0px";
		document.getElementById('line6').style.position = "relative";
		document.getElementById('line6').style.left = "0px";
		document.getElementById('line7').style.position = "relative";
		document.getElementById('line7').style.left = "0px";
		document.getElementById('line8').style.position = "relative";
		document.getElementById('line8').style.left = "0px";
		document.getElementById('line9').style.position = "relative";
		document.getElementById('line9').style.left = "0px";
		document.getElementById('line10').style.position = "relative";
		document.getElementById('line10').style.left = "0px";
		document.getElementById('line11').style.position = "relative";
		document.getElementById('line11').style.left = "0px";
		document.getElementById('line12').style.position = "relative";
		document.getElementById('line12').style.left = "0px";
		document.getElementById('line13').style.position = "relative";
		document.getElementById('line13').style.left = "0px";
		document.getElementById('line14').style.position = "relative";
		document.getElementById('line14').style.left = "0px";
		document.getElementById('line15').style.position = "relative";
		document.getElementById('line15').style.left = "0px";
		document.getElementById('line16').style.position = "relative";
		document.getElementById('line16').style.left = "0px";	
        document.getElementById('line17').style.position = "relative";
		document.getElementById('line17').style.left = "0px";
		

		document.getElementById('line1').style.position = "relative";
		document.getElementById('line1').style.left = "13px";
		document.getElementById('line1').innerHTML = "Abstract ID: <input type=\'text\' name= \'abstractid\' id=\'abstractid\' disabled=\'disabled\'>";
		document.getElementById('abstractid').style.width = "200px";

		document.getElementById('line2').style.position = "relative";
		document.getElementById('line2').style.left = "14px";
		document.getElementById('line2').innerHTML = "Title:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; <input type=\'text\' name= \'title\' id=\'title\' disabled=\'disabled\'>";
		document.getElementById('title').style.width = "200px";

		document.getElementById('line3').style.position = "relative";
		document.getElementById('line3').style.left = "14px";
		document.getElementById('line3').innerHTML = "Keywords: &nbsp;&nbsp<input type=\'text\' name= \'keywords\' id=\'keywords\' disabled=\'disabled\'>";
		document.getElementById('keywords').style.width = "400px";

		document.getElementById('line4').style.position = "relative";
		document.getElementById('line4').style.left = "14px";
		document.getElementById('line4').innerHTML = "Abstract:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<input type=\'text\' name= \'abstractfile\' id=\'abstractfile\' disabled=\'disabled\' >";
		document.getElementById('abstractfile').style.width = "400px";

		document.getElementById('line5').style.position = "relative";
		document.getElementById('line5').style.left =  "14px";
		document.getElementById('line5').innerHTML = "Date Uploaded/Modified<input type=\'text\' name= \'date\' id=\'date\' disabled=\'disabled\'><br><br>";
		document.getElementById('date').style.width = "400px";

		document.getElementById('line6').style.position = "relative";
		document.getElementById('line6').style.left =  "14px";
		document.getElementById('line6').innerHTML = "<b>First Author</b> <br>First name <input type=\'text\' name= \'fname1\' id=\'fname1\' disabled=\'disabled\'>&nbsp;&nbsp;&nbsp;Last name <input type=\'text\' name= \'lname1\' id=\'lname1\' disabled=\'disabled\'>";
		document.getElementById('fname1').style.width = "200px";
		document.getElementById('lname1').style.width = "200px";
		

		document.getElementById('line7').style.position = "relative";
		document.getElementById('line7').style.left =  "14px";
		document.getElementById('line7').innerHTML = "Email ID: <input type=\'text\' name= \'emailid1\' id=\'emailid1\' disabled=\'disabled\'><br><br>";
		document.getElementById('emailid1').style.width = "200px";

		document.getElementById('line8').style.position = "relative";
		document.getElementById('line8').style.left =  "14px";
		document.getElementById('line8').innerHTML = "<b>Second Author</b> <br>First name <input type=\'text\' name= \'fname2\' id=\'fname2\' disabled=\'disabled\'>&nbsp;&nbsp;&nbsp;Last name <input type=\'text\' name= \'lname2\' id=\'lname2\' disabled=\'disabled\'>";
		document.getElementById('fname2').style.width = "200px";
		document.getElementById('lname2').style.width = "200px";
/*		
		document.getElementById('line10').style.position = "relative";
		document.getElementById('line10').style.left = "31px";
		document.getElementById('line10').innerHTML = "Email ID: <input type=\'text\' name= \'emailid1\' id=\'emailid1\' disabled=\'disabled\'><br><br>";
		document.getElementById('emailid2').style.width = "200px";

		document.getElementById('line11').style.position = "relative";
		document.getElementById('line11').style.left = "85px";
		document.getElementById('line11').innerHTML = "Third Author: <br>Name <input type=\'text\' name= \'fname3\' id=\'fname3\' disabled=\'disabled\'>&nbsp;&nbsp;&nbsp;Last name <input type=\'text\' name= \'lname3\' id=\'lname3\' disabled=\'disabled\'>";
		document.getElementById('fname3').style.width = "200px";	
		document.getElementById('lname3').style.width = "200px";
		
		
		document.getElementById('line12').style.position = "relative";
		document.getElementById('line12').style.left = "31px";
		document.getElementById('line12').innerHTML = "Email ID: <input type=\'text\' name= \'emailid3\' id=\'emailid3\' disabled=\'disabled\'><br><br>";
		document.getElementById('emailid3').style.width = "200px";	
		
		
		document.getElementById('line13').style.position = "relative";
		document.getElementById('line13').style.left = "85px";
		document.getElementById('line13').innerHTML = "Fourth Author: <br>Name <input type=\'text\' name= \'fname4\' id=\'fname4\' disabled=\'disabled\'>&nbsp;&nbsp;&nbsp;Last name <input type=\'text\' name= \'lname4\' id=\'lname4\' disabled=\'disabled\'>";
		document.getElementById('fname3').style.width = "200px";
		document.getElementById('lname4').style.width = "200px";
		
		document.getElementById('line14').style.position = "relative";
		document.getElementById('line14').style.left = "31px";
		document.getElementById('line14').innerHTML = "Email ID: <input type=\'text\' name= \'emailid4\' id=\'emailid4\' disabled=\'disabled\'><br><br>";
		document.getElementById('emailid4').style.width = "200px";		
		
		document.getElementById('line15').style.position = "relative";
		document.getElementById('line15').style.left = "85px";
		document.getElementById('line15').innerHTML = "Fifth Author: <br>Name <input type=\'text\' name= \'fname5\' id=\'fname5\' disabled=\'disabled\'>&nbsp;&nbsp;&nbsp;Last name <input type=\'text\' name= \'lname5\' id=\'lname5\' disabled=\'disabled\'>";
		document.getElementById('fname5').style.width = "200px";	
		document.getElementById('lname5').style.width = "200px";
		
		document.getElementById('line16').style.position = "relative";
		document.getElementById('line16').style.left = "31px";
		document.getElementById('line16').innerHTML = "Email ID: <input type=\'text\' name= \'emailid5\' id=\'emailid5\' disabled=\'disabled\'><br><br>";
		document.getElementById('emailid5').style.width = "200px";		
		
		*/
		document.getElementById('line9').style.position = "relative";
		document.getElementById('line9').style.left = "85px";
		document.getElementById('line9').innerHTML = "<input type=\'button\' name= \'edit_profile\' id=\'edit_profile\' onclick=\'edit()\' value=\'Edit Profile\'> <input type=\'button\' name= \'update_profile\' id=\'update_profile\' onclick=\'update()\' disabled=\'disabled\' value=\'Update Profile\'>";
		document.getElementById('edit_profile').style.width = "200px";	

		/*var x = "<?php $host = 'localhost'; $sql_user = 'root'; $sql_pswd = '';	$db = 'tpmdc';	$con = mysql_connect($host,$sql_user,$sql_pswd); 		if(!$con) { die ('Could not connect: '.mysql_error()); } mysql_select_db($db,$con); $user = base64_decode($_COOKIE['logged_user']); $result = mysql_query('SELECT * FROM author_info WHERE email-id=\''.$user.'\';'); while($row = mysql_fetch_array($result)) { setrawcookie('fname',$row['fname'],time()+60,'/','','',1); } ?>";*/

	
		//extract profile date
		var xmlhttp;
		try
		{
			xmlhttp = new XMLHttpRequest();
		}
		catch(e)
		{
			try
			{
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(e)
			{
				try
				{
					xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
				}
				catch(e)
				{
					alert("Please upgrade your browser or switch to another browser for editing your profile!");
					return false;
				}
			}
		}	
		var tab_user = document.getElementById('profile').value;	//user for whose the profile is open maybe different then the logged in user
		xmlhttp.onreadystatechange=function()
		{
			if(xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				//alert(xmlhttp.responseText);
				if(xmlhttp.responseText == '0')
				{
					alert("Could not connect to server - try again!");
				}
				else if(xmlhttp.responseText == '1')
				{
					alert("Could not retrieve the profile!");
				}
				else
				{
					window.info = xmlhttp.responseText.split("!)@(");
					document.getElementById('abstractid').value = window.info[0];
					document.getElementById('title').value = window.info[1];
					document.getElementById('keywords').value = window.info[2];
					document.getElementById('abstractfile').value = window.info[3];
					document.getElementById('date').value = window.info[4];
					document.getElementById('fname1').value = window.info[5];
					document.getElementById('lname1').value = window.info[6];
					document.getElementById('emailid1').value = window.info[7];
					document.getElementById('fname2').value = "abc";
					document.getElementById('lname2').value = window.info[9];
					/*document.getElementById('emailid2').value = window.info[11];
					document.getElementById('fname3').value = window.info[12];
					document.getElementById('lname3').value = window.info[13];
					document.getElementById('emailid3').value = window.info[14];
					document.getElementById('fname4').value = window.info[15];
					document.getElementById('lname4').value = window.info[16];
					document.getElementById('emailid4').value = window.info[17];
					document.getElementById('fname5').value = window.info[18];
					document.getElementById('lname5').value = window.info[19];
					document.getElementById('emailid5').value = window.info[20];
					*/
					xmlhttp.abort();
				}
			}
			//alert(xmlhttp.readyState+"  " + xmlhttp.status);
		}
		
		xmlhttp.open("POST","../php/get_info.php",true)
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send('tab_user='+tab_user);
		
		
			
	}
	else
	{
		alert("Your browser doesn\'t support Level 1 DOM. Please upgrade your browser or use another one!");
	}
}



//view profile
function view_profile()
{
	document.getElementById("VP").style.textDecoration = "underline";
	document.getElementById("VA").style.textDecoration = "none";
	document.getElementById("UP").style.textDecoration = "none";
	document.getElementById("VPa").style.textDecoration = "none";
	document.getElementById("CP").style.textDecoration = "none";
	if(document.getElementById && document.createElement)
	{
		
		document.getElementById('line1').innerHTML="";
		document.getElementById('line2').innerHTML="";
		document.getElementById('line3').innerHTML="";
		document.getElementById('line4').innerHTML="";
		document.getElementById('line5').innerHTML="";
		document.getElementById('line6').innerHTML="";
		document.getElementById('line7').innerHTML="";
		document.getElementById('line8').innerHTML="";
		document.getElementById('line9').innerHTML="";
		document.getElementById('line10').innerHTML="";	
		document.getElementById('line11').innerHTML="";
		document.getElementById('line12').innerHTML="";
		document.getElementById('line13').innerHTML="";
		document.getElementById('line14').innerHTML="";
		document.getElementById('line15').innerHTML="";	
		document.getElementById('line16').innerHTML="";
		document.getElementById('line17').innerHTML="";
		document.getElementById('line1').style.position = "relative";
		document.getElementById('line1').style.left = "0px";
		document.getElementById('line2').style.position = "relative";
		document.getElementById('line2').style.left = "0px";
		document.getElementById('line3').style.position = "relative";
		document.getElementById('line3').style.left = "0px";
		document.getElementById('line4').style.position = "relative";
		document.getElementById('line4').style.left = "0px";
		document.getElementById('line5').style.position = "relative";
		document.getElementById('line5').style.left = "0px";
		document.getElementById('line6').style.position = "relative";
		document.getElementById('line6').style.left = "0px";
		document.getElementById('line7').style.position = "relative";
		document.getElementById('line7').style.left = "0px";
		document.getElementById('line8').style.position = "relative";
		document.getElementById('line8').style.left = "0px";
		document.getElementById('line9').style.position = "relative";
		document.getElementById('line9').style.left = "0px";
		document.getElementById('line10').style.position = "relative";
		document.getElementById('line10').style.left = "0px";
		document.getElementById('line11').style.position = "relative";
		document.getElementById('line11').style.left = "0px";
		document.getElementById('line12').style.position = "relative";
		document.getElementById('line12').style.left = "0px";
		document.getElementById('line13').style.position = "relative";
		document.getElementById('line13').style.left = "0px";
		document.getElementById('line14').style.position = "relative";
		document.getElementById('line14').style.left = "0px";
		document.getElementById('line15').style.position = "relative";
		document.getElementById('line15').style.left = "0px";
		document.getElementById('line16').style.position = "relative";
		document.getElementById('line16').style.left = "0px";	
        document.getElementById('line17').style.position = "relative";
		document.getElementById('line17').style.left = "0px";

		document.getElementById('line1').style.position = "relative";
		document.getElementById('line1').style.left = "13px";
		document.getElementById('line1').innerHTML = "First Name: <input type=\'text\' name= \'fname\' id=\'fname\' disabled=\'disabled\'>";
		document.getElementById('fname').style.width = "200px";

		document.getElementById('line2').style.position = "relative";
		document.getElementById('line2').style.left = "14px";
		document.getElementById('line2').innerHTML = "Last Name: <input type=\'text\' name= \'lname\' id=\'lname\' disabled=\'disabled\'>";
		document.getElementById('lname').style.width = "200px";

		document.getElementById('line3').style.position = "relative";
		document.getElementById('line3').style.left = "5px";
		document.getElementById('line3').innerHTML = "Designation: <input type=\'text\' name= \'designation\' id=\'designation\' disabled=\'disabled\'>";
		document.getElementById('designation').style.width = "400px";

		document.getElementById('line4').style.position = "relative";
		document.getElementById('line4').style.left = "0px";
		document.getElementById('line4').innerHTML = "Organization: <input type=\'text\' name= \'org\' id=\'org\' disabled=\'disabled\' >";
		document.getElementById('org').style.width = "400px";
		
		document.getElementById('line5').style.position = "relative";
		document.getElementById('line5').style.left = "30px";
		document.getElementById('line5').innerHTML = "Address: <input type=\'text\' name= \'address1\' id=\'address1\' disabled=\'disabled\'>";
		document.getElementById('address1').style.width = "400px";

		document.getElementById('line6').style.position = "relative";
		document.getElementById('line6').style.left = "87px";
		document.getElementById('line6').innerHTML = "<input type=\'text\' name= \'address2\' id=\'address2\' disabled=\'disabled\'>";
		document.getElementById('address2').style.width = "400px";

		document.getElementById('line7').style.position = "relative";
		document.getElementById('line7').style.left = "55px";
		document.getElementById('line7').innerHTML = "City: <input type=\'text\' name= \'city\' id=\'city\' disabled=\'disabled\'>";
		document.getElementById('city').style.width = "200px";

		document.getElementById('line8').style.position = "relative";
		document.getElementById('line8').style.left = "59px";
		document.getElementById('line8').innerHTML = "Zip: <input type=\'text\' name= \'zip\' id=\'zip\' disabled=\'disabled\'>";
		document.getElementById('zip').style.width = "200px";

		document.getElementById('line9').style.position = "relative";
		document.getElementById('line9').style.left = "29px";
		document.getElementById('line9').innerHTML = "Country: <input type=\'text\' name= \'country\' id=\'country\' disabled=\'disabled\'>";
		document.getElementById('country').style.width = "200px";
		
		document.getElementById('line10').style.position = "relative";
		document.getElementById('line10').style.left = "31px";
		document.getElementById('line10').innerHTML = "Contact: <input type=\'text\' name= \'contact\' id=\'contact\' disabled=\'disabled\'>";
		document.getElementById('contact').style.width = "200px";

		document.getElementById('line11').style.position = "relative";
		document.getElementById('line11').style.left = "85px";
		document.getElementById('line11').innerHTML = "<input type=\'button\' name= \'edit_profile\' id=\'edit_profile\' onclick=\'edit()\' value=\'Edit Profile\'> <input type=\'button\' name= \'update_profile\' id=\'update_profile\' onclick=\'update()\' disabled=\'disabled\' value=\'Update Profile\'>";
		document.getElementById('contact').style.width = "200px";	

		/*var x = "<?php $host = 'localhost'; $sql_user = 'root'; $sql_pswd = '';	$db = 'tpmdc';	$con = mysql_connect($host,$sql_user,$sql_pswd); 		if(!$con) { die ('Could not connect: '.mysql_error()); } mysql_select_db($db,$con); $user = base64_decode($_COOKIE['logged_user']); $result = mysql_query('SELECT * FROM author_info WHERE email-id=\''.$user.'\';'); while($row = mysql_fetch_array($result)) { setrawcookie('fname',$row['fname'],time()+60,'/','','',1); } ?>";*/

	
		//extract profile date
		var xmlhttp;
		try
		{
			xmlhttp = new XMLHttpRequest();
		}
		catch(e)
		{
			try
			{
				xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
			}
			catch(e)
			{
				try
				{
					xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
				}
				catch(e)
				{
					alert("Please upgrade your browser or switch to another browser for editing your profile!");
					return false;
				}
			}
		}	
		var tab_user = document.getElementById('profile').value;	//user for whose the profile is open maybe different then the logged in user
		xmlhttp.onreadystatechange=function()
		{
			if(xmlhttp.readyState==4 && xmlhttp.status==200)
			{
				//alert(xmlhttp.responseText);
				if(xmlhttp.responseText == '0')
				{
					alert("Could not connect to server - try again!");
				}
				else if(xmlhttp.responseText == '1')
				{
					alert("Could not retrieve the profile!");
				}
				else
				{
					window.info = xmlhttp.responseText.split("!)@(");
					document.getElementById('fname').value = window.info[0];
					document.getElementById('lname').value = window.info[1];
					document.getElementById('designation').value = window.info[2];
					document.getElementById('org').value = window.info[3];
					document.getElementById('address1').value = window.info[4];
					document.getElementById('address2').value = window.info[5];
					document.getElementById('city').value = window.info[6];
					document.getElementById('zip').value = window.info[7];
					document.getElementById('country').value = window.info[8];
					document.getElementById('contact').value = window.info[9];
					xmlhttp.abort();
				}
			}
			//alert(xmlhttp.readyState+"  " + xmlhttp.status);
		}
		
		xmlhttp.open("POST","../php/get_user_info.php",true)
		xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
		xmlhttp.send('tab_user='+tab_user);
		
		
			
	}
	else
	{
		alert("Your browser doesn\'t support Level 1 DOM. Please upgrade your browser or use another one!");
	}
}

//on change of values entered in New Password and Confirm password
function change()
{
	document.getElementById('line5').innerHTML = "";
	var new_pswd = document.getElementById('new_pswd').value;
	var confirm_pswd = document.getElementById('confirm_pswd').value;
	if((new_pswd.length > 0) && (confirm_pswd.length > 0 ))
	{
		document.getElementById('save_changes').disabled = false;
	}
	else
	{
		document.getElementById('save_changes').disabled = true;
	}
}

//cancel password change
function cancel()
{
	document.getElementById('line5').innerHTML = "";
	upload_paper();
}
//save new password
function save()
{
	document.getElementById('line5').innerHTML = "";
	//check new password and current password same
	var current_pswd = document.getElementById('current_pswd').value;
	if(current_pswd == "" || current_pswd == null)
	{
		document.getElementById('line5').style.position = "relative";
		document.getElementById('line5').style.left = "120px";
		document.getElementById('line5').innerHTML = "Current Password field is empty!";
		return false;
	}
	var new_pswd = document.getElementById('new_pswd').value;
	var confirm_pswd = document.getElementById('confirm_pswd').value;
	if(new_pswd != confirm_pswd)
	{
		document.getElementById('line5').style.position = "relative";
		document.getElementById('line5').style.left = "120px";
		document.getElementById('line5').innerHTML = "Passwords do not match!";
		return false;
	}
	else
	{
		//check length of password > 8
		if(new_pswd.length < 8)
		{
			document.getElementById('line5').style.position = "relative";
			document.getElementById('line5').style.left = "120px";
			document.getElementById('line5').innerHTML = "Password is short!";
			return false;
		}
	}
	var pswd = document.getElementById('profile').value;	//read the user whose profile is open in the current tab
	var separator = "ℳ";
	pswd += separator;
	pswd += current_pswd;
	pswd += separator;
	pswd += new_pswd;
	pswd += separator;
	pswd += confirm_pswd;
	var xmlhttp;
	try
	{
		xmlhttp = new XMLHttpRequest();
	}
	catch(e)
	{
		try
		{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e)
		{
			try
			{
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch(e)
			{
				alert("Please upgrade your browser or switch to another browser for editing your profile!");
				return false;
			}
		}
	}
	
	xmlhttp.onreadystatechange=function()
	{
		if(xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			if(xmlhttp.responseText == '0')
			{
				alert("Could not connect to server - try again!");
				document.getElementById('line5').style.position = "relative";
				document.getElementById('line5').style.left = "120px";
				document.getElementById('line5').innerHTML = "Could not connect to server - try again!";
				xmlhttp.abort();
			}
			else if(xmlhttp.responseText == '1')
			{
				document.getElementById('line5').style.position = "relative";
				document.getElementById('line5').style.left = "120px";
				document.getElementById('line5').innerHTML = "Passwords do not match!";
				document.getElementById('new_pswd').value = "";
				document.getElementById('confirm_pswd').innerHTML = "";
				xmlhttp.abort();
			}
			else if(xmlhttp.responseText == '2')
			{
				document.getElementById('line5').style.position = "relative";
				document.getElementById('line5').style.left = "120px";
				document.getElementById('line5').innerHTML = "Password is short!";
				xmlhttp.abort();
			}
			else if(xmlhttp.responseText == '4')
			{
				//alert("Could not retrieve the profile!"); - No action
				xmlhttp.abort();
			}
			else if(xmlhttp.responseText == '8')
			{
				document.getElementById('line5').style.position = "relative";
				document.getElementById('line5').style.left = "120px";
				document.getElementById('line5').innerHTML = "Current password is not correct!";
				document.getElementById('current_pswd').value = "";
				xmlhttp.abort();
			}
			else if(xmlhttp.responseText == '16')
			{
				alert("Password could not be changed - try again!");
				document.getElementById('line5').style.position = "relative";
				document.getElementById('line5').style.left = "120px";
				document.getElementById('line5').innerHTML = "Password could not be changed - try again!";
				xmlhttp.abort();
			}
			else if(xmlhttp.responseText == '32')
			{
				document.getElementById('line5').style.position = "relative";
				document.getElementById('line5').style.left = "120px";
				document.getElementById('line5').innerHTML = "Password successfully changed!";
				document.getElementById('current_pswd').value = "";
				document.getElementById('new_pswd').value = "";
				document.getElementById('confirm_pswd').innerHTML = "";
				document.getElementById('save_changes').disabled = true;
				xmlhttp.abort();
				
			}
			
		}
		
	}

	xmlhttp.open("POST","../php/change_pswd.php",true)
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send('pswd='+pswd);	//pswd also contains info about current tab user

	
}
function change_password()
{
	document.getElementById("VP").style.textDecoration = "none";
	document.getElementById("VA").style.textDecoration = "none";
	document.getElementById("UP").style.textDecoration = "none";
	document.getElementById("VPa").style.textDecoration = "none";
	document.getElementById("CP").style.textDecoration = "underline";

	document.getElementById('line1').innerHTML="";
	document.getElementById('line2').innerHTML="";
	document.getElementById('line3').innerHTML="";
	document.getElementById('line4').innerHTML="";
	document.getElementById('line5').innerHTML="";
	document.getElementById('line6').innerHTML="";
	document.getElementById('line7').innerHTML="";
	document.getElementById('line8').innerHTML="";
	document.getElementById('line9').innerHTML="";
	document.getElementById('line10').innerHTML="";	
	document.getElementById('line11').innerHTML="";
	document.getElementById('line12').innerHTML="";
	document.getElementById('line13').innerHTML="";
	document.getElementById('line14').innerHTML="";
	document.getElementById('line15').innerHTML="";	
	document.getElementById('line16').innerHTML="";
	document.getElementById('line17').innerHTML="";
	document.getElementById('line1').style.position = "relative";
	document.getElementById('line1').style.left = "0px";
	document.getElementById('line2').style.position = "relative";
	document.getElementById('line2').style.left = "0px";
	document.getElementById('line3').style.position = "relative";
	document.getElementById('line3').style.left = "0px";
	document.getElementById('line4').style.position = "relative";
	document.getElementById('line4').style.left = "0px";
	document.getElementById('line5').style.position = "relative";
	document.getElementById('line5').style.left = "0px";
	document.getElementById('line6').style.position = "relative";
	document.getElementById('line6').style.left = "0px";
	document.getElementById('line7').style.position = "relative";
	document.getElementById('line7').style.left = "0px";
	document.getElementById('line8').style.position = "relative";
	document.getElementById('line8').style.left = "0px";
	document.getElementById('line9').style.position = "relative";
	document.getElementById('line9').style.left = "0px";
	document.getElementById('line10').style.position = "relative";
	document.getElementById('line10').style.left = "0px";
	document.getElementById('line11').style.position = "relative";
	document.getElementById('line11').style.left = "0px";
	document.getElementById('line12').style.position = "relative";
	document.getElementById('line12').style.left = "0px";
	document.getElementById('line13').style.position = "relative";
	document.getElementById('line13').style.left = "0px";
	document.getElementById('line14').style.position = "relative";
	document.getElementById('line14').style.left = "0px";
	document.getElementById('line15').style.position = "relative";
	document.getElementById('line15').style.left = "0px";
	document.getElementById('line16').style.position = "relative";
	document.getElementById('line16').style.left = "0px";	
    document.getElementById('line17').style.position = "relative";
	document.getElementById('line17').style.left = "0px";
	
	document.getElementById('line1').style.position = "relative";
	document.getElementById('line1').style.left = "2px";
	document.getElementById('line1').innerHTML = "Current Password: <input type=\'password\' name= \'current_pswd\' id=\'current_pswd\' >";
	document.getElementById('current_pswd').style.width = "200px";

	document.getElementById('line2').style.position = "relative";
	document.getElementById('line2').style.left = "22px";
	document.getElementById('line2').innerHTML = "New Password: <input type=\'password\' name= \'new_pswd\' id=\'new_pswd\' onchange=\'change()\' onblur=\'change()\' >";
	document.getElementById('new_pswd').style.width = "200px";

	document.getElementById('line3').style.position = "relative";
	document.getElementById('line3').style.left = "0px";
	document.getElementById('line3').innerHTML = "Confirm Password: <input type=\'password\' name= \'confirm_pswd\' id=\'confirm_pswd\' onchange=\'change()\'  onblur=\'change()\' >";
	document.getElementById('confirm_pswd').style.width = "200px";
	
	document.getElementById('line4').style.position = "relative";
	document.getElementById('line4').style.left = "117px";
	document.getElementById('line4').innerHTML = "<input type=\'button\' name= \'save_changes\' id=\'save_changes\' onclick=\'save()\' value=\'Save Changes\' disabled=\'disabled\' onmouseover=\'change()\' > <input type=\'button\' name= \'cancel_change\' id=\'cancel_change\' onclick=\'cancel()\' value=\'Cancel\'>";
	
}


function downloadPaper(a)
{
	//check if logged user and tabbed user are same
	var tab_user = document.getElementById('profile').value;	//user for whose the profile is open maybe different then the logged in user
	var xmlhttp;
	try
	{
		xmlhttp = new XMLHttpRequest();
	}
	catch(e)
	{
		try
		{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e)
		{
			try
			{
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch(e)
			{
				alert("Please upgrade your browser or switch to another browser for editing your profile!");
				return false;
			}
		}
	}
	if(a.name == "downloadPaper1")
	{
		sendId=document.getElementById('paperId1').value;
	}
	else if(a.name == "downloadPaper2")
	{
		sendId=document.getElementById('paperId2').value;
	}
	else if(a.name == "downloadPaper3")
	{
		sendId=document.getElementById('paperId3').value;
	}
	xmlhttp.onreadystatechange=function()
	{
		if(xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			if(xmlhttp.responseText == tab_user)
			{
				window.open("../php/downloadPaper.php?id="+sendId,"_blank","",false);	//download
			}
			else
			{
				window.location.reload();	//refresh page so that tab_user and logged_user are same
			}
		}
	}
	xmlhttp.open("POST","../php/logged_user.php",true)
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send();
	
	/*xmlhttp.open("POST","../php/downloadPaper.php",true)
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send('tab_user='+tab_user+'&id='+sendId);*/
	
	
	
}


function hidePaperInfo(a)
{
	if(a.name == "hidePaperInfo1")
	{
		//change the position of bottom div accordingly
		var top = document.getElementById('footer').offsetTop;
		var increase = document.getElementById('line2').offsetHeight;
		top = top - increase + 50;
		document.getElementById('footer').style.top = top+"px";

		document.getElementById('line2').innerHTML = "";
	}
	else if(a.name == "hidePaperInfo2")
	{
		var top = document.getElementById('footer').offsetTop;
		var increase = document.getElementById('line4').offsetHeight;
		top = top - increase + 30;
		document.getElementById('footer').style.top = top+"px";
		document.getElementById('line4').innerHTML = "";
	}
	else if(a.name == "hidePaperInfo3")
	{
		var top = document.getElementById('footer').offsetTop;
		var increase = document.getElementById('line6').offsetHeight;
		top = top - increase + 20;
		document.getElementById('footer').style.top = top+"px";
		document.getElementById('line6').innerHTML = "";
	}
}

function showPaperInfo(a)
{
	var tab_user = document.getElementById('profile').value;	//user for whose the profile is open maybe different then the logged in user
	window.info="";
	var xmlhttp;
	try
	{
		xmlhttp = new XMLHttpRequest();
	}
	catch(e)
	{
		try
		{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e)
		{
			try
			{
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch(e)
			{
				alert("Please upgrade your browser or switch to another browser for editing your profile!");
				return false;
			}
		}
	}
	if(a.name == "showPaper1")
	{
		sendId=document.getElementById('paperId1').value;
	}
	else if(a.name == "showPaper2")
	{
		sendId=document.getElementById('paperId2').value;
	}
	else if(a.name == "showPaper3")
	{
		sendId=document.getElementById('paperId3').value;
	}
	window.info="";
	xmlhttp.onreadystatechange=function()
	{
		if(xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			
			if(xmlhttp.responseText == '0')
			{
				alert("Could not connect to the server - try again!");
			}
			else if(xmlhttp.responseText == '1')
			{
				alert("Could not retrieve the information - try again!");
			}
			else
			{
				//alert(xmlhttp.responseText);
				window.info = xmlhttp.responseText.split("ℳ");
				if(a.name == "showPaper1")
				{
					//sendId=document.getElementById('paperId1').value;
					document.getElementById('line2').innerHTML = "<span id='seePaperId1'></span><br><span id='seePaperTitle1'></span><br><span id='seePaperKeywords1'></span><br><span id='seePaperOtherAuthors11'></span><br><span id='seePaperOtherAuthors12'></span><br><span id='seePaperOtherAuthors13'></span><br><span id='seePaperOtherAuthors14'></span><br><span id='seePaperOtherAuthors15'></span><br><span id='seePaperDate1'></span><br><input type='button' name='hidePaperInfo1' id='hidePaperInfo1' value='Hide Info' onclick='hidePaperInfo(this)'>";
					document.getElementById('seePaperId1').innerHTML = "<span style='font-weight:bold;'>Paper Id:</span> "+window.info[0];
					document.getElementById('seePaperTitle1').innerHTML = "<span style='font-weight:bold;'>Title:</span> "+window.info[1];
					document.getElementById('seePaperKeywords1').innerHTML = "<span style='font-weight:bold;'>Keywords:</span> "+window.info[2];
					document.getElementById('seePaperOtherAuthors11').innerHTML = "<span style='font-weight:bold;'>Other Authors:</span> "+window.info[3];
					document.getElementById('seePaperOtherAuthors12').innerHTML = "<span style='position:relative;left:50px;font-weight:bold;'>(if any):</span><span style='position:relative;left:50px;'> "+window.info[4]+"</span>";
					document.getElementById('seePaperOtherAuthors13').innerHTML = "<span style='position:relative;left:100px;font-weight:bold;'>:</span><span style='position:relative;left:100px;'> "+window.info[5]+"</span>";
					document.getElementById('seePaperOtherAuthors14').innerHTML = "<span style='position:relative;left:100px;font-weight:bold;'>:</span><span style='position:relative;left:100px;'> "+window.info[6]+"</span>";
					document.getElementById('seePaperOtherAuthors15').innerHTML = "<span style='position:relative;left:100px;font-weight:bold;'>:</span><span style='position:relative;left:100px;'> "+window.info[7]+"</span>";
					document.getElementById('seePaperDate1').innerHTML = "<span style='font-weight:bold;'>Date Uploaded:</span> "+window.info[8];
					
					//change the position of bottom div
					var top = document.getElementById('footer').offsetTop;
					var increase = document.getElementById('line2').offsetHeight;
					top = top + increase -50;
					document.getElementById('footer').style.top = top+"px";
					//alert(top);
				}
				else if(a.name == "showPaper2")
				{
					//sendId=document.getElementById('paperId2').value;
					document.getElementById('line4').innerHTML = "<span id='seePaperId2'></span><br><span id='seePaperTitle2'></span><br><span id='seePaperKeywords2'></span><br><span id='seePaperOtherAuthors21'></span><br><span id='seePaperOtherAuthors22'></span><br><span id='seePaperOtherAuthors23'></span><br><span id='seePaperOtherAuthors24'></span><br><span id='seePaperOtherAuthors25'></span><br><span id='seePaperDate2'></span><br><input type='button' name='hidePaperInfo2' id='hidePaperInfo2' value='Hide Info' onclick='hidePaperInfo(this)'>";
					document.getElementById('seePaperId2').innerHTML = "<span style='font-weight:bold;'>Paper Id:</span> "+window.info[0];
					document.getElementById('seePaperTitle2').innerHTML = "<span style='font-weight:bold;'>Title:</span> "+window.info[1];
					document.getElementById('seePaperKeywords2').innerHTML = "<span style='font-weight:bold;'>Keywords:</span> "+window.info[2];
					document.getElementById('seePaperOtherAuthors21').innerHTML = "<span style='font-weight:bold;'>Other Authors:</span> "+window.info[3];
					document.getElementById('seePaperOtherAuthors22').innerHTML = "<span style='position:relative;left:50px;font-weight:bold;'>(if any):</span><span style='position:relative;left:50px;'> "+window.info[4]+"</span>";
					document.getElementById('seePaperOtherAuthors23').innerHTML = "<span style='position:relative;left:100px;font-weight:bold;'>:</span><span style='position:relative;left:100px;'> "+window.info[5]+"</span>";
					document.getElementById('seePaperOtherAuthors24').innerHTML = "<span style='position:relative;left:100px;font-weight:bold;'>:</span><span style='position:relative;left:100px;'> "+window.info[6]+"</span>";
					document.getElementById('seePaperOtherAuthors25').innerHTML = "<span style='position:relative;left:100px;font-weight:bold;'>:</span><span style='position:relative;left:100px;'> "+window.info[7]+"</span>";
					document.getElementById('seePaperDate2').innerHTML = "<span style='font-weight:bold;'>Date Uploaded:</span> "+window.info[8];
					
					//change the position of bottom div
					var top = document.getElementById('footer').offsetTop;
					var increase = document.getElementById('line4').offsetHeight;
					top = top + increase - 30;
					document.getElementById('footer').style.top = top+"px";
				}
				else if(a.name == "showPaper3")
				{
					//sendId=document.getElementById('paperId3').value;
					document.getElementById('line6').innerHTML = "<span id='seePaperId3'></span><br><span id='seePaperTitle3'></span><br><span id='seePaperKeywords3'></span><br><span id='seePaperOtherAuthors31'></span><br><span id='seePaperOtherAuthors32'></span><br><span id='seePaperOtherAuthors33'></span><br><span id='seePaperOtherAuthors34'></span><br><span id='seePaperOtherAuthors35'></span><br><span id='seePaperDate3'></span><br><input type='button' name='hidePaperInfo3' id='hidePaperInfo3' value='Hide Info' onclick='hidePaperInfo(this)'>";
					document.getElementById('seePaperId3').innerHTML = "<span style='font-weight:bold;'>Paper Id:</span> "+window.info[0];
					document.getElementById('seePaperTitle3').innerHTML = "<span style='font-weight:bold;'>Title:</span> "+window.info[1];
					document.getElementById('seePaperKeywords3').innerHTML = "<span style='font-weight:bold;'>Keywords:</span> "+window.info[2];
					document.getElementById('seePaperOtherAuthors31').innerHTML = "<span style='font-weight:bold;'>Other Authors:</span> "+window.info[3];
					document.getElementById('seePaperOtherAuthors32').innerHTML = "<span style='position:relative;left:50px;font-weight:bold;'>(if any):</span><span style='position:relative;left:50px;'> "+window.info[4]+"</span>";
					document.getElementById('seePaperOtherAuthors33').innerHTML = "<span style='position:relative;left:100px;font-weight:bold;'>:</span><span style='position:relative;left:100px;'> "+window.info[5]+"</span>";
					document.getElementById('seePaperOtherAuthors34').innerHTML = "<span style='position:relative;left:100px;font-weight:bold;'>:</span><span style='position:relative;left:100px;'> "+window.info[6]+"</span>";
					document.getElementById('seePaperOtherAuthors35').innerHTML = "<span style='position:relative;left:100px;font-weight:bold;'>:</span><span style='position:relative;left:100px;'> "+window.info[7]+"</span>";
					document.getElementById('seePaperDate3').innerHTML = "<span style='font-weight:bold;'>Date Uploaded:</span> "+window.info[8];
					
					//change the position of bottom div
					var top = document.getElementById('footer').offsetTop;
					var increase = document.getElementById('line6').offsetHeight;
					top = top + increase - 20;
					document.getElementById('footer').style.top = top+"px";
				}
			}
		}
	}
	xmlhttp.open("POST","../php/get_paper_info.php",true)
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send('tab_user='+tab_user+'&id='+sendId);
	
}

function view_paper()
{
	document.getElementById("VP").style.textDecoration = "none";
	document.getElementById("VA").style.textDecoration = "none";
	document.getElementById("UP").style.textDecoration = "none";
	document.getElementById("VPa").style.textDecoration = "underline";
	document.getElementById("CP").style.textDecoration = "none";

	document.getElementById('line1').innerHTML="";
	document.getElementById('line2').innerHTML="";
	document.getElementById('line3').innerHTML="";
	document.getElementById('line4').innerHTML="";
	document.getElementById('line5').innerHTML="";
	document.getElementById('line6').innerHTML="";
	document.getElementById('line7').innerHTML="";
	document.getElementById('line8').innerHTML="";
	document.getElementById('line9').innerHTML="";
	document.getElementById('line10').innerHTML="";	
	document.getElementById('line11').innerHTML="";
	document.getElementById('line12').innerHTML="";
	document.getElementById('line13').innerHTML="";
	document.getElementById('line14').innerHTML="";
	document.getElementById('line15').innerHTML="";	
	document.getElementById('line16').innerHTML="";
	document.getElementById('line17').innerHTML="";
	document.getElementById('line1').style.position = "relative";
	document.getElementById('line1').style.left = "0px";
	document.getElementById('line2').style.position = "relative";
	document.getElementById('line2').style.left = "0px";
	document.getElementById('line3').style.position = "relative";
	document.getElementById('line3').style.left = "0px";
	document.getElementById('line4').style.position = "relative";
	document.getElementById('line4').style.left = "0px";
	document.getElementById('line5').style.position = "relative";
	document.getElementById('line5').style.left = "0px";
	document.getElementById('line6').style.position = "relative";
	document.getElementById('line6').style.left = "0px";
	document.getElementById('line7').style.position = "relative";
	document.getElementById('line7').style.left = "0px";
	document.getElementById('line8').style.position = "relative";
	document.getElementById('line8').style.left = "0px";
	document.getElementById('line9').style.position = "relative";
	document.getElementById('line9').style.left = "0px";
	document.getElementById('line10').style.position = "relative";
	document.getElementById('line10').style.left = "0px";
	document.getElementById('line11').style.position = "relative";
	document.getElementById('line11').style.left = "0px";
	document.getElementById('line12').style.position = "relative";
	document.getElementById('line12').style.left = "0px";
	document.getElementById('line13').style.position = "relative";
	document.getElementById('line13').style.left = "0px";
	document.getElementById('line14').style.position = "relative";
	document.getElementById('line14').style.left = "0px";
	document.getElementById('line15').style.position = "relative";
	document.getElementById('line15').style.left = "0px";
	document.getElementById('line16').style.position = "relative";
	document.getElementById('line16').style.left = "0px";	
    document.getElementById('line17').style.position = "relative";
	document.getElementById('line17').style.left = "0px";
	
	var tab_user = document.getElementById('profile').value;	//user for whose the profile is open maybe different then the logged in user
	window.info="";
	var xmlhttp;
	try
	{
		xmlhttp = new XMLHttpRequest();
	}
	catch(e)
	{
		try
		{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e)
		{
			try
			{
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch(e)
			{
				alert("Please upgrade your browser or switch to another browser for editing your profile!");
				return false;
			}
		}
	}
	xmlhttp.onreadystatechange=function()
	{
		if(xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			//document.getElementById('line1').innerHTML=xmlhttp.responseText;
			//alert(xmlhttp.responseText);
			if(xmlhttp.responseText == '0')
			{
				alert("Could not connect to the server - Try Again!");
				upload_paper();
			}
			else if(xmlhttp.responseText == '1')
			{
				alert("No paper has been uploaded by you!");
				document.getElementById('line1').innerHTML="You haven't uploaded any paper!";
				
			}
			else
			{
				//alert(xmlhttp.responseText);
				//window.info = xmlhttp.responseText.split("ℳ");
				window.info = xmlhttp.responseText;
				if(window.info == "" || window.info == null)
				{
					alert("No paper has been uploaded by you!");
					document.getElementById('line1').innerHTML="You haven't uploaded any paper!";
				}
				else
				{
					//document.getElementById("line11").innerHTML=xmlhttp.responseText;
					window.info = xmlhttp.responseText.split("ℳ");
					var no = (xmlhttp.responseText.split("ℳ").length -1)/2;	//no of paper uploaded
					//alert(no);
					//alert(window.info);
					//alert(no);
					var i;
					for(i=1; i<= no; i++)
					{
						document.getElementById('line'+(2*i-1)).innerHTML="<span id='paperno"+i+"'></span><span id='paperTitle"+i+"'></span><span id='paperOptions"+i+"'></span><input type='hidden' id='paperId"+i+"'>";
					}
					if(document.getElementById('paperno1'))
					{
						document.getElementById('paperno1').innerHTML = " 1. ";
						document.getElementById('paperTitle1').innerHTML = " "+window.info[1]+" ";
						document.getElementById('paperOptions1').innerHTML = " <input type='button' name='downloadPaper1' id='downloadPaper1' value='Download' onclick='downloadPaper(this)'>&nbsp;<input type='button' name='showPaper1' id='showPaper1' value='Show Info' onclick='showPaperInfo(this)'>";
						document.getElementById('paperId1').value = window.info[0];
					}
					if(document.getElementById('paperno2'))
					{
						document.getElementById('paperno2').innerHTML = " 2. ";
						document.getElementById('paperTitle2').innerHTML = " "+window.info[3]+" ";
						document.getElementById('paperOptions2').innerHTML = " <input type='button' name='downloadPaper2' id='downloadPaper2' value='Download' onclick='downloadPaper(this)'>&nbsp;<input type='button' name='showPaper2' id='showPaper2' value='Show Info' onclick='showPaperInfo(this)'>";
						document.getElementById('paperId2').value = window.info[2];
					}
					if(document.getElementById('paperno3'))
					{
						document.getElementById('paperno3').innerHTML = " 3. ";
						document.getElementById('paperTitle3').innerHTML = " "+window.info[5]+" ";
						document.getElementById('paperOptions3').innerHTML = " <input type='button' name='downloadPaper3' id='downloadPaper3' value='Download' onclick='downloadPaper(this)'>&nbsp;<input type='button' name='showPaper3' id='showPaper3' value='Show Info' onclick='showPaperInfo(this)'>";
						document.getElementById('paperId3').value = window.info[4];
					}
					
				}
				
			}
		}
	}
	xmlhttp.open("POST","../php/get_papers.php",true)
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send('tab_user='+tab_user);
}

function downloadFile()
{
	//check if logged user and tabbed user are same
	var tab_user = document.getElementById('profile').value;	//user for whose the profile is open maybe different then the logged in user
	var xmlhttp;
	try
	{
		xmlhttp = new XMLHttpRequest();
	}
	catch(e)
	{
		try
		{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e)
		{
			try
			{
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch(e)
			{
				alert("Please upgrade your browser or switch to another browser for editing your profile!");
				return false;
			}
		}
	}
	xmlhttp.onreadystatechange=function()
	{
		if(xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			if(xmlhttp.responseText == tab_user)
			{
				window.open("../php/download.php","_blank","",false);	//download
			}
			else
			{
				window.location.reload();	//refresh page so that tab_user and logged_user are same
			}
		}
	}
	xmlhttp.open("POST","../php/logged_user.php",true)
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send();
	
	
}

function view_abstract()
{
	document.getElementById("VP").style.textDecoration = "none";
	document.getElementById("VA").style.textDecoration = "underline";
	document.getElementById("UP").style.textDecoration = "none";
	document.getElementById("VPa").style.textDecoration = "none";
	document.getElementById("CP").style.textDecoration = "none";

	document.getElementById('line1').innerHTML="";
	document.getElementById('line2').innerHTML="";
	document.getElementById('line3').innerHTML="";
	document.getElementById('line4').innerHTML="";
	document.getElementById('line5').innerHTML="";
	document.getElementById('line6').innerHTML="";
	document.getElementById('line7').innerHTML="";
	document.getElementById('line8').innerHTML="";
	document.getElementById('line9').innerHTML="";
	document.getElementById('line10').innerHTML="";	
	document.getElementById('line11').innerHTML="";
	document.getElementById('line12').innerHTML="";
	document.getElementById('line13').innerHTML="";
	document.getElementById('line14').innerHTML="";
	document.getElementById('line15').innerHTML="";	
	document.getElementById('line16').innerHTML="";
	document.getElementById('line17').innerHTML="";
	document.getElementById('line1').style.position = "relative";
	document.getElementById('line1').style.left = "0px";
	document.getElementById('line2').style.position = "relative";
	document.getElementById('line2').style.left = "0px";
	document.getElementById('line3').style.position = "relative";
	document.getElementById('line3').style.left = "0px";
	document.getElementById('line4').style.position = "relative";
	document.getElementById('line4').style.left = "0px";
	document.getElementById('line5').style.position = "relative";
	document.getElementById('line5').style.left = "0px";
	document.getElementById('line6').style.position = "relative";
	document.getElementById('line6').style.left = "0px";
	document.getElementById('line7').style.position = "relative";
	document.getElementById('line7').style.left = "0px";
	document.getElementById('line8').style.position = "relative";
	document.getElementById('line8').style.left = "0px";
	document.getElementById('line9').style.position = "relative";
	document.getElementById('line9').style.left = "0px";
	document.getElementById('line10').style.position = "relative";
	document.getElementById('line10').style.left = "0px";
	document.getElementById('line11').style.position = "relative";
	document.getElementById('line11').style.left = "0px";
	document.getElementById('line12').style.position = "relative";
	document.getElementById('line12').style.left = "0px";
	document.getElementById('line13').style.position = "relative";
	document.getElementById('line13').style.left = "0px";
	document.getElementById('line14').style.position = "relative";
	document.getElementById('line14').style.left = "0px";
	document.getElementById('line15').style.position = "relative";
	document.getElementById('line15').style.left = "0px";
	document.getElementById('line16').style.position = "relative";
    document.getElementById('line16').style.left = "0px";	
    document.getElementById('line17').style.position = "relative";
	document.getElementById('line17').style.left = "0px";

	var xmlhttp;
	try
	{
		xmlhttp = new XMLHttpRequest();
	}
	catch(e)
	{
		try
		{
			xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
		}
		catch(e)
		{
			try
			{
				xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
			}
			catch(e)
			{
				alert("Please upgrade your browser or switch to another browser for editing your profile!");
				return false;
			}
		}
	}
	
	var tab_user = document.getElementById('profile').value;	//user for whose the profile is open maybe different then the logged in user
	xmlhttp.onreadystatechange=function()
	{
		if(xmlhttp.readyState==4 && xmlhttp.status==200)
		{
			if(xmlhttp.responseText == '0')
			{
				document.getElementById('line1').innerHTML = "<span id='abstract_id_key'>Abstract ID: </span><span id='abstract_id_value'></span>";
				document.getElementById('line2').innerHTML = "<span id='abstract_title_key'>Title: </span><span id='abstract_title_value'></span>";
				document.getElementById('line3').innerHTML = "<span id='name_key'>Name: </span><span id='name_value'></span>";
				document.getElementById('line4').innerHTML = "<span id='keywords_key'>Keywords: </span><span id='keywords_value'></span>";
				document.getElementById('line5').innerHTML = "<span id='date_key'>Date uploaded: </span><span id='date_value'></span>";
				document.getElementById('line6').innerHTML = "<span id='category_key'>Abstract Category: </span><span id='category_value'></span>";
				
				alert("Could not connect to server - try again!");
				document.getElementById('line7').style.position = "relative";
				document.getElementById('line7').style.left = "120px";
				document.getElementById('line7').innerHTML = "Could not connect to server - try again!";
				xmlhttp.abort();
			}
			else if(xmlhttp.responseText == '1' || xmlhttp.responseText == '4')
			{
				document.getElementById('line1').innerHTML = "<span id='abstract_id_key'>Abstract ID: </span><span id='abstract_id_value'></span>";
				document.getElementById('line2').innerHTML = "<span id='abstract_title_key'>Title: </span><span id='abstract_title_value'></span>";
				document.getElementById('line3').innerHTML = "<span id='name_key'>Name: </span><span id='name_value'></span>";
				document.getElementById('line4').innerHTML = "<span id='keywords_key'>Keywords: </span><span id='keywords_value'></span>";
				document.getElementById('line5').innerHTML = "<span id='date_key'>Date uploaded: </span><span id='date_value'></span>";
				document.getElementById('line6').innerHTML = "<span id='category_key'>Abstract Category: </span><span id='category_value'></span>";
				document.getElementById('line7').style.position = "relative";
				document.getElementById('line7').style.left = "120px";
				document.getElementById('line7').innerHTML = "Sorry! We could not retrieve the results";
				xmlhttp.abort();
			}
			else if(xmlhttp.responseText == '2')
			{
				document.getElementById('line1').innerHTML = "<span id='abstract_id_key'>Abstract ID: </span><span id='abstract_id_value'></span>";
				document.getElementById('line2').innerHTML = "<span id='abstract_title_key'>Title: </span><span id='abstract_title_value'></span>";
				document.getElementById('line3').innerHTML = "<span id='name_key'>Name: </span><span id='name_value'></span>";
				document.getElementById('line4').innerHTML = "<span id='keywords_key'>Keywords: </span><span id='keywords_value'></span>";
				document.getElementById('line5').innerHTML = "<span id='date_key'>Date uploaded: </span><span id='date_value'></span>";
				document.getElementById('line6').innerHTML = "<span id='category_key'>Abstract Category: </span><span id='category_value'></span>";
				document.getElementById('line7').style.position = "relative";
				document.getElementById('line7').style.left = "120px";
				document.getElementById('line7').innerHTML = "Sorry! We could not retrieve your file";
				xmlhttp.abort();
			}
			
			else
			{
				window.info = xmlhttp.responseText.split("ℳ");
				
				document.getElementById('line1').innerHTML = "<span id='abstract_id_key'>Abstract ID: </span><span id='abstract_id_value'></span>";
				document.getElementById('line2').innerHTML = "<span id='abstract_title_key'>Title: </span><span id='abstract_title_value'></span>";
				document.getElementById('line3').innerHTML = "<span id='name_key'>Name: </span><span id='name_value'></span>";
				document.getElementById('line4').innerHTML = "<span id='keywords_key'>Keywords: </span><span id='keywords_value'></span>";
				document.getElementById('line5').innerHTML = "<span id='date_key'>Date uploaded: </span><span id='date_value'></span>";
				document.getElementById('line6').innerHTML = "<span id='category_key'>Abstract Category: </span><span id='category_value'></span>";
				document.getElementById('line7').innerHTML = "<span id='other_author1_key'>Other Authors: </span><span id='other_author1_value'></span>";
				document.getElementById('line8').innerHTML = "<span id='other_author2_key'></span><span id='other_author2_value'></span>";
				document.getElementById('line9').innerHTML = "<span id='other_author3_key'></span><span id='other_author3_value'></span>";
				document.getElementById('line10').innerHTML = "<span id='other_author4_key'></span><span id='other_author4_value'></span>";
				document.getElementById('line11').innerHTML = "<span id='other_author5_key'></span><span id='other_author5_value'></span>";
				document.getElementById('line12').innerHTML = "<input type='button' id='downloadAbstract' name='downloadAbstract' value='Download Abstract' onclick='downloadFile()'>";
				document.getElementById('downloadAbstract').style.position = "relative";
				document.getElementById('downloadAbstract').style.left = "136px";
				

				document.getElementById('abstract_id_value').innerHTML = window.info[0];
				document.getElementById('abstract_title_value').innerHTML = window.info[1];
				document.getElementById('name_value').innerHTML = window.info[2]+" "+window.info[3];
				document.getElementById('keywords_value').innerHTML = window.info[4];
				document.getElementById('date_value').innerHTML = window.info[5];
				document.getElementById('category_value').innerHTML = window.info[6];

				var i;
				for(i=7; i<=21; i++)
				{
					if(!(window.info[i]))	//if value of the index is not set
					{
						window.info[i] = " ";
					}
				}
				document.getElementById('other_author1_value').innerHTML = window.info[7]+" "+window.info[8]+" ("+window.info[9]+")";
				//document.getElementById('other_author2_value').innerHTML = " ";
				document.getElementById('other_author2_value').innerHTML = window.info[10]+" "+window.info[11]+" ("+window.info[12]+")";
				//document.getElementById('other_author3_value').innerHTML = " ";
				document.getElementById('other_author3_value').innerHTML = window.info[13]+" "+window.info[14]+" ("+window.info[15]+")";
				//document.getElementById('other_author4_value').innerHTML = " ";
				document.getElementById('other_author4_value').innerHTML = window.info[16]+" "+window.info[17]+" ("+window.info[18]+")";
				//document.getElementById('other_author5_value').innerHTML = " ";
				document.getElementById('other_author5_value').innerHTML = window.info[19]+" "+window.info[20]+" ("+window.info[21]+")";
				
				
				//css
				//bold
				document.getElementById('abstract_id_key').style.fontWeight ="bold";
				document.getElementById('abstract_title_key').style.fontWeight ="bold";
				document.getElementById('name_key').style.fontWeight ="bold";
				document.getElementById('keywords_key').style.fontWeight ="bold";
				document.getElementById('date_key').style.fontWeight ="bold";
				document.getElementById('category_key').style.fontWeight ="bold";
				document.getElementById('other_author1_key').style.fontWeight ="bold";
				document.getElementById('other_author2_key').style.fontWeight ="bold";
				document.getElementById('other_author3_key').style.fontWeight ="bold";
				document.getElementById('other_author4_key').style.fontWeight ="bold";
				document.getElementById('other_author5_key').style.fontWeight ="bold";
				//positoning of key
				document.getElementById('abstract_id_key').style.position ="relative";
				document.getElementById('abstract_title_key').style.position ="relative";
				document.getElementById('name_key').style.position ="relative";
				document.getElementById('keywords_key').style.position ="relative";
				document.getElementById('date_key').style.position ="relative";
				document.getElementById('category_key').style.position ="relative";
				document.getElementById('other_author1_key').style.position ="relative";
				document.getElementById('other_author2_key').style.position ="relative";
				document.getElementById('other_author3_key').style.position ="relative";
				document.getElementById('other_author4_key').style.position ="relative";
				document.getElementById('other_author5_key').style.position ="relative";
				
				document.getElementById('abstract_id_key').style.left ="47px";
				document.getElementById('abstract_title_key').style.left ="97px";
				document.getElementById('name_key').style.left ="88px";
				document.getElementById('keywords_key').style.left ="58px";
				document.getElementById('date_key').style.left ="24px";
				document.getElementById('category_key').style.left ="0px";
				document.getElementById('other_author1_key').style.left ="26px";
				document.getElementById('other_author2_key').style.left ="26px";
				document.getElementById('other_author3_key').style.left ="26px";
				document.getElementById('other_author4_key').style.left ="26px";
				document.getElementById('other_author5_key').style.left ="26px";
				//positoning of values
				document.getElementById('abstract_id_value').style.position ="relative";
				document.getElementById('abstract_title_value').style.position ="relative";
				document.getElementById('name_value').style.position ="relative";
				document.getElementById('keywords_value').style.position ="relative";
				document.getElementById('date_value').style.position ="relative";
				document.getElementById('category_value').style.position ="relative";
				document.getElementById('other_author1_value').style.position ="relative";
				document.getElementById('other_author2_value').style.position ="relative";
				document.getElementById('other_author3_value').style.position ="relative";
				document.getElementById('other_author4_value').style.position ="relative";
				document.getElementById('other_author5_value').style.position ="relative";
				
				document.getElementById('abstract_id_value').style.left ="47px";
				document.getElementById('abstract_title_value').style.left ="97px";
				document.getElementById('name_value').style.left ="88px";
				document.getElementById('keywords_value').style.left ="58px";
				document.getElementById('date_value').style.left ="24px";
				document.getElementById('category_value').style.left ="0px";
				document.getElementById('other_author1_value').style.left ="26px";
				document.getElementById('other_author2_value').style.left ="136px";
				document.getElementById('other_author3_value').style.left ="136px";
				document.getElementById('other_author4_value').style.left ="136px";
				document.getElementById('other_author5_value').style.left ="136px";
			}
			
		}
		
	}

	xmlhttp.open("POST","../php/get_abstract_info.php",true)
	xmlhttp.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlhttp.send('tab_user='+tab_user);
	
}
