function Password()
{
    var password1 = document.getElementById("01").value
    var password2 = document.getElementById("02").value
if( password1.length < 8 || password2.length < 8)
    {
        alert("Your passsword is too short, try again")
    }
else if(password1 != password2)
    {
        alert("Your passwords do not match!")
    }
else
    {
        alert("Your password is valid")
    }
}