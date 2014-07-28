function validate()
{
	var firstName = document.getElementById('inputFName');
	var surname = document.getElementById('inputSName');
	var email = document.getElementById('inputEmail');
	var password = document.getElementById('inputPassword');
	var password2 = document.getElementById('inputPassword2');
	
	if(!isPopulated(firstName))
	{
		alert("First name is required");
	}
	if(!isPopulated(surname))
	{
		alert("Surname is required");
	}

	if(!isPopulated(email))
	{
		alert("Email is required");
	}
	
	if(!isPopulated(password))
	{
		alert("Password is required");
	}
	
	if(!isPopulated(password2))
	{
		alert("Confirm Password is required");
	}
	
	return false;
	
}

function isPopulated(field)
{
	return field.value !== "";
}
