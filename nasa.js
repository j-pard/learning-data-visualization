(() => {
      const NASACHART = document.getElementById("nasaChart");

      let xlabels = [];
      let globalTemp = [];
      let northTemp = [];
      let southTemp = [];

      const getData = async (url) => {
            const RESPONSE = await fetch(url);
            const DATA = await RESPONSE.text();
            const TABLE = DATA.split("\n").splice(1);
            
            TABLE.forEach(row => {
                  const COLUMNS = row.split(",");
                  const YEAR = COLUMNS[0];
                  xlabels.push(YEAR);
                  const GLOBAL_TEMP = COLUMNS[1];
                  globalTemp.push(parseFloat(GLOBAL_TEMP) + 14);
                  const NORTH_TEMP = COLUMNS[2];
                  northTemp.push(parseFloat(NORTH_TEMP) + 14);
                  const SOUTH_TEMP = COLUMNS[3];
                  southTemp.push(parseFloat(SOUTH_TEMP) + 14);
            });
            
      };

      const chartDraw = async (target) => {
            await getData("nasa-temperatures.csv");
            const temperaturesChart = new Chart(target, {
                  type: 'line',
                  data: {
                      labels: xlabels,
                      datasets: [{
                          label: "Global Temperatures",
                          fill: false,
                          borderColor: "rgb(255, 150, 0)",
                          yAxisID: "left-axis",
                          data: globalTemp
                        },
                      {
                          label: "North Temperatures",
                          fill: false,
                          borderColor: "rgb(0, 150, 255)",
                          yAxisID: "left-axis",
                          data: northTemp
                      },
                      {
                        label: "South Temperatures",
                        fill: false,
                        borderColor: "rgb(0, 255, 150)",
                        yAxisID: "left-axis",
                        data: southTemp
                    }]
                  },
                  options: {
                      scales: {
                          yAxes: [{
                              id: "left-axis",
                              type: "linear",
                              position: "left",
                              ticks: {
                                    stepSize: 0.2,
                                    callback: function(value, index, values) {
                                          return value.toFixed(1) + "°";
                                    }
                              }
                          }]
                      },
                      title: {
                            display: true,
                            text: "NASA temperatures from 1880 to Now"
                      }
                  },
              });
      };
      

      chartDraw(NASACHART);
})();