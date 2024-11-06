import { ThemeProvider } from "./context/theme-context";
import { UnitProvider } from "./context/unit-context";
import { WeatherProvider } from "./context/weather-context";
import { BrowserRouter as Router } from "react-router-dom";
import { DayProvider } from "./context/day-context";
import Main from "./components/main/Main";
import "./app.css";

function App() {
  return (
    <Router>
      <WeatherProvider>
        <ThemeProvider>
          <UnitProvider>
            <DayProvider>
              <Main />
            </DayProvider>
          </UnitProvider>
        </ThemeProvider>
      </WeatherProvider>
    </Router>
  );
}

export default App;
