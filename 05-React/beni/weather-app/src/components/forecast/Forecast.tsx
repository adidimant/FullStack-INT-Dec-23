import { memo } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import "./forecast.css";

function Forecast() {
  return (
    <Router>
      <section id="forecast">
        <Navbar />
        <Routes>
          <Route path="/" element={<>today</>} />
          <Route path="/tomorrow" element={<>Tomorrow</>} />
          <Route path="/in-2-days" element={<>In 2 Days</>} />
        </Routes>
      </section>
    </Router>
  );
}

export default memo(Forecast);
