import { crearTicket } from '../clases/reservar-ticket.js';

describe('Reserva de tickets - Básico', () => {
  beforeEach(() => {
  localStorage.clear();
  });

  test('crearTicket debería devolver un objeto con la placa', () => {
    const ticket = crearTicket({ placa: "ABC123", gasolinera: "Estación Norte" });
    expect(ticket.placa).toBe("ABC123");
  });

  test('crearTicket debería devolver la gasolinera', () => {
  const ticket = crearTicket({ placa: "DEF456", gasolinera: "Pulpoter" });
  expect(ticket.gasolinera).toBe("Pulpoter");
  });

  test('crearTicket debe asignar el número 1 al primer ticket', () => {
  const ticket = crearTicket({ placa: "GHI789", gasolinera: "Estación Norte" });
  expect(ticket.numero).toBe(1);
  });
});