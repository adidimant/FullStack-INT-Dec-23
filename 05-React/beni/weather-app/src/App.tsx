import { ThemeProvider } from "./context/theme-context";
import Main from "./components/main/Main";
import "./app.css";

function App() {
  return (
    <ThemeProvider>
      <Main />
    </ThemeProvider>
  );
}

export default App;
