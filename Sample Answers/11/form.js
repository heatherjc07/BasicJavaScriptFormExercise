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
	var valid = true;
	var minLength = 8;
	var firstName = document.getElementById('inputFName');
	var surname = document.getElementById('inputSName');
	var email = document.getElementById('inputEmail');
	var password = document.getElementById('inputPassword');
	var password2 = document.getElementById('inputPassword2');
	
	if(!isPopulated(firstName))
	{
		addError(firstName, "First name is required");
		valid = false;
	}
	if(!isPopulated(surname))
	{
		addError(surname, "Surname is required");
		valid = false;
	}

	if(!isPopulated(email))
	{
		addError(email, "Email is required");
		valid = false;
	}
	
	if(!isPopulated(password))
	{
		addError(password, "Password is required");
		valid = false;
	}
	else
	{
		if(!isMinLength(password, minLength))
		{
			addError(password, "Must be at least " + minLength + " characters long");
			valid = false;
		}
	}
	
	if(!isPopulated(password2))
	{
		addError(password2, "Confirm Password is required");
		valid = false;
	}
	
	if(!areEqual(password,password2))
	{
		addError(password2, "Passwords must match");
		valid = false;
	}
	
	if(valid)
	{
		alert("All looks good");
	}
	
	return false
	
}

function isPopulated(field)
{
	return field.value != ""
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
	return field1.value === field2.value
}