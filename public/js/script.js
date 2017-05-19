var loginbtn = document.getElementById('login-btn');
var logo = document.getElementById('logo');
loginbtn.onclick = functionLogin;

function functionLogin() {
  loginbtn.style.display = 'none';
  logo.className += ' loggedin';
}
