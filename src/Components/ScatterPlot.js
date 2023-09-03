import React from 'react';
import { Scatter } from 'react-chartjs-2';
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto';

const ScatterPlot = ({ chartData }) => {
    // Generate an array of random colors for each data point
    const generateRandomColors = (numColors) => {
        const colors = [];
        for (let i = 0; i < numColors; i++) {
            const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
                Math.random() * 256
              )}, ${Math.floor(Math.random() * 256)}, 0.6)`;
            colors.push(color);
        }
        return colors;
    };

    const dataset = chartData.datasets[0]; // Assuming there is only one dataset

    // Generate random colors for each data point
    if (dataset.data.length > 0 && dataset.data.length !== dataset.backgroundColor.lenght) {
        dataset.backgroundColor = generateRandomColors(dataset.data.length);
    }
    
    const options = {
      scales: {
        x: {
          min: -10,
          max: 10,
          title: {
            display: true,
            text: "How Good",
          },
        },
        y: {
          min: -10,
          max: 10,
          title: {
            display: true,
            text: "How Like",
          },
        },
      },
      plugins: {
        tooltip: {
          callbacks: {
            title: (context) => chartData.labels[context[0].dataIndex], // Display team_name as the title
          },
        },
      },
    };
  
    return <Scatter data={chartData} options={options} />;
  };
  
  export default ScatterPlot;