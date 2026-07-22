let map = L.map('map').setView([51.505, -0.09], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let londonMarker = L.marker([51.5, -0.09]).addTo(map).bindPopup("London");
let berlinMarker = L.marker([52.52, 13.4]).addTo(map).bindPopup("Berlin");

