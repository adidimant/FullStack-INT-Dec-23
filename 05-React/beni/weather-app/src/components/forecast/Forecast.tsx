import { memo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Today from "./components/today/Today";
import Week from "./components/week/Week";
import "./forecast.css";

function Forecast() {
  return (
    <Router>
      <section id="forecast">
        <Navbar />
        <Routes>
          <Route path="/" element={<Today />} />
          <Route path="/today" element={<Today />} />
          <Route path="/week" element={<Week />} />
        </Routes>
      </section>
    </Router>
  );
}

export default memo(Forecast);
