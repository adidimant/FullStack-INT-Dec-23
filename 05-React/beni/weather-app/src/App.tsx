import Aside from "./components/aside/Aside";
import Forecast from "./components/forecast/Forecast";
import "./app.css";

function App() {
  const theme = "";
  return (
    <main className={`main ${theme}`}>
      <Aside />
      <Forecast />
    </main>
  );
}

export default App;
