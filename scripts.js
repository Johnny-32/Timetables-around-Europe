let map = L.map('map').setView([49.95122, 10.107422], 4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let berlinMarker = L.marker([52.52, 13.405]).addTo(map).bindPopup("Berlin");
let madridMarker = L.marker([40.4169, -3.7033]).addTo(map).bindPopup("Madrid");
let viennaMarker = L.marker([48.2083, 16.3725]).addTo(map).bindPopup("Vienna");
let copenhagenMarker = L.marker([55.676111, 12.568333]).addTo(map).bindPopup("Copenhagen");
let odenseMarker = L.marker([55.395833, 10.388611]).addTo(map).bindPopup("Odense");
let osloMarker = L.marker([59.913333, 10.738889]).addTo(map).bindPopup("Oslo");
let barcelonaMarker = L.marker([41.383333, 2.183333]).addTo(map).bindPopup("Barcelona");
let stockholmMarker = L.marker([59.329444, 18.068611]).addTo(map).bindPopup("Stockholm");
let londonMarker = L.marker([51.507222, -0.1275]).addTo(map).bindPopup("London");
let amsterdamMarker = L.marker([52.372778, 4.893611]).addTo(map).bindPopup("Amsterdam");
let warsawMarker = L.marker([52.23, 21.011111]).addTo(map).bindPopup("Warsaw");
let parisMarker = L.marker([48.8567, 2.3522]).addTo(map).bindPopup("Paris");

map.on('moveend', function () {
  const zoom = map.getZoom();
  const center = map.getCenter();

  console.log(`Zoom Level: ${zoom}`);
  console.log(`Coordinates: ${center.lat}, ${center.lng}`);
});