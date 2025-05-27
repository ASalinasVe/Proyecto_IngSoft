import { crearTicket } from './reservar-ticket.js';
import { obtenerSurtidoresDisponibles } from './surtidor.js';

const form = document.getElementById("formTicket");
const mensaje = document.getElementById("mensaje");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const placa = document.getElementById("placa").value.trim();
  const gasolinera = document.getElementById("gasolinera").value;

  try {
    const ticket = crearTicket({ placa, gasolinera });
    mensaje.textContent = "Ticket reservado con éxito!";
    mensaje.style.color = "green";
    form.reset();
  } catch (err) {
    mensaje.textContent = "Error, no se pudo reservar el ticket";
    mensaje.style.color = "red";
  }
});


function cargarSurtidoresDisponibles() {
  const select = document.getElementById("gasolinera");
  const surtidores = obtenerSurtidoresDisponibles();

  surtidores.forEach(s => {
    const option = document.createElement("option");
    option.value = s.nombre;
    option.textContent = `${s.nombre} (${s.ubicacion})`;
    select.appendChild(option);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  cargarSurtidoresDisponibles();
});