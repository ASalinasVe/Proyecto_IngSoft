import { obtenerSurtidores, obtenerSurtidoresDisponibles } from './surtidor.js';
import {obtenerTickets} from './reservar-ticket.js';


const surtidoresIniciales = [
  { id: 1, nombre: "Surtidor A", ubicacion: "Zona 1", tipo: "gasolina", disponible: true, precio: 5, cantidad: 100 },
  { id: 2, nombre: "Surtidor B", ubicacion: "Zona 2", tipo: "diesel", disponible: true, precio: 6, cantidad: 80 },
  { id: 3, nombre: "Surtidor C", ubicacion: "Zona 3", tipo: "gasolina", disponible: false, precio: 5, cantidad: 0 },
  { id: 4, nombre: "Surtidor D", ubicacion: "Zona 4", tipo: "diesel", disponible: false, precio: 6, cantidad: 0 } 
];

if (!localStorage.getItem("surtidores")) {
  localStorage.setItem("surtidores", JSON.stringify(surtidoresIniciales));
}

export function actualizarSurtidores() {
  const lista = document.getElementById("lista-surtidores");
  if (lista) {
    lista.innerHTML = "";
    const surtidores = obtenerSurtidores();
    const tickets = obtenerTickets();
    const hoy = new Date().toISOString().split("T")[0];

    surtidores.forEach(s => {
      // Contar tickets de hoy para este surtidor (por nombre)
      const reservasHoy = tickets.filter(
        t => t.gasolinera.trim().toLowerCase() === s.nombre.trim().toLowerCase() &&
             new Date(t.id).toISOString().split("T")[0] === hoy
      ).length;

      const li = document.createElement("li");
      const estado = s.disponible ? "Disponible" : "No Disponible";
      li.innerHTML = `<strong>${s.nombre}</strong>, ${estado}, ${s.tipo}, Reservas hoy: ${reservasHoy}`;

      // Detalles ocultos
      const detalles = document.createElement("div");
      detalles.style.display = "none";
      detalles.innerHTML = `
        <div>Ubicación: ${s.ubicacion}</div>
        <div>Precio: ${s.precio}</div>
        <div>Cantidad: ${s.cantidad}</div>
      `;
      li.appendChild(detalles);

      li.addEventListener("click", () => {
        detalles.style.display = detalles.style.display === "none" ? "block" : "none";
      });

      lista.appendChild(li);
    });
  }
}

export function actualizarSurtidoresDisponibles(){
  const listadisponibles = document.getElementById("lista-surtidores");

  if (listadisponibles) {
    listadisponibles.innerHTML = "";
    const surtidoresdisponibles = obtenerSurtidoresDisponibles();
    const tickets = obtenerTickets();
    const hoy = new Date().toISOString().split("T")[0];

    surtidoresdisponibles.forEach(s => {
      // Contar tickets de hoy para este surtidor (por nombre)
      const reservasHoy = tickets.filter(
        t => t.gasolinera.trim().toLowerCase() === s.nombre.trim().toLowerCase() &&
             new Date(t.id).toISOString().split("T")[0] === hoy
      ).length;

      const li = document.createElement("li");
      const estado = s.disponible ? "Disponible" : "No Disponible";
      li.innerHTML = `<strong>${s.nombre}</strong>, ${estado}, ${s.tipo}, Reservas hoy: ${reservasHoy}`;

      // Detalles ocultos
      const detalles = document.createElement("div");
      detalles.style.display = "none";
      detalles.innerHTML = `
        <div>Ubicación: ${s.ubicacion}</div>
        <div>Precio: ${s.precio}</div>
        <div>Cantidad: ${s.cantidad}</div>
      `;
      li.appendChild(detalles);

      li.addEventListener("click", () => {
        detalles.style.display = detalles.style.display === "none" ? "block" : "none";
      });

      listadisponibles.appendChild(li);
    });

    if (surtidoresdisponibles.length === 0) {
      const li = document.createElement("li");
      li.textContent = "No hay surtidores disponibles";
      listadisponibles.appendChild(li);
    }
  }
}


export function iniciarVistaSurtidores() {
  document.addEventListener("DOMContentLoaded", () => {
    actualizarSurtidores();

    const btnActualizar = document.getElementById("actualizar-surtidores");
    if (btnActualizar) {
      btnActualizar.addEventListener("click", () => {
        actualizarSurtidores();
      });
    }

    const btnSurtidoresDisponibles = document.getElementById("obtener-surtidores-disponibles");
    if (btnSurtidoresDisponibles){
      btnSurtidoresDisponibles.addEventListener("click", () => {
        actualizarSurtidoresDisponibles();
      })
    }

  });
}
