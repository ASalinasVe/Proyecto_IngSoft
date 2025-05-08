const form = document.getElementById('login-form');

const LISTA_USUARIOS = JSON.parse(localStorage.getItem("usuarios"));
console.log(LISTA_USUARIOS);

form.addEventListener('submit', event => {
    event.preventDefault();
    
    const placa = document.getElementById('placa-input').value;
    const password = document.getElementById('password-input').value;

    const resp = LISTA_USUARIOS.find(u => u.v_id === placa && u.password === password);
    console.log(resp);

    if (resp) {
        window.location.href = "../../index.html";
    }
    else {
        document.getElementById('caja-error').textContent = "Placa o Usuario incorrectos o no existentes";
    }
})