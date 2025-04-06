import React from 'react';  // ייבוא React
import Posts from './components/Posts';  // ייבוא קומפוננטת הפוסטים

function App() {
    return (
        <div className="App">
            <h1>Welcome to the Posts App</h1>
            {/* כאן מציגים את קומפוננטת הפוסטים */}
            <Posts />
        </div>
    );
}

export default App;