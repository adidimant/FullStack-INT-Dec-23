import { memo, useContext } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeContext } from "../../context/theme-context";
import Navbar from "../navbar/Navbar";
import Forecast from "../forecast/Forecast";
import "./main.css";
import { DayProvider } from "../../context/day-context";

function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <Router>
      <DayProvider>
        <main className={`main ${theme}`}>
          <Navbar />
          <Routes>
            <Route path="/" element={<Forecast />} />
            <Route path="/tomorrow" element={<Forecast />} />
            <Route path="/in-2-days" element={<Forecast />} />
          </Routes>
        </main>
      </DayProvider>
    </Router>
  );
}

export default memo(Main);
