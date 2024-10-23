import { memo, useContext } from "react";
// import { useTheme } from "../../context/theme-context";
import Aside from "../aside/Aside";
import Forecast from "../forecast/Forecast";
import "./main.css";
import { ThemeContext } from "../../context/theme-context";

function Main() {
  const { theme } = useContext(ThemeContext);

  return (
    <main className={`main ${theme}`}>
      <Aside />
      <Forecast />
    </main>
  );
}

export default memo(Main);
