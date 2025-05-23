import { obtenerTickets } from '../clases/reservar-ticket.js';

const lista = document.getElementById("listaTickets");
const tickets = obtenerTickets();

if (tickets.length === 0) {
  lista.innerHTML = "<li>No hay tickets reservados.</li>";
} else {
  tickets.forEach(ticket => {
    const li = document.createElement("li");
    li.innerHTML = `
      <strong>Placa:</strong> ${ticket.placa} <br>
      <strong>Gasolinera:</strong> ${ticket.gasolinera} <br>
      <strong>Número de ticket:</strong> ${ticket.numero} <br>
      <strong>Hora de aproximación:</strong> ${ticket.hora}
    `;
    lista.appendChild(li);
  });
}
