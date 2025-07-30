import logo from './logo.svg';
import './App.css';

const bucketName = process.env.REACT_APP_BUCKET_NAME;
const queueName = process.env.REACT_APP_QUEUE_NAME;

function App() {
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
          Learn React
        </a>
        <p>
          Bucket Name: {bucketName ? bucketName : 'Not set'}
        </p>
        <p>
          Queue Name: {queueName ? queueName : 'Not set'}
        </p>
      </header>
    </div>
  );
}

export default App;
