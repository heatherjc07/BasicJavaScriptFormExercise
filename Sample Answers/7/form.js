function clearErrors()
{
	var errorFields = document.getElementsByClassName('error');
	
	for (var i = 0; i < errorFields.length; i++) {
       errorFields[i].innerHTML = "";
	}
}

function validate()
{
	clearErrors();
	var firstName = document.getElementById('inputFName');
	var surname = document.getElementById('inputSName');
	var email = document.getElementById('inputEmail');
	var password = document.getElementById('inputPassword');
	var password2 = document.getElementById('inputPassword2');
	
	if(!isPopulated(firstName))
	{
		addError(firstName, "First name is required");
	}
	if(!isPopulated(surname))
	{
		addError(surname, "Surname is required");
	}

	if(!isPopulated(email))
	{
		addError(email, "Email is required");
	}

	
	if(!isPopulated(password))
	{
		addError(password, "Password is required");
	}
	
	if(!isPopulated(password2))
	{
		addError(password2, "Confirm Password is required");
	}
	
	return false;
	
}

function isPopulated(field)
{
	return field.value !== "";
}

 function addError(field, err)
 {
	document.getElementById(field.id + "Err").innerHTML = err;
 }