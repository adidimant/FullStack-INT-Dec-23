import './Test.css';
import Images from "./Images";
import { Link } from 'react-router-dom';
function Test(){
    return (<>
         <div className="test">Test Page + image</div>
         <Images />
         <br/>
         <Link  to={'/'} >Home</Link>
    </>
   
    )

}
export default Test;