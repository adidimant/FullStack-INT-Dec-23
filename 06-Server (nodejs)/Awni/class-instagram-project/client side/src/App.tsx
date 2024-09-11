import './App.css';
import ThemeProvider from './contexts/theme-context/theme-context';
import UserProvider from './contexts/islogin-context/IsLogin';
import MainAppContent from './app-components/MainAppContent';



function App() {

  

  return (
    <ThemeProvider>
      <UserProvider>
        <MainAppContent />
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
