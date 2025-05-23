import { crearTicket } from '../clases/reservar-ticket.js';

describe('Reserva de tickets', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test('debe registrar correctamente la placa del vehículo', () => {
    const ticket = crearTicket("456XYZ", "Estación Norte");
    expect(ticket.placa).toBe("456XYZ");
  });

});