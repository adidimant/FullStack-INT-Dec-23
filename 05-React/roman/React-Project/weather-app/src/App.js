import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { WeatherProvider } from './components/WeatherContext';

const Home = lazy(() => import('./components/Home'));
const Advanced = lazy(() => import('./components/Advanced'));
const Hourly = lazy(() => import('./components/Hourly'));
const NextDay = lazy(() => import('./components/NextDay'));

function App() {
  return (
    <WeatherProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/hourly" element={<Hourly />} />
            <Route path="/advanced" element={<Advanced />} />
            <Route path="/nextday" element={<NextDay />} />
            <Route path="*" element={<h1>Page Not Found</h1>} />
          </Routes>
        </Suspense>
      </Router>
    </WeatherProvider>
  );
}

export default App;
