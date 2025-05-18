document.addEventListener('DOMContentLoaded', function() {


var map = L.map('map').setView([51.29, 4.49], 11);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.polygon([
    [51.30697712504292, 4.546152646361714],
    [51.34773502086442, 4.500991232727665],
    [51.29870793748795, 4.446693665725004],
    [51.27429729775229, 4.500673425161012]
],{
    color: '#49C3EB',
    fillOpacity: 0.3
}).addTo(map);
});