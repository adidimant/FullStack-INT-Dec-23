import {Link} from'react-router-dom';

function HomePage (){
    return <div> 
        <h1>
            Welcome to our Home Page!
        </h1>
        <Link to={'/account'}>Account</Link>
        </div>
        
}

export default HomePage;