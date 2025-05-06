
function procesarRegistro(entrada) {
    return {
      litros: entrada.litros,
      hora: entrada.hora,
      fecha: entrada.fecha,
      tipo: entrada.tipo,
      estacion: entrada.estacion
    };
  }
//carajo
export { procesarRegistro };