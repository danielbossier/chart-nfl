import React, { useState, updatedData } from 'react';
import { Scatter } from 'react-chartjs-2';
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto';
import { TeamData } from "../Data";

const ScatterPlot = ({ chartData }) => {
    const dataset = chartData.datasets[0]; // Assuming there's only one dataset
    
    // To manage edited data
    const [editedData, setEditedData] = useState(TeamData);

    // Create an array of image objects with custom pointStlye
    const images = dataset.data.map((dataPoint) => ({
        x: dataPoint.x,
        y: dataPoint.y,
        image: new Image(80, 70), // Adjust image size here
    }));

    // Load the images and set the source for each image
    images.forEach((image, index) => {
        image.image.src = TeamData[index].image; // Using the image path from Data
    });

    // Update the dataset's pointStyle Property
    dataset.pointStyle = images.map((image) => image.image);

    const options = {
        scales: {
        x: {
          min: -11,
          max: 10,
          title: {
            display: true,
            text: "How Good",
          },
          grid: {
            display: true,
            // borderColor: "rgba(0, 0, 0, 1)", // Color of outside border of chart
            // borderWidth: 5, // Set the line width
            color: (context) => {
              // Check if it's the specific grid line you want to color differently
              if (context.tick.value === 0) {
                  return 'black'; // Set the color to black for the specific grid line
              } else {
                  return 'rgba(0, 0, 0, 0.2)'; // Default color for other grid lines
              }
            },
            borderDash: (context) => {
              // Check if it's the specific grid line you want to color differently
              if (context.tick.value === 0) {
                  return [0]; // Set the line type to solid for the specific grid line
              } else {
                  return [5]; // Dashed for other grid lines
              }
            },
          },
          ticks: {
            stepSize: 1, // Set the step size to 1 to display each integer value
          },
        },
        y: {
          min: -11.1,
          max: 11.5,
          title: {
            display: true,
            text: "How Like",
          },
          grid: {
            display: true,
            // borderColor: "rgba(0, 0, 0, 1)", // Color of outside border of chart
            // borderWidth: 5, // Set the line width
            color: (context) => {
              // Check if it's the specific grid line you want to color differently
              if (context.tick.value === 0) {
                  return 'black'; // Set the color to black for the specific grid line
              } else {
                  return 'rgba(0, 0, 0, 0.2)'; // Default color for other grid lines
              }
            },
            borderDash: (context) => {
              // Check if it's the specific grid line you want to alter dash
              if (context.tick.value === 0) {
                  return [0]; // Set the line type to solid for the specific grid line
              } else {
                  return [5]; // Dashed for other grid lines
              }
            },  
          },
          ticks: {
            stepSize: 1, // Set the step size to 1 to display each integer value
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

    // Handle data point editing
    const handleEdits = (index, field, value) => {
      let updatedData = [...editedData];
      updatedData[index][field] = parseInt(value);
      setEditedData(updatedData);
    };

    // Update chart data with edited data
    const updateChartData = () => {
      const updatedDataset = {
        ...dataset,
        data: editedData.map((dataPoint) => ({
          x: dataPoint.x,
          y: dataPoint.y,
        })),
      };
      const updatedLabels = editedData.map((dataPoint) => dataPoint.team_name);

      // Update state with edited data
      setEditedData(updatedData);

      // Update chart data
      chartData.labels = updatedLabels;
      chartData.datasets[0] = updatedDataset;
    };
  
    return (
    <div>
      {/* Render Chart */}
      <Scatter data={chartData} options={options} />
      {/* Input form for editing data */}
      {editedData.map((dataPoint, index) => (
        <div key={index}>
          <label>
            How Good for {dataPoint.team_name}:
            <input
              type="number"
              value={dataPoint.x}
              onChange={(e) => handleEdits(index, 'x', e.target.value)}
            />
          </label>
          <label>
          How Like for {dataPoint.team_name}:
            <input
              type="number"
              value={dataPoint.y}
              onChange={(e) => handleEdits(index, 'y', e.target.value)}
            />
          </label>
      </div>
      ))}

      {/* Button to apply changes and update chart */}
      <button onClick={updateChartData}>Update</button>

      </div>

    );
  };
  
  export default ScatterPlot;