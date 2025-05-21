const map = L.map('map').setView([-34.6037, -58.3816], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

L.marker([-34.6037, -58.3816]).addTo(map)
    .bindPopup('¡Hola desde la UCB!');