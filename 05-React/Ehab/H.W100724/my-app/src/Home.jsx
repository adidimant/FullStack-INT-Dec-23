
import logo from './logo.svg';
import { React } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
  return (
    <>
      <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          </a>
          <div>
            <Link style={ { backgroundColor: 'red', color: 'white' }} to={'/companies'} >Show me Nasdaq Companies!</Link>
          </div>
      </header>
    </>
  );
}

export default Home;