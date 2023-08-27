import React, { teamState } from "react";
import "./App.css";
import ScatterPlot from "./Components/ScatterPlot";
import {TeamData} from './Data'

function App() {
  const [teamData, /*setTeamData*/] = teamState({
    labels: TeamData.map((data) => data.team),
    datasets: [
      {
        label: 'X axis?',
        data: TeamData.map((data) => data.howGood),
      },
      {
        label: 'Y axis?',
        data: TeamData.map((data) => data.howLike),
      },
    ],
  });

  return (
    <div className="App">
      <ScatterPlot chartData={teamData}/>
    </div>
  );
}

export default App;