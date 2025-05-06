import { Login } from './login.js';

const login = new Login();

document.getElementById('login-form').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;

  const isValid = login.validateUser(email, password);

  if (isValid) {
    alert('Inicio de sesión exitoso');
    window.location.href = './index.html';
  } else {
    alert('Credenciales incorrectas');
  }
});
