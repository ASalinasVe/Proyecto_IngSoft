function obtenerTickets() {
  const data = localStorage.getItem("tickets");
  return data ? JSON.parse(data) : [];
}

function crearTicket(entrada) {
  const tickets = obtenerTickets();
  const numero = tickets.length + 1;

  return {
    placa: entrada.placa,
    gasolinera: entrada.gasolinera,
    numero
  };
}

export { crearTicket, obtenerTickets };
