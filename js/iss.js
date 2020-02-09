(() => {
      const ISSCHART = document.getElementById("issChart");
      const LAT = document.getElementById("lat");
      const LON = document.getElementById("lon");
      const ALT = document.getElementById("alt");
      const API_URL = "https://api.wheretheiss.at/v1/satellites/25544/";
      const MAP = L.map('mapid').setView([0, 0], 2);

      const ATTRIBUTION = 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
      const ICON = L.icon({
            iconUrl: 'ISS.svg',
            iconSize: [50, 32],
            iconAnchor: [25, 16],
        });

        const MARKER = L.marker([0, 0], {icon: ICON}).addTo(MAP);

      L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
            attribution: ATTRIBUTION,
            maxZoom: 18,
            id: 'mapbox/streets-v11',
            accessToken: "pk.eyJ1IjoiaG9seXNoaWl0IiwiYSI6ImNrNmI1b29sejB1ZmYzbm8zbHoxc3IyNncifQ.VYhYZ7NPfq0cJJ3s5ENjLA",
            noWrap: true
      }).addTo(MAP);

      const getPosition = async () => {
            const RESPONSE = await fetch(API_URL);
            const VALUES = await RESPONSE.json();
            const POSITION = [VALUES.latitude, VALUES.longitude, VALUES.altitude];

            MAP.setView([VALUES.latitude, VALUES.longitude], 3);
            MARKER.setLatLng([VALUES.latitude, VALUES.longitude]);

            LAT.textContent = POSITION[0];
            LON.textContent = POSITION[1];
            ALT.textContent = POSITION[2];
      };

      setInterval(() => {
            getPosition();
      }, 2000);
})();