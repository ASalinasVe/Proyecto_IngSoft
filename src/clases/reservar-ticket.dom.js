import { crearTicket } from './reservar-ticket.js';

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
