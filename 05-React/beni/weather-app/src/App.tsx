import { ThemeProvider } from "./context/theme-context";
import { UnitProvider } from "./context/unit-context";
import { WeatherProvider } from "./context/weather-context";
import { BrowserRouter as Router } from "react-router-dom";
import { DayProvider } from "./context/day-context";
import { HourProvider } from "./context/hour-context";
import MainContainer from "./components/main-container/MainContainer";
import "./App.css";

function App() {
  return (
    <Router>
      <WeatherProvider>
        <ThemeProvider>
          <UnitProvider>
            <DayProvider>
              <HourProvider>
                <MainContainer />
              </HourProvider>
            </DayProvider>
          </UnitProvider>
        </ThemeProvider>
      </WeatherProvider>
    </Router>
  );
}

export default App;
