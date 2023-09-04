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
      label: "Your Rankings",
      data: TeamData.map((dataPoint) => ({ x: dataPoint.x, y: dataPoint.y })),
      backgroundColor: Array(TeamData.length).fill("rgba(255,215,0, 0.8)"), // color for Label
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
      <div className="scatter-container" style={{ width: 1500 }}>
        <ScatterPlot chartData={teamData}/>
      </div>
    </div>
  );
}

export default App;