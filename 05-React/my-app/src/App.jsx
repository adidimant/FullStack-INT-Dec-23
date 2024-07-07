import logo from './logo.svg';
import './App.css';

function App({ prop1, prop2, prop3 }) {
  const a1 = 7;

  if (a1 > 8) {
    return (<div>No data</div>)
  }

  return (
    <div className="App">
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
          Learn React with {prop1} & {prop2}
        </a>
      </header>
    </div>
  );
}

export default App;
