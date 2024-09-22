import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'; // ייבוא קובץ CSS אם קיים, או שתוכל להסיר שורה זו
import App from './App'; // ייבוא קומפוננטת האב App

ReactDOM.render(
    <React.StrictMode>
        <App />  {/* הצגת קומפוננטת App בתוך האלמנט root */}
    </React.StrictMode>,
    document.getElementById('root') // מחפש אלמנט עם id בשם 'root'
);