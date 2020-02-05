(() => {
    const CHART = document.getElementById("myChart");

    const LABELS = ["2am", "6am", "10am", "2pm", "6pm", "10pm"];
    let temperatures = [14, 16, 20, 28, 26, 21];
    let humidities = [80, 50, 28, 15, 20, 40];



    let lineChart = new Chart(CHART, {
        type: 'line',
        data: {
            labels: LABELS,
            datasets: [{
                label: "Temperature",
                fill: false,
                borderColor: "rgb(255, 150, 0)",
                yAxisID: "left-axis",
                data: temperatures
            },
            {
                label: "Humidity",
                fill: false,
                borderColor: "rgb(0, 150, 255)",
                yAxisID: "right-axis",
                data: humidities
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    id: "left-axis",
                    type: "linear",
                    position: "left",
                    ticks: {
                        min: 0,
                        max: 40
                    }
                },
                {
                    id: "right-axis",
                    type: "linear",
                    position: "right",
                    ticks: {
                        min: 0,
                        max: 100
                    }
                }]
            }
        }
    });
})();