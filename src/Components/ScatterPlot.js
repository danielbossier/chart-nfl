import React from 'react';
import { Scatter } from 'react-chartjs-2';
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto';

const ScatterPlot = ({ chartData }) => {
    return (
      <div>
        <Scatter
          data={chartData}
          options={{
            responsive: true,
            // maintainAspectRatio: false,
            scales: {
              x: {
                type: 'linear',
                position: 'bottom',
                title: {
                  display: true,
                  text: 'How Good Do You Think They Are',
                },
              },
              y: {
                type: 'linear',
                position: 'left',
                title: {
                  display: true,
                  text: 'How Much Do You Hate Them',
                },
              },
            },
          }}
        />
      </div>
    );
  };

export default ScatterPlot;