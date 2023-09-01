import React, { teamState } from "react";
import "./App.css";
import ScatterPlot from "./Components/ScatterPlot";
import { TeamData } from './Data';

function App() {
  const [teamData, setTeamData] = teamState({
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
      <div style={{ width: 700 }}>
        {/* <BarChart chartData={userData} /> */}
      </div>
      <div>
        <ScatterPlot chartData={teamData}/>
        <h1>THIS WILL BE AN NFL CHART</h1>
      </div>
    </div>
  );
}

// function App() {
//   const [userData, setUserData] = useState({
//     labels: UserData.map((data) => data.year),
//     datasets: [
//       {
//         label: "Users Gained",
//         data: UserData.map((data) => data.userGain),
//         backgroundColor: [
//           "rgba(75,192,192,1)",
//           "#ecf0f1",
//           "#50AF95",
//           "#f3ba2f",
//           "#2a71d0",
//         ],
//         borderColor: "black",
//         borderWidth: 2,
//       },
//     ],
//   });
export default App;