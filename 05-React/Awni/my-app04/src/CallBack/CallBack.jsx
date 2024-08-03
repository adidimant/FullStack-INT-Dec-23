
import React, { useState, useCallback, useEffect } from 'react';

function CallBack() {
    const [count, setCount] = useState(1);

    const increment = useCallback(() => { // useCallback is a hook that returns a memoized version of the callback function that only changes if one of the dependencies has changed 
        setCount(prevCount => prevCount * 2);
    }, []);

    useEffect(() => {
        console.log('Component mounted');
        return () => {
            console.log('Component unmounted');
        };
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
}

export default CallBack;
