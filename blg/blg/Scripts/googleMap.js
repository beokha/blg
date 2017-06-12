function initMap() {
    var uluru = { lat: 50.446267, lng: 30.4410513 };
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 14,
        center: uluru
    });
    var marker = new google.maps.Marker({
        position: uluru,
        map: map
    });
}