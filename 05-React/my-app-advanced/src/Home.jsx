
import logo from './logo.svg';
import { React } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function ListItem({ value }) {
  return <li className='student-list-item'>{value}</li>;
}

function StudentList({ students }) {
  return (
    <ul className='student-list'>
          {
            students.map((item) => {
              return <ListItem key={item} value={item}></ListItem>
            })
          }
    </ul>
  );
}

function Home({ prop1, prop2 }) {
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
            Learn React with {prop1} & {prop2.join(', ')}
          </a>
          The random students for today are:
          <StudentList students={prop2}/>
          <div>
            <Link
              style={{ backgroundColor: 'red', color: 'white' }}
              to={'/companies'}
            >
              Show me Nasdaq Companies!
            </Link>
          </div>
      </header>
    </>
  );
}

export default Home;