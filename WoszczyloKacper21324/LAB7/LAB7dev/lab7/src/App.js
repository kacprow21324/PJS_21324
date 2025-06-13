import logo from './logo.svg';
import './App.css';
import ToggleDetails from './ToggleDetails';
import ScoreDisplay from './ScoreDisplay';
import TaskList from './TaskList';
import UserList from './UserList';
import TimerCounter from './TimerCounter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>

        <ToggleDetails/>

        <ScoreDisplay score={49}/>
        <ScoreDisplay score={51}/>
        <ScoreDisplay score={81}/>

        <TaskList/>

        <UserList/>

        <TimerCounter/>

      </header>
    
    </div>
  );
}

export default App;
