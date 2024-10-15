// Class to create and display a line chart using Chart.js
class LineChart {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.chartData = null;
        this.chartCtx = document.getElementById('salesLineChart');
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
    
    // Create the line chart with Chart.js
    createChart() {
        new Chart(this.chartCtx, {
            type: 'line',  // Change to 'line' for line chart
            data: {
                labels: this.chartData.labels,  // Use labels from JSON
                datasets: [{
                    label: 'Sales ($)',
                    data: this.chartData.data,  // Use sales data from JSON
                    borderColor: 'rgba(54, 162, 235, 1)',  // Line color
                    backgroundColor: 'rgba(54, 162, 235, 0.2)',  // Fill under the line
                    fill: true,  // Enable fill under the line
                    tension: 0.4,  // Set line curve tension
                    borderWidth: 2
                }]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: true
                    }
                }
            }
        });
    }
}