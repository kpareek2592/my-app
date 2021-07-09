// import logo from './logo.svg';
import './App.css';
import Hello from './components/1/helloComponent'
import DisplayProps from './components/3/displayNameUsingProps';
import DemoParent from './components/2/demoParent';
import CounterWithVariable from './components/4/counterWithVariable';
import CounterWithState from './components/4/counterWithstate';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
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
      </header> */}
      <div>
        <Hello ></Hello>
        <DisplayProps name="Kaushal" lastName="Pareek"></DisplayProps>
      </div>
      <div>
        <DemoParent></DemoParent> 
      </div>
      <div>
        <CounterWithVariable></CounterWithVariable>
      </div>
      <div>
        <CounterWithState></CounterWithState>
      </div>
    </div>
  );
}

export default App;
