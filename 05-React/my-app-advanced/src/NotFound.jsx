import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div style={{textAlign: 'center', fontSize: '24px', animation: 'spin 2s linear infinite'}}>
      <h1>Page not exist - 404</h1>
      <span style={{fontSize: '48px', display: 'inline-block'}}>🤪</span>
      <br />
      <Link to={'/'}>Return back home</Link>
    </div>
  );
}

export default NotFound;