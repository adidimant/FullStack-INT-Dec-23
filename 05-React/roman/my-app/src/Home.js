import { React } from 'react';
import { Link } from 'react-router-dom';

function Home(){
    return(
        <>
<h1>Welcome to Home Page</h1>
<Link  to={'/test'} >Click to test</Link>
        </>
        
    )
}
export default Home;