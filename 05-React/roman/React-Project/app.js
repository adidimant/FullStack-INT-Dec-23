import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { WeatherProvider } from './context/WeatherContext';

const Home = lazy(() => import('./components/Home'));
const Advanced = lazy(() => import('./components/Advanced'));

function App() {
  return (
    <WeatherProvider>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/advanced" component={Advanced} />
          </Switch>
        </Suspense>
      </Router>
    </WeatherProvider>
  );
}

export default App;
