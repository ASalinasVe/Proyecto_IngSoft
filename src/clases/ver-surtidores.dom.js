import { obtenerSurtidores, obtenerSurtidoresDisponibles } from './surtidor.js';


const surtidoresIniciales = [
  { id: 1, nombre: "Surtidor A", ubicacion: "Zona 1", tipo: "gasolina", disponible: true, precio: 5, cantidad: 100 },
  { id: 2, nombre: "Surtidor B", ubicacion: "Zona 2", tipo: "diesel", disponible: true, precio: 6, cantidad: 80 },
  { id: 3, nombre: "Surtidor C", ubicacion: "Zona 3", tipo: "gasolina", disponible: false, precio: 5, cantidad: 0 },
  { id: 4, nombre: "Surtidor D", ubicacion: "Zona 4", tipo: "diesel", disponible: false, precio: 6, cantidad: 0 } 
];

localStorage.removeItem("surtidores"); // Esto borra la lista vieja cada vez que recargas

if (!localStorage.getItem("surtidores")) {
  localStorage.setItem("surtidores", JSON.stringify(surtidoresIniciales));
}

function actualizarSurtidores(){
  const lista = document.getElementById("lista-surtidores");
  if (lista){
    lista.innerHTML = "";
    const surtidores = obtenerSurtidores();
    surtidores.forEach(s => {
      const li = document.createElement("li");
      const estado = s.disponible ? "Disponible" : "No Disponible";
      li.textContent = `Surtidor: ${s.nombre}, Ubicación: ${s.ubicacion}, Tipo: ${s.tipo}, Precio: ${s.precio}, Cantidad: ${s.cantidad}, Disponible: ${estado}`;
      lista.appendChild(li);
    });
  }
}


document.addEventListener("DOMContentLoaded", () => {
  actualizarSurtidores();

  const btnActualizar = document.getElementById("actualizar-surtidores");
  if (btnActualizar) {
    btnActualizar.addEventListener("click", () => {
      actualizarSurtidores();
    });
  }

});
