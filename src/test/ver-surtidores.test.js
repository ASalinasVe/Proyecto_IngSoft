import { obtenerSurtidores, obtenerSurtidoresDisponibles, obtenerSurtidoresDisponiblesGasolina } from '../clases/surtidor.js';
import { LocalStorage } from 'node-localstorage';

global.localStorage = new LocalStorage('./scratch');

describe("Ver lista de surtidores", () => {
  beforeEach(() => {
    localStorage.setItem("surtidores", JSON.stringify([
      { id: 1, nombre: "Surtidor A", ubicacion: "Zona 1", tipo: "gasolina", disponible: true, precio: 5, cantidad: 100 },
      { id: 2, nombre: "Surtidor B", ubicacion: "Zona 2", tipo: "gasolina", disponible: false, precio: 5, cantidad: 0 },
      { id: 3, nombre: "Surtidor C", ubicacion: "Zona 3", tipo: "diesel", disponible: true, precio: 6, cantidad: 150 }
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

});