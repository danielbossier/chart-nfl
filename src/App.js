import React, { useState, useEffect } from "react";
import "./App.css";
import ScatterPlot from "./Components/ScatterPlot";
import { TeamData } from "./Data";


function App() {
  const [teamData, setTeamData] = useState({
    labels: [],
    datasets: [
      {
        label: "How Good",
        data: [],
      },
      {
        label: "How Like",
        data: [],
      },
    ],
  });

  useEffect(() => {
    // Update the teamData object using the data from TeamData
    setTeamData({
      labels: TeamData.map((data) => data.team),
      datasets: [
        {
          label: TeamData.map((data) => data.team),
          data: [
            TeamData.map((data) => data.x),
            TeamData.map((data) => data.y),
          ],
        },
        // {
        //   // label: "How Like",
        //   data: [
        //     TeamData.map((data) => data.y),
        //   ],
        // },
      ],
    });
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