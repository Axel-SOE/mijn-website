document.addEventListener('DOMContentLoaded', function() {


var map = L.map('map').setView([51.29, 4.49], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.square([
    [51.26, 4.46],
    [51.29, 4.45],
    [51.31, 4.47],
    [51.30, 4.55]
],{
    color: '#49C3EB',
    fillOpacity: 0.3
}).addTo(map);
});