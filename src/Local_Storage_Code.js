import React, { useState, useEffect, useLayoutEffect } from "react";
import "./App.css";
import ScatterPlot from "./Components/ScatterPlot";
import { TeamData as initialTeamData } from "./Data";


function App() {
  const [teamData, setTeamData] = useState([]);
  
  const [chartData, setChartData] = useState({
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
      data: teamData.map((dataPoint) => ({ x: dataPoint.x, y: dataPoint.y })),
      backgroundColor: Array(teamData.length).fill("rgba(255,215,0, 0.8)"), // color for Label
    };

    const labels = teamData.map((dataPoint) => dataPoint.team_name);

    // Update the state
    setChartData({
      labels,
      datasets: [dataset],
    });

  }, [teamData]);
  
  useEffect(() => {
    let storedData = localStorage.teamData
    if (storedData) {
      storedData = JSON.parse(storedData)
      if (storedData.length > 0) {
        setTeamData(storedData)
      }
      else {
        setTeamData(initialTeamData)
      }
    }
    else {
      setTeamData(initialTeamData)
    }

  },[])

  useLayoutEffect(() => {
    localStorage.setItem("teamData", JSON.stringify(teamData))

  },[teamData])

return (
  <div className="App">
      <div className="scatter-container" style={{ height: "66vh", width: "66vw" }}>
        <ScatterPlot
          chartData={chartData}
          teamData={teamData}
          setTeamData={setTeamData}
          />
      </div>
    </div>
  );
}

export default App;