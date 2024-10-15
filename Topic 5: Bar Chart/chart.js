// Class to create and display a bar chart using Chart.js
class BarChart {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.chartData = null;
        this.chartCtx = document.getElementById('salesBarChart');
    }

    // Initialize the chart by fetching the JSON data and creating the chart
    async init() {
        await this.fetchData();
        if (this.chartData) {
            this.createChart();
        }
    }

    // Fetch the data from the JSON file
    async fetchData() {
        try {
            const response = await fetch(this.dataUrl);
            if (!response.ok) {
                throw new Error('Network response was not ok ' + response.statusText);
            }
            this.chartData = await response.json();
        } catch (error) {
            console.error('There has been a problem with your fetch operation:', error);
        }
    }

    // Create the bar chart with Chart.js
    createChart() {
        new Chart(this.chartCtx, {
            type: 'bar',
            data: {
                labels: this.chartData.labels,  // Use labels from JSON
                datasets: [{
                    label: 'Sales ($)',
                    data: this.chartData.data,  // Use sales data from JSON
                    backgroundColor: 'rgba(54, 162, 235, 0.6)',
                    borderColor: 'rgba(54, 162, 235, 1)',
                    borderWidth: 1
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
        });
    }
}

// Initialize the BarChart with the data from the JSON file
const salesBarChart = new BarChart('chart.json');
salesBarChart.init();
