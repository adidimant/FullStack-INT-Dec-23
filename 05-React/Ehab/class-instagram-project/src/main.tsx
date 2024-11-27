import ReactDOM from 'react-dom/client';
import App from './App';
import UserProvider from './contexts/User-Context.js';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <>
    <UserProvider>
        <App />
    </UserProvider>
    </>
    
);