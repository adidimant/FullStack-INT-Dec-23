import { ThemeProvider } from "./context/theme-context";
import { UnitProvider } from "./context/unit-context";
import { WeatherProvider } from "./context/weather-context";
import Main from "./components/main/Main";
import "./app.css";

function App() {
  return (
    <WeatherProvider>
      <ThemeProvider>
        <UnitProvider>
          <Main />
        </UnitProvider>
      </ThemeProvider>
    </WeatherProvider>
  );
}

export default App;
