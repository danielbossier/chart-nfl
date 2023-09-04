import React from 'react';
import { Scatter } from 'react-chartjs-2';
// eslint-disable-next-line
import { Chart as ChartJS } from 'chart.js/auto';
import { TeamData } from "../Data";

const ScatterPlot = ({ chartData }) => {
    const dataset = chartData.datasets[0]; // Assuming there's only one dataset
    
    // Create an array of image objects with custom pointStlye
    const images = dataset.data.map((dataPoint) => ({
        x: dataPoint.x,
        y: dataPoint.y,
        image: new Image(70, 70), // Adjust image size here
    }));

    // Load the images and set the source for each image
    images.forEach((image, index) => {
        image.image.src = TeamData[index].image; // Using the image path from Data
    });

    // Update the dataset's pointStyle Property
    dataset.pointStyle = images.map((image) => image.image);

    // Generate an array of random colors for each data point
    // const generateRandomColors = (numColors) => {
    //     const colors = [];
    //     for (let i = 0; i < numColors; i++) {
    //         const color = `rgba(${Math.floor(Math.random() * 256)}, ${Math.floor(
    //             Math.random() * 256
    //           )}, ${Math.floor(Math.random() * 256)}, 0.6)`;
    //         colors.push(color);
    //     }
    //     return colors;
    // };

    // const dataset = chartData.datasets[0]; // Assuming there is only one dataset

    // // Generate random colors for each data point
    // if (dataset.data.length > 0 && dataset.data.length !== dataset.backgroundColor.lenght) {
    //     dataset.backgroundColor = generateRandomColors(dataset.data.length);
    // }
    const options = {
        scales: {
        x: {
          min: -11,
          max: 11,
          title: {
            display: true,
            text: "How Good",
          },
          grid: {
            display: true,
            color: "rgba(0, 0, 0, 0.2)",
            borderColor: "rgba(0, 0, 0, 0.2)",
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
            color: "rgba(0, 0, 0, 0.2)",
            borderColor: "rgba(0, 0, 0, 0.2)",
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
  
    return <Scatter data={chartData} options={options} />;
  };
  
  export default ScatterPlot;