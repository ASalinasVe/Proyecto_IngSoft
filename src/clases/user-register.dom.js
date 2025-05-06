import { User } from './user.js';

const LISTA_USUARIOS = [];

const form = document.getElementById('register-form');

form.addEventListener('submit', event => {
  event.preventDefault();

  const name = document.getElementById('name-input').value;
  const password = document.getElementById('password-input').value;
  const v_id = document.getElementById('v-id-input').value.toUpperCase();

  const user = new User(name, v_id, password);

  LISTA_USUARIOS.push(user);

  console.log(LISTA_USUARIOS);
});
