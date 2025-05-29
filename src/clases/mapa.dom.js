const map = L.map('map').setView([-17.37, -66.14], 4);
const surtidores = JSON.parse(localStorage.getItem("surtidores"));

async function geocodificarUbicacion(ubicacion) {
  const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(ubicacion)}`;
  const respuesta = await fetch(url);
  const datos = await respuesta.json();

  if (datos.length > 0) {
    return {
      lat: parseFloat(datos[0].lat),
      lon: parseFloat(datos[0].lon)
    };
  } else {
    throw new Error("No se encontró la ubicación: " + direccion);
  }
}

async function agregarMarcadorGasolinerasMapa(gasolineras, mapa) {
  for (const gasolinera of gasolineras) {
    try {
      const coordenadas = await geocodificarUbicacion(gasolinera.ubicacion);
      console.log(coordenadas);
      const marcador = L.marker([coordenadas.lat, coordenadas.lon]).addTo(mapa);
      const popUp = gasolinera.nombre;
      marcador.bindPopup(popUp);
    } catch (e) {
      console.log('Error al intentar geocodificar:', ubicacion, e);
    }
  }
}

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([-34.6037, -58.3816]).addTo(map).bindPopup('¡Hola desde la UCB!');

agregarMarcadorGasolinerasMapa([{ id: 1, nombre: "Surtidor A", ubicacion: "universidad catolica boliviana san pablo cochabamba"}], map);
agregarMarcadorGasolinerasMapa(surtidores, map)