import "./App.css";
import BasicLineChart from "./components/BasicLineChart";

function App() {
  return (
    <div>
      <BasicLineChart
        top={180}
        right={0}
        bottom={50}
        left={350}
        height={400}
        width={1000}
        fill={"red"}
      />
    </div>
  );
}

export default App;
