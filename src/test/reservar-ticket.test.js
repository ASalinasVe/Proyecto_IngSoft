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

  test('crearTicket debe devolver un objeto con todos los campos requeridos', () => {
  const ticket = crearTicket({ placa: "LMN789", gasolinera: "Estación Norte" });

  expect(ticket).toHaveProperty("id");
  expect(ticket).toHaveProperty("placa", "LMN789");
  expect(ticket).toHaveProperty("gasolinera", "Estación Norte");
  expect(ticket).toHaveProperty("numero", 1);
  expect(ticket).toHaveProperty("hora", "09:00");
  });
});

//CANCELACION DE TICKETS


describe('Cancelación de tickets - Básico', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('cancelarTicket elimina el ticket con el ID indicado', () => {
    const t1 = crearTicket({ placa: "AAA111", gasolinera: "Gasolinera Central" });
    const t2 = crearTicket({ placa: "BBB222", gasolinera: "Estación Norte" });

    cancelarTicket(t1.id);

    const tickets = obtenerTickets();
    expect(tickets.length).toBe(1);
    expect(tickets[0].id).toBe(t2.id);
  });
});
