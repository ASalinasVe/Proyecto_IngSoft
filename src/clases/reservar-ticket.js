function crearTicket(entrada) {
  return {
    placa: entrada.placa,
    gasolinera: entrada.gasolinera
  };
}

export { crearTicket };