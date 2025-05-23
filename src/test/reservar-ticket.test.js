import { crearTicket, obtenerTickets } from '../clases/reservar-ticket.js';

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

  test('crearTicket debe asignar la hora 09:05 al segundo ticket', () => {
  crearTicket({ placa: "AAA111", gasolinera: "Gasolinera Central" }); // ticket 1 → 09:00
  const segundo = crearTicket({ placa: "BBB222", gasolinera: "Gasolinera Central" }); // ticket 2 → 09:05
  expect(segundo.hora).toBe("09:05");
  });

  test('crearTicket debe lanzar error si la placa está vacía', () => {
  expect(() => crearTicket({ placa: "", gasolinera: "Sur Fuel" })).toThrow("Datos incompletos");
  });

  test('crearTicket debe lanzar error si la gasolinera está vacía', () => {
  expect(() => crearTicket({ placa: "XYZ999", gasolinera: "" })).toThrow("Datos incompletos");
  });

  test('obtenerTickets debe devolver todos los tickets registrados', () => {
  crearTicket({ placa: "ABC123", gasolinera: "Gasolinera Central" });
  crearTicket({ placa: "DEF456", gasolinera: "Pulpoter" });

  const tickets = obtenerTickets();

  expect(tickets.length).toBe(2);
  expect(tickets[0].placa).toBe("ABC123");
  expect(tickets[1].placa).toBe("DEF456");
  });


});