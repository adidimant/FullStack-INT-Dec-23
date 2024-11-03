import { useEffect } from "react";
import { ThemeProvider } from "./context/theme-context";
import { UnitProvider } from "./context/unit-context";
import Main from "./components/main/Main";
import "./app.css";

function App() {
  async function getInfo() {
    try {
      const response = await fetch("https://wttr.in/Tel-Aviv?format=j1");
      const json = await response.json();
      console.log(json);
    } catch (err) {
      console.error("Error fetching info:", err);
    }
  }

  useEffect(() => {
    getInfo();
  }, []);
  return (
    <ThemeProvider>
      <UnitProvider>
        <Main />
      </UnitProvider>
    </ThemeProvider>
  );
}

export default App;
