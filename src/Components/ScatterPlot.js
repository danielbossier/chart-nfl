import React from 'react';
import { Scatter } from 'react-chartjs-2';
// import { Chart as ChartJS } from 'chart.js/auto';

function ScatterPlot({ chartData }) {
    return <Scatter data={chartData} />;
}

export default ScatterPlot;