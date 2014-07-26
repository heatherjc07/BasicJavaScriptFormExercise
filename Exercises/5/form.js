function validate()
{
	var firstName = document.getElementById('inputFName');
	var surname = document.getElementById('inputSName');
	var email = document.getElementById('inputEmail');
	var password = document.getElementById('inputPassword');
	var password2 = document.getElementById('inputPassword2');
	
	alert("First Name: " + firstName.value);
	alert("Surname: " + surname.value);
	alert("Email: " + email.value);
	alert("Password: " + password.value);
	alert("Confirm Password: " + password2.value);
}
