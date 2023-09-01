import React, { useState } from "react";
import "./App.css";
import ScatterPlot from "./Components/ScatterPlot";
import { TeamData } from "./Data";

function App() {
  // eslint-disable-next-line
  const [teamData, setTeamData] = useState({
    labels: TeamData.map((data) => data.team),
    datasets: [
        {
            label: "How Good",
        data: TeamData.map((data) => data.howGood),
      },
      {
        label: "How Like",
        data: TeamData.map((data) => data.howLike),
      },
    ],
  });

return (
  <div className="App">
      {/* <div style={{ width: 700 }}>
        <BarChart chartData={userData} />
      </div> */}
      <div style={{ width: 1200 }}>
        <ScatterPlot chartData={teamData}/>
        <h1>THIS WILL BE AN NFL CHART</h1>
      </div>
    </div>
  );
}

export default App;