import React from 'react';
import { Scatter } from 'react-chartjs-2';
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto';

function ScatterPlot({ chartData }) {
    return <Scatter data={chartData} />;
}

export default ScatterPlot;