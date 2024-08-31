import { ReactNode, memo, useMemo } from "react";
import LeftNavbar from "../components/LeftNavbar/LeftNavbar";
import PostsMainContent from './PostsMainContent/PostsMainContent';
import { useThemeContext } from "../../../contexts/theme-context";
import './PostsPage.css';
import '../../../contexts/theme-style.css'



function PostsPage(): ReactNode {
  const { theme } = useThemeContext();
	const isDark = useMemo(() => theme === 'dark', [theme]);
  return (
    <div className= {isDark ? 'auth-page-container dark' : 'auth-page-container light'}>
      <LeftNavbar />
      <PostsMainContent/>
    </div>
  );
}

export default memo(PostsPage);
