let map = L.map('map', {
  center: [51.30, 4.47],
  zoom: 15,
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([51.230, 4.416]).addTo(map);
marker.bindPopup("<b>Locatie</b><br>Hier is de locatie.").openPopup();
