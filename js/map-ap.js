/* Dit script toont een kaart in de aside van de contactpagina met aangepaste coördinaten: 51.23, 4.41. */

let map = L.map('apMap', {
  center: [51.230, 4.416],
  zoom: 15,
  scrollWheelZoom: false // Optioneel: voorkomt dat de kaart inzoomt bij scrollen
});

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

let marker = L.marker([51.230, 4.416]).addTo(map);
marker.bindPopup("<b>Locatie</b><br>Hier is de locatie.").openPopup();
