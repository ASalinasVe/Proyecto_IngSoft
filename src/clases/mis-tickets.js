import { obtenerTickets, cancelarTicket } from './reservar-ticket.js';

const contenedor = document.getElementById("listaTickets");

function renderizarTickets() {
  contenedor.innerHTML = "";
  const tickets = obtenerTickets();

  if (tickets.length === 0) {
    contenedor.innerHTML = "<p>No hay tickets reservados.</p>";
    return;
  }

  tickets.forEach(ticket => {
    const div = document.createElement("div");
    div.classList.add("ticket");

    div.innerHTML = `
      <p><strong>Placa:</strong> ${ticket.placa}</p>
      <p><strong>Gasolinera:</strong> ${ticket.gasolinera}</p>
      <p><strong>Ticket #:</strong> ${ticket.numero}</p>
      <p><strong>Hora:</strong> ${ticket.hora}</p>
      <button data-id="${ticket.id}">Cancelar</button>
    `;

    contenedor.appendChild(div);
  });

  document.querySelectorAll("button[data-id]").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const id = parseInt(e.target.getAttribute("data-id"));
      cancelarTicket(id);
      renderizarTickets(); 
    });
  });
}

renderizarTickets();
