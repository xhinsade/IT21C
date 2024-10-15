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