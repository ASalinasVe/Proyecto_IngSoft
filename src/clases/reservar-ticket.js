const HORA_INICIO = "09:00";

function obtenerTickets() {
  const data = localStorage.getItem("tickets");
  return data ? JSON.parse(data) : [];
}

function calcularHora(base, turno) {
  const [hora, minuto] = base.split(":").map(Number);
  const totalMin = hora * 60 + minuto + (turno - 1) * 5;

  const h = Math.floor(totalMin / 60).toString().padStart(2, "0");
  const m = (totalMin % 60).toString().padStart(2, "0");

  return `${h}:${m}`;
}

function crearTicket(entrada) {
  if (!entrada.placa || !entrada.placa.trim() || !entrada.gasolinera || !entrada.gasolinera.trim()) {
    throw new Error("Datos incompletos");
  }

  const tickets = obtenerTickets();
  const numero = tickets.length + 1;
  const hora = calcularHora(HORA_INICIO, numero);

  const nuevoTicket = {
    id: Date.now(), 
    placa: entrada.placa,
    gasolinera: entrada.gasolinera,
    numero,
    hora
  };

  tickets.push(nuevoTicket);
  localStorage.setItem("tickets", JSON.stringify(tickets));

  return nuevoTicket;
}

//CANCELACION DE TICKETS

function cancelarTicket(id) {
  const tickets = obtenerTickets();
  const nuevosTickets = tickets.filter(ticket => ticket.id !== id);
  localStorage.setItem("tickets", JSON.stringify(nuevosTickets));
}

export { crearTicket, obtenerTickets, cancelarTicket };
