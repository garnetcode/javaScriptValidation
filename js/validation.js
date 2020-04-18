function formValidation()
{
	var uname = document.form.username;
	var unum = document.form.number;
	var uemail = document.form.email;
	var txt = document.form.enquiry;

	if(allLetter(uname))
	{
		if(alphanumeric(unum))
		{ 
			if(ValidateEmail(uemail))
			{
				if (required(txt)) 
				{
					alert('Form successfully submitted!!');
					return true;
				}
				
			} 
		}
	} 
	return false;
}
	

	
function allLetter(uname)
{ 
	var letters = /^[A-Za-z]+$/;
	if(uname.value.match(letters))
		{
			return true;
		}
		else
		{
			alert('Username must have alphabet characters only and cannot be empty!!');
			uname.focus();
			return false;
		}
}


function alphanumeric(unum)
{ 
	var letters = /^[0-9a-zA-Z]+$/;
	if(unum.value.match(letters))
		{
			return true;
		}
		else
		{
			alert('User number must have alphanumeric characters only and cannot be empty!!');
			unum.focus();
			return false;
		}
	}

function ValidateEmail(uemail)
{
	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(uemail.value.match(mailformat))
	{
		return true;
	}
	else
	{
		alert("You have entered an invalid email address!");
		uemail.focus();
		return false;
	}
} 


function required(txt)
{
	var any = /^.+$/
	if (txt.value.match(any))
	{
		
		return true;
	}
	else 
	{
		alert("Entry field cannot be empty");
		return false;
		
	}
		
		
}
