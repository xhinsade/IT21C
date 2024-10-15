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