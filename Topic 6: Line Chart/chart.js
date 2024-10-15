// Class to create and display a line chart using Chart.js
class LineChart {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.chartData = null;
        this.chartCtx = document.getElementById('salesLineChart');
    }