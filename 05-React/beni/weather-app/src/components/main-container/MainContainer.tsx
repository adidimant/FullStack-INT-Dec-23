import { memo, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { ThemeContext } from "../../context/theme-context";
import Navbar from "../navbar/Navbar";
import Forecast from "../forecast/Forecast";
import "./mainContainer.css";

function MainContainer() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`main ${theme}`}>
      <Navbar />
      <Routes>
        <Route path="/" element={<Forecast />} />
        <Route path="/tomorrow" element={<Forecast />} />
        <Route path="/in-2-days" element={<Forecast />} />
      </Routes>
    </main>
  );
}

export default memo(MainContainer);
