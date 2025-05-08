import { obtenerSurtidores } from './surtidor.js';


const surtidoresIniciales = [
  { id: 1, nombre: "Surtidor A", ubicacion: "Zona 1", tipo: "gasolina", disponible: true, precio: 5, cantidad: 100 },
  { id: 2, nombre: "Surtidor B", ubicacion: "Zona 2", tipo: "diesel", disponible: true, precio: 6, cantidad: 80 }
];

if (!localStorage.getItem("surtidores")) {
  localStorage.setItem("surtidores", JSON.stringify(surtidoresIniciales));
}


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
