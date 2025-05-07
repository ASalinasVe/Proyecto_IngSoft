import { obtenerSurtidores } from './surtidor.js';

document.addEventListener("DOMContentLoaded", () => {
  const lista = document.getElementById("listaSurtidores");

  if (lista) {
    const surtidores = obtenerSurtidores();

    surtidores.forEach(s => {
      const li = document.createElement("li");
      li.textContent = `ID: ${s.id} - ${s.nombre}, Ubicación: ${s.ubicacion}, Precio: ${s.precio}, Cantidad: ${s.cantidad}`;
      lista.appendChild(li);
    });
  }
});
