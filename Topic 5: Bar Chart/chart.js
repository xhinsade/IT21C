class ChartCreator {
    constructor(dataUrl) {
        this.dataUrl = dataUrl;
        this.chartData = null;
    }

    
    async init() {
        await this.fetchData();
        if (this.chartData) {
            this.createCharts();
        }
    }
}