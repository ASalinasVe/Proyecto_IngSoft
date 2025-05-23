import { crearTicket } from '../clases/reservar-ticket.js';

describe('Reserva de tickets - Básico', () => {
  test('crearTicket debería devolver un objeto con la placa', () => {
    const ticket = crearTicket({ placa: "ABC123", gasolinera: "Estación Norte" });
    expect(ticket.placa).toBe("ABC123");
  });

  test('crearTicket debería devolver la gasolinera', () => {
  const ticket = crearTicket({ placa: "DEF456", gasolinera: "Pulpoter" });
  expect(ticket.gasolinera).toBe("Pulpoter");
  });

});