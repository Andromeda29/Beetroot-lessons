function initMap() {
              var uluru = {lat: 49.568505, lng: 34.585433};
              var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15,
                center: uluru
              });
              const Marker = './img/map.png';
              var marker = new google.maps.Marker({
                position: uluru,
                map: map,
                icon: Marker
              });
            }