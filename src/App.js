import "./App.css";
import ScatterPlot from "./Components/ScatterPlot";
import {TeamData} from './Data'

function App() {
  const [teamData, setTeamData] = teamState({
    labels: TeamData.map((data) => data.team),
    datasets: [
      {
        label: /*label*/,
        data: TeamData.map((data) => data.howGood),
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