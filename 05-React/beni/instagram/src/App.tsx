import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Auth from "./components/pages/auth/Auth";
import Dashboard from "./components/pages/dashboard/Dashboard";
import "./App.css";

function App() {
  const signedOut = true;
  return (
    <Router>
      <Routes>
        {signedOut ? (
          <Route path="/*" element={<Auth />} />
        ) : (
          <Route path="/*" element={<Dashboard />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
