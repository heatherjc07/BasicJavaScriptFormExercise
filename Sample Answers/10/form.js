function clearErrors()
{
	var errorFields = document.getElementsByClassName('error');
	
	for (var i = 0; i < errorFields.length; i++) {
       errorFields[i].innerHTML = "";
	}
}

function resetForm()
{
	clearErrors();
	document.getElementById('signForm').reset();
}

function validate()
{
	clearErrors();
	var minLength = 8;
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
	else
	{
		if(!isMinLength(password, minLength))
		{
			addError(password, "Must be at least " + minLength + " characters long");
		}
	}
	
	if(!isPopulated(password2))
	{
		addError(password2, "Confirm Password is required");
	}
	else
	{
		if(!areEqual(password,password2))
		{
			addError(password2, "Passwords must match");
		}
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
 
 function isMinLength(field, length)
{
   return field.value.length >= length;
}

function areEqual(field1, field2)
{
	return field1.value === field2.value;
}