window.author_count=2;
window.id_check = false;
window.isValid = true;
window.onload=load_page()
{
	document.getElementById("submit").disabled=false;
	window.author_count=2;
}
//trim() removes leading and trailing spaces from the string
function trim(s)
{
	s = s.replace(/(^\s*)|(\s*$)/gi,"");
	s = s.replace(/[ ]{2,}/gi," ");
	s = s.replace(/\n /,"\n");
	return s;
}
function author()
{
	if(window.author_count <= 5)
	{
		window.author_count = window.author_count+1;
		document.getElementById("label_author"+window.author_count).innerHTML="Author "+window.author_count;
		document.getElementById("name"+window.author_count).innerHTML="<span style=\"color:#FFFFFF;font-size:18px;\"></span><b>Personal Information</b></span><br><hr style=\"width:900px;\"/><span style=\"margin-left:11px;\">Last Name: </span><input type=\"text\" name=\"lname"+window.author_count+"\"style=\"width:250px;\"/>&nbsp;<span style=\"margin-left:121px;\">First Name: </span><input type=\"text\" name=\"fname"+window.author_count+"\" style=\"width:250px;\" />";
		document.getElementById("contact_info"+window.author_count).innerHTML="<br><span style=\"margin-left:26px\">Email Id: </span><input type=\"text\" name=\"email"+window.author_count+"\" style=\"width:250px;\" /><br>&nbsp;";
		
		if(window.author_count == 5)
			document.getElementById("add").innerHTML="";
	}
	else
		document.getElementById("add").innerHTML="";
	
}
//validate the form before submission
function validate()
{
	window.isValid = true;
	var x = new Array();
	var count = 0;
	x[0] = document.forms["abstract_info"]["lname1"].value;
	x[1] = document.forms["abstract_info"]["fname1"].value;
	x[2] = document.forms["abstract_info"]["organization"].value;
	x[3] = document.forms["abstract_info"]["city"].value;
	x[4] = document.forms["abstract_info"]["country"].value;
	x[5] = document.forms["abstract_info"]["email1"].value;
	x[6] = document.forms["abstract_info"]["title"].value;
	//checking that required fields are not empty
	while(1)
	{
		if (trim(x[count])== "" || trim(x[count]) == null)
		{
			alert("Fill all the compulsory fields!");
			window.isValid = false;
			return false;
		}
		if(count == 6)
			break;
		count=count+1;
	}

	//validate email-id
	check_id();
	if(window.id_check == false)
		window.isValid = false;
	//if(window.id_check == false)
		//alert("Seems to be an invalid email-id!");

	//check if abstract has been uploaded or pasted
	var text_content = document.forms["abstract_info"]["abstract_text"].value;
	var filename = document.forms["abstract_info"]["abstract_file"].value;
	if( (trim(text_content) == null) && filename == "" )
	{
		alert("Abstract missing!");
		window.isValid = false;
		return false;
	}
	if(trim(text_content) == "" && filename == "" )
	{
		alert("Abstract missing");
		window.isValid = false;
		return false;
	}
	if(window.isValid)
	{
		//disable the submit button
		document.getElementById("submit").disabled=true;
		//change the value of the hidden inputs to 1 if the corresponding authors have some value
		/*var count = 2;
		for(count = 2; count <= 5; count++)
		{
			if(trim(document.forms["abstract_info"]["lname"+count+""].value) !)
		}*/
		return window.isValid;
	}
}
//enable the other field when the user's country does not appear in the list of countries
function check_other()
{
	var country;
	country = document.forms["abstract_info"]["country"].value;
	if(country == "other")
		document.forms["abstract_info"]["other_country"].disabled=false;
	else
		document.forms["abstract_info"]["other_country"].disabled=true;
}
//basic check of validity of an email-id
function check_id()
{
	
	var id = document.forms["abstract_info"]["email1"].value;
	window.id_check = false;
	//var id = currentTarget.value;
	//alert(id);
	//var id = document.forms["abstract_info"][currentTarget].value;
	//alert(str);
	var lastAtPos = id.lastIndexOf('@');
   var lastDotPos = id.lastIndexOf('.');
	var reg1 = /@*@/;
	if (lastAtPos < lastDotPos && lastAtPos > 0 && id.indexOf('@@') == -1 && id.indexOf('@.') == -1 && id.split(/@/g).length - 1 == 1 &&lastDotPos > 2 && (id.length - lastDotPos) > 2)
		window.id_check = true;
	else
		window.id_check = false;
   if(window.id_check == false)
		alert("Seems to be an invalid email-id!");
}

function view_abstract()
{
	var content = document.forms["abstract_info"]["abstract_text"].value;
	if(trim(content) == null)
		return ;
	if(trim(content) == "")
		return ;
	document.getElementById("view_abstract").innerHTML="<span style=\"text-decoration:underline;color:#0099FF\">Here is your abstract</span> <br/>"+document.forms["abstract_info"]["abstract_text"].value;
	
}
