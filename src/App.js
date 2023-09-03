import React, { useState, useEffect } from "react";
import "./App.css";
import ScatterPlot from "./Components/ScatterPlot";
import { TeamData } from "./Data";


function App() {
  const [teamData, setTeamData] = useState({
    labels: [],
    datasets: [
      // {
      //   label: "How Good",
      //   data: [],
      // },
      // {
      //   label: "How Like",
      //   data: [],
      // },
    ],
  });

  useEffect(() => {
    console.log("Before data mapping:", teamData);
    // Iterate through each entry in TeamData and append to the existing data
    const dataset = {
      label: "Team Data",
      data: [],
      backgroundColor: [],
    };

    // Map the data from TeamData and populate the dataset
    TeamData.forEach((dataPoint) => {
      dataset.data.push({ x: dataPoint.x, y: dataPoint.y });
      dataset.backgroundColor.push("rgba(75, 192, 192, 0.6)"); // Optional point color
      teamData.labels.push(dataPoint.team);
    });

    // Update the teamData object with the dynamically set dataset
    setTeamData((prevData) => ({
      ...prevData,
      datasets: [dataset],
    }));

    console.log("After data mapping:", teamData);
  }, []); // Empty dependency array ensures the useEffect runs only once


return (
  <div className="App">
      <div style={{ width: 1200 }}>
        <ScatterPlot chartData={teamData}/>
      </div>
    </div>
  );
}

export default App;


// function App() {
//   // eslint-disable-next-line
//   const [teamData, setTeamData] = useState({
//     labels: TeamData.map((data) => data.team),
//     datasets: [
//       {
//         label: "How Good",
//         data: [
//           {x: 0, y: 20},
//           {x: 5, y: 15},
//           {x: 10, y: 10},
//           {x: 15, y: 5},
//           {x: 20, y: 0},
//         ] 
//       },
//       {
//         label: "How Like",
//         x: 15,
//         y: 10
//       }
//     ],
    
//     [
//       {
//         label: "How Good",
//         data: TeamData.map((data) => data.x),
//       },
//       {
//         label: "How Like",
//         data: TeamData.map((data) => data.y),
//       },
//     ],
//   });