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
        zona: document.getElementById("zona") ? document.getElementById("zona").value : "" // Si tienes zona
      };

      const procesado = procesarRegistro(datos);

      const surtidores = JSON.parse(localStorage.getItem("surtidores")) || [];

      // Busca el surtidor por nombre o tipo
      let surtidor = surtidores.find(
        s => s.nombre.trim().toLowerCase() === procesado.estacion.trim().toLowerCase() &&
             s.tipo.trim().toLowerCase() === procesado.tipo.trim().toLowerCase()
      );
      
      if (surtidor) {
        surtidor.cantidad += procesado.litros; // Suma los litros
      } else {
        // Si no existe, lo agregas
        surtidor = {
          id: surtidores.length > 0 ? Math.max(...surtidores.map(s => s.id)) + 1 : 1,
          nombre: procesado.estacion,
          ubicacion: procesado.zona,
          tipo: procesado.tipo,
          disponible: true,
          precio: 0,
          cantidad: procesado.litros
        };
        surtidores.push(surtidor);
      }

      localStorage.setItem("surtidores", JSON.stringify(surtidores));


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