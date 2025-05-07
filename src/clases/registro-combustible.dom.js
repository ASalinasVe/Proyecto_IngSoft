import { procesarRegistro } from './registro-combustible.js';

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registroCombustible");

  if (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      const datos = {
        litros: parseInt(document.getElementById("litros").value),
        hora: document.getElementById("hora").value,
        fecha: document.getElementById("fecha").value,
        tipo: document.getElementById("tipo").value,
        estacion: document.getElementById("estacion").value,
      };

      const procesado = procesarRegistro(datos);

      const surtidores = JSON.parse(localStorage.getItem("surtidores")) || [];

      // Busca el surtidor por nombre o id
      const surtidor = surtidores.find(s => s.nombre === procesado.estacion && s.tipo === procesado.tipo);
      
      if (surtidor) {
        surtidor.cantidad += procesado.litros; // Suma los litros
        localStorage.setItem("surtidores", JSON.stringify(surtidores));
      }      

      const mensaje = `Llegada de ${procesado.litros} litros de ${procesado.tipo} en la estación ${procesado.estacion} a hrs ${formatearHora(procesado.hora)}`;
      localStorage.setItem("mensajeRegistro", mensaje);
      window.location.href = "../../index.html";
    });
  }


});

function formatearHora(hora24) {
  const [h, m] = hora24.split(":");
  const hh = parseInt(h);
  const ampm = hh >= 12 ? "PM" : "AM";
  return (hh % 12 || 12) + ":" + m + " " + ampm;
}
