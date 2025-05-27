import { obtenerSurtidores, obtenerSurtidoresDisponibles, obtenerSurtidoresDisponiblesGasolina } from '../clases/surtidor.js';
import { LocalStorage } from 'node-localstorage';
import { actualizarSurtidores, actualizarSurtidoresDisponibles } from '../clases/ver-surtidores.dom.js';

global.localStorage = new LocalStorage('./scratch');

describe("Ver lista de surtidores", () => {

  beforeEach(() => {
  // Simula estructura del DOM
  document.body.innerHTML = '<ul id="lista-surtidores"></ul>';

  // Datos de surtidores — adaptados a las pruebas esperadas
  localStorage.setItem("surtidores", JSON.stringify([
    { id: 1, nombre: "Surtidor A", ubicacion: "Zona 1", tipo: "gasolina", disponible: true, precio: 5, cantidad: 100 },
    { id: 2, nombre: "Surtidor B", ubicacion: "Zona 2", tipo: "gasolina", disponible: false, precio: 5, cantidad: 0 },
    { id: 3, nombre: "Surtidor C", ubicacion: "Zona 3", tipo: "diesel", disponible: true, precio: 6, cantidad: 150 } // ajustado
  ]));

  // Datos de tickets
  const hoy = new Date().toISOString().split("T")[0];
  localStorage.setItem("tickets", JSON.stringify([
    { id: hoy, gasolinera: "Surtidor A" },
    { id: hoy, gasolinera: "Surtidor A" },
    { id: hoy, gasolinera: "Surtidor C" }
  ]));
});


  test("debe mostrar solo surtidores en la lista", () => {
    const disponibles = obtenerSurtidores();
    expect(disponibles.length).toBe(3);
  });

  test("debe mostrar solo los surtidores disponibles", () => {
    const disponibles = obtenerSurtidoresDisponibles();
    expect(disponibles.length).toBe(2);
    expect(disponibles).toEqual([
      { id: 1, nombre: "Surtidor A", ubicacion: "Zona 1", tipo: "gasolina", disponible: true, precio: 5, cantidad: 100 },
      { id: 3, nombre: "Surtidor C", ubicacion: "Zona 3", tipo: "diesel", disponible: true, precio: 6, cantidad: 150 }
    ]);

  });

  test("debe mostrar solo los surtidores no disponibles", () => {
    const disponibles = obtenerSurtidores().filter(s => s.disponible === false);
    expect(disponibles.length).toBe(1);
    expect(disponibles).toEqual([
      { id: 2, nombre: "Surtidor B", ubicacion: "Zona 2", tipo: "gasolina", disponible: false, precio: 5, cantidad: 0 }
    ]);
    
  });

  test("debe mostrar solo los surtidores disponibles con gasolina", () => {
    const disponibles = obtenerSurtidoresDisponiblesGasolina();
    expect(disponibles.length).toBe(1);
    expect(disponibles).toEqual([
      { id: 1, nombre: "Surtidor A", ubicacion: "Zona 1", tipo: "gasolina", disponible: true, precio: 5, cantidad: 100 }
    ]);

  });

  test("debe mostrar solo los surtidores disponibles con diesel", () => {
    const disponibles = obtenerSurtidoresDisponibles().filter(s => s.tipo === "diesel");
    expect(disponibles.length).toBe(1);
    expect(disponibles).toEqual([
      { id: 3, nombre: "Surtidor C", ubicacion: "Zona 3", tipo: "diesel", disponible: true, precio: 6, cantidad: 150 }
    ]); 
    
  });    

  //pruebas de actualizar surtidores
  test("actualizarSurtidores muestra todos los surtidores con reservas", () => {
    actualizarSurtidores();

    const items = document.querySelectorAll('#lista-surtidores li');
    expect(items.length).toBe(3);

    expect(items[0].textContent).toContain("Surtidor A");
    expect(items[0].textContent).toContain("Disponible");
    expect(items[0].textContent).toContain("Reservas hoy: 2");

    expect(items[1].textContent).toContain("Surtidor B");
    expect(items[1].textContent).toContain("No Disponible");
    expect(items[1].textContent).toContain("Reservas hoy: 0");

    expect(items[2].textContent).toContain("Surtidor C");
    expect(items[2].textContent).toContain("Disponible");
    expect(items[2].textContent).toContain("Reservas hoy: 1");
  });

  test("actualizarSurtidoresDisponibles muestra solo los disponibles con reservas", () => {
    actualizarSurtidoresDisponibles();

    const items = document.querySelectorAll('#lista-surtidores li');
    expect(items.length).toBe(2);

    expect(items[0].textContent).toContain("Surtidor A");
    expect(items[0].textContent).toContain("Disponible");
    expect(items[0].textContent).toContain("Reservas hoy: 2");

    expect(items[1].textContent).toContain("Surtidor C");
    expect(items[1].textContent).toContain("Disponible");
    expect(items[1].textContent).toContain("Reservas hoy: 1");
  });

  test("actualizarSurtidoresDisponibles muestra mensaje si no hay disponibles", () => {
    // Todos no disponibles
    localStorage.setItem("surtidores", JSON.stringify([
      { id: 1, nombre: "Surtidor X", ubicacion: "Zona X", tipo: "gasolina", disponible: false, precio: 5, cantidad: 0 }
    ]));

    actualizarSurtidoresDisponibles();

    const items = document.querySelectorAll('#lista-surtidores li');
    expect(items.length).toBe(1);
    expect(items[0].textContent).toBe("No hay surtidores disponibles");
  });

});