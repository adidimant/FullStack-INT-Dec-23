import logo from './logo.svg';
import './App.css';

function ListItem({ value }) {
  return <li className='student-list-item'>{value}</li>;
}

export function StudentList({ students }) {
  return (
    <ul className='student-list'>
          {
            students.map((item) => {
              return <ListItem value={item}></ListItem>
            })
          }
    </ul>
  );
}

function App({ prop1, prop2, prop3 }) {
  const a1 = 7;

  if (a1 > 8) {
    return (<div>No data</div>);
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
          Learn React with {prop1} & {prop2.join(', ')}
        </a>
        The random students for today are:
        <StudentList students={prop2} />
      </header>
    </div>
  );
}

export default App;
