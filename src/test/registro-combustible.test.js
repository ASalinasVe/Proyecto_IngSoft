import { procesarRegistro } from '../clases/registro-combustible'

describe('Registro de combustible', () => {
  test('debe registrar la cantidad de litros correctamente', () => {
    const datos = { litros: 4000 };
    const resultado = procesarRegistro(datos);
    expect(resultado.litros).toBe(4000);
  });

  test('debe registrar la hora correctamente', () => {
    const datos = { hora: "08:30" };
    const resultado = procesarRegistro(datos);
    expect(resultado.hora).toBe("08:30");
  });

  test('debe registrar la fecha correctamente', () => {
    const datos = { fecha: "2025-05-06" };
    const resultado = procesarRegistro(datos);
    expect(resultado.fecha).toBe("2025-05-06");
  });

  test('debe registrar el tipo de combustible correctamente', () => {
    const datos = { tipo: "diesel" };
    const resultado = procesarRegistro(datos);
    expect(resultado.tipo).toBe("diesel");
  });
  
  test('debe registrar el nombre de la estación correctamente', () => {
    const datos = { estacion: "Estación Central" };
    const resultado = procesarRegistro(datos);
    expect(resultado.estacion).toBe("Estación Central");
  });
});