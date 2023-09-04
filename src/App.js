import React, { useState, useEffect } from "react";
import "./App.css";
import ScatterPlot from "./Components/ScatterPlot";
import { TeamData } from "./Data";


function App() {
  const [teamData, setTeamData] = useState({
    labels: [],
    datasets: [
      {
        label: "Team Data",
        data: [],
        backgroundColor: []
      },
    ],
  });

  useEffect(() => {
    // Create the dataset and labels
    const dataset = {
      label: "Team Data",
      data: TeamData.map((dataPoint) => ({ x: dataPoint.x, y: dataPoint.y })),
      backgroundColor: Array(TeamData.length).fill("rgba(75, 192, 192, 0.6)"),
    };

    const labels = TeamData.map((dataPoint) => dataPoint.team_name);

    // Update the state
    setTeamData({
      labels,
      datasets: [dataset],
    });
  }, []);


return (
  <div className="App">
      <div style={{ width: 1500 }}>
        <ScatterPlot chartData={teamData}/>
      </div>
    </div>
  );
}

export default App;