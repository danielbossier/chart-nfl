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
                type: "linear",
                position: "bottom",
                title: {
                  display: true,
                  text: "X-Axis Label",
                },
              },
              y: {
                type: "linear",
                position: "left",
                title: {
                  display: true,
                  text: "Y-Axis Label",
                },
              },
            },
          }}
          plugins={[
            {
              id: "custom-point-colors",
              beforeDraw: (chart) => {
                const { ctx, data } = chart;
                const dataset = data.datasets[0];
  
                // Define custom colors for points (adjust as needed)
                const pointColors = [
                    "rgba(255, 99, 132, 1)", // Red
                    "rgba(75, 192, 192, 1)", // Green
                    "rgba(0, 0, 255, 1)", // Blue
                    "rgba(255, 255, 0 1)", // Yellow
                  // Add more colors for additional data points
                ];
  
                dataset.data.forEach((point, index) => {
                  // Set the point color based on the index
                  const color = pointColors[index % pointColors.length];
                  ctx.fillStyle = color;
                  ctx.strokeStyle = color;
                  ctx.beginPath();
                  ctx.arc(
                    point.x,
                    point.y,
                    5, // Adjust the point size as needed
                    0,
                    Math.PI * 2
                  );
                  ctx.closePath();
                  ctx.fill();
                  ctx.stroke();
                });
              },
            },
          ]}
        />
      </div>
    );
  };
  
  export default ScatterPlot;