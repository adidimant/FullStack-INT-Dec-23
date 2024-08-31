import { memo, useMemo } from "react";
import { useThemeContext } from '../../../../contexts/theme-context'
import "./FormSeperator.css";
import '../../../../contexts/theme-style.css'

function FormSeperator() {
  const { theme } = useThemeContext();
	const isDark = useMemo(() => theme === 'dark', [theme]);
  return <div className={isDark ? 'form-seperator dark' : 'form-seperator light'}>OR</div>;
}

export default memo(FormSeperator);
