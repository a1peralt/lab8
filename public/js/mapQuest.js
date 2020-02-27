function initMap() {
	L.mapquest.key = 'I69rQLa6WMXOSDWKwesejtJctAXmKhvK';

	var map = L.mapquest.map('map', {
		center: [32.878829, -117.235915],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.878829, -117.235915]).addTo(map);
}