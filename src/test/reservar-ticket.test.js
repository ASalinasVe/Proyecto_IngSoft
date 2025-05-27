import { crearTicket, obtenerTickets, cancelarTicket } from '../clases/reservar-ticket.js';

describe('Reserva de tickets - Básico', () => {
  beforeEach(() => {
  localStorage.clear();
  });

  test('crearTicket debería devolver un objeto con la placa', () => {
    const ticket = crearTicket({ placa: "ABC123", gasolinera: "Surtidor A" });
    expect(ticket.placa).toBe("ABC123");
  });

  test('crearTicket debería devolver la gasolinera', () => {
  const ticket = crearTicket({ placa: "DEF456", gasolinera: "Surtidor B" });
  expect(ticket.gasolinera).toBe("Surtidor B");
  });

  test('crearTicket debe asignar el número 1 al primer ticket', () => {
  const ticket = crearTicket({ placa: "GHI789", gasolinera: "Surtidor B" });
  expect(ticket.numero).toBe(1);
  });

  test('crearTicket debe asignar la hora 09:05 al segundo ticket', () => {
  crearTicket({ placa: "AAA111", gasolinera: "Surtidor A" }); // ticket 1 → 09:00
  const segundo = crearTicket({ placa: "BBB222", gasolinera: "Surtidor A" }); // ticket 2 → 09:05
  expect(segundo.hora).toBe("09:05");
  });

  test('crearTicket debe lanzar error si la placa está vacía', () => {
  expect(() => crearTicket({ placa: "", gasolinera: "Surtidor B" })).toThrow("Datos incompletos");
  });

  test('crearTicket debe lanzar error si la gasolinera está vacía', () => {
  expect(() => crearTicket({ placa: "XYZ999", gasolinera: "" })).toThrow("Datos incompletos");
  });

  test('obtenerTickets debe devolver todos los tickets registrados', () => {
  crearTicket({ placa: "ABC123", gasolinera: "Surtidor A" });
  crearTicket({ placa: "DEF456", gasolinera: "Surtidor B" });

  const tickets = obtenerTickets();

  expect(tickets.length).toBe(2);
  expect(tickets[0].placa).toBe("ABC123");
  expect(tickets[1].placa).toBe("DEF456");
  });

  test('crearTicket debe devolver un objeto con todos los campos requeridos', () => {
  const ticket = crearTicket({ placa: "LMN789", gasolinera: "Surtidor B" });

  expect(ticket).toHaveProperty("id");
  expect(ticket).toHaveProperty("placa", "LMN789");
  expect(ticket).toHaveProperty("gasolinera", "Surtidor B");
  expect(ticket).toHaveProperty("numero", 1);
  expect(ticket).toHaveProperty("hora", "09:00");
  });
});

//CANCELACION DE TICKETS


describe('Cancelación de tickets - Básico', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('cancelarTicket elimina el ticket con el ID indicado', (done) => {
  const t1 = crearTicket({ placa: "AAA111", gasolinera: "Surtidor A" });

    setTimeout(() => {
     const t2 = crearTicket({ placa: "BBB222", gasolinera: "Surtidor A" });

     cancelarTicket(t1.id);

     const tickets = obtenerTickets();
     expect(tickets.length).toBe(1);
     expect(tickets[0].id).toBe(t2.id);

     done();
     }, 10);
   });

  test('cancelarTicket no elimina ningún ticket si el ID no existe', () => {
  const t1 = crearTicket({ placa: "AAA111", gasolinera: "Surtidor A" });
  const t2 = crearTicket({ placa: "BBB222", gasolinera: "Surtidor B" });

  cancelarTicket(999999); 

  const tickets = obtenerTickets();
  expect(tickets.length).toBe(2);
  expect(tickets[0].id).toBe(t1.id);
  expect(tickets[1].id).toBe(t2.id);
  });

  test('cancelarTicket no afecta si se intenta cancelar dos veces el mismo ticket', (done) => {
  const t1 = crearTicket({ placa: "AAA111", gasolinera: "Surtidor A" });

  setTimeout(() => {
    const t2 = crearTicket({ placa: "BBB222", gasolinera: "Surtidor B" });

    cancelarTicket(t1.id);
    cancelarTicket(t1.id); // segunda vez

    const tickets = obtenerTickets();
    expect(tickets.length).toBe(1);
    expect(tickets[0].id).toBe(t2.id);

    done();
  }, 10);
  });
});
