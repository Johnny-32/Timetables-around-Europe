let map = L.map('map').setView([52.21434, 10.107422], 4);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 12,
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

let berlinMarker = L.marker([52.52, 13.405]).addTo(map).bindPopup('<a href="https://www.bvg.de/de/verbindungen/linienuebersicht" target="_blank">Berlin</a>');
let viennaMarker = L.marker([48.2083, 16.3725]).addTo(map).bindPopup('<a href="https://www.wienerlinien.at/fahrplaene" target="_blank">Vienna</a>');
let copenhagenMarker = L.marker([55.676111, 12.568333]).addTo(map).bindPopup('<a href="https://dinoffentligetransport.dk/en/plan-your-journey" target="_blank">Copenhagen</a>');
let odenseMarker = L.marker([55.395833, 10.388611]).addTo(map).bindPopup('<a href="https://fynbus.dk/koereplaner-trafikinfo/koereplaner-i-din-kommune/odense" target="_blank">Odense</a>');
let osloMarker = L.marker([59.913333, 10.738889]).addTo(map).bindPopup('<a href="https://ruter.no/en/plan-journey/timetables-and-route-maps" target="_blank">Oslo</a>');
let barcelonaMarker = L.marker([41.383333, 2.183333]).addTo(map).bindPopup('<a href="https://www.tmb.cat/en/barcelona/buses" target="_blank">Barcelona</a>');
let stockholmMarker = L.marker([59.329444, 18.068611]).addTo(map).bindPopup('<a href="https://sl.linjetidtabeller.se/" target="_blank">Stockholm</a>');
let londonMarker = L.marker([51.507222, -0.1275]).addTo(map).bindPopup('<a href="https://tfl.gov.uk/travel-information/timetables/" target="_blank">London</a>');
let amsterdamMarker = L.marker([52.372778, 4.893611]).addTo(map).bindPopup('<a href="https://www.gvb.nl/en/travel-information/stops-and-timetable" target="_blank">Amsterdam</a>');
let warsawMarker = L.marker([52.23, 21.011111]).addTo(map).bindPopup('<a href="https://www.wtp.waw.pl/rozklady-jazdy/" target="_blank">Warsaw</a>');
let parisMarker = L.marker([48.8567, 2.3522]).addTo(map).bindPopup('<a href="https://www.ratp.fr/en/horaires-bus" target="_blank">Paris</a>');
let munichMarker = L.marker([48.1375, 11.575]).addTo(map).bindPopup('<a href="https://efa.mvv-muenchen.de/index.html#timetables@enquiry" target="_blank">Munich</a>');

// Quicker map refresh
const mapElement = document.getElementById('map');
const observer = new ResizeObserver(() => {
  map.invalidateSize();
});
observer.observe(mapElement);
