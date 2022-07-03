//Banking Login
document.getElementById('login-submit').addEventListener('click', function () {
    //Get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    //Get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    //Set email and password and apply condition to login 
    if (userEmail == 'toha@meye.com' && userPassword == 'child') {
        window.location.href = 'banking.html';
    } else {
        alert('Something Goes to Wrong !!!');
    }
});