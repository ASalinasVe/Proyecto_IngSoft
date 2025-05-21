const map = L.map('map').setView([-17.37, -66.14], 4);

async function geocodificarUbicacion (ubicacion) {
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

async function agregarUbicacionMapa (ubicacion, mapa) {
  try {
    const coordenadas = await geocodificarUbicacion(ubicacion);
    console.log(coordenadas);
    const marcador = L.marker([coordenadas.lat, coordenadas.lon]).addTo(mapa);
    const popUp = 'LA CATOLICA';
    marcador.bindPopup(popUp);
  } catch (e) {
    console.log('Error al intentar geocodificar:', ubicacion, e);
  }
}

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([-34.6037, -58.3816]).addTo(map).bindPopup('¡Hola desde la UCB!');

agregarUbicacionMapa('universidad catolica boliviana san pablo cochabamba', map);