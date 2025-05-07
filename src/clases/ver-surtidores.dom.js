import { obtenerSurtidores } from './surtidor.js';

document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("lista-surtidores");

  if (lista) {
    const surtidores = obtenerSurtidores();

    surtidores.forEach(s => {
      const li = document.createElement("li");
      li.textContent = `Surtidor: ${s.nombre}, Ubicación: ${s.ubicacion}, Tipo: ${s.tipo}, Precio: ${s.precio}, Cantidad: ${s.cantidad}, Disponible: ${s.disponible}`;
      lista.appendChild(li);
    });
  }
});
