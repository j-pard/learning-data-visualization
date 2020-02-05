(() => {
      const ISSCHART = document.getElementById("issChart");
      const LAT = document.getElementById("lat");
      const LON = document.getElementById("lon");
      const ALT = document.getElementById("alt");
      const API_URL = "https://api.wheretheiss.at/v1/satellites/25544/";

      const getPosition = async () => {
            const RESPONSE = await fetch(API_URL);
            const VALUES = await RESPONSE.json();
            const POSITION = [VALUES.latitude, VALUES.longitude, VALUES.altitude];

            LAT.textContent = POSITION[0];
            LON.textContent = POSITION[1];
            ALT.textContent = POSITION[2];
      };

      setInterval(() => {
            getPosition();
      }, 2000);
})();