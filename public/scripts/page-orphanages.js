// Mapa
const map = L.map('mapid').setView([-27.222633, -49.6455874], 15);

// Título do mapa
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Cria ícone
const icon = L.icon({
    iconUrl: "public/images/map-marker.svg",
    iconSize: [58, 67],
    iconAnchor: [29, 68],
    popupAnchor: [170, 2]
});

// Cria pop-up
const popup = L.popup({
    closeButton: false,
    className: 'map-popup',
    minWidth: 240,
    minHeight: 240
}).setContent('Orf. Esperança <a href="orphanage.html?id=1" class="choose-orphanage"><img src="public/images/arrow-white.svg"></a>');

// Pop-up no mapa
L.marker([-27.222633, -49.6455874], { icon }).addTo(map).bindPopup(popup);