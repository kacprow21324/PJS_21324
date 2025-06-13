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
        <h1>Laboratorium 8</h1>
        <h2>Zadanie 1.</h2>
        <ToggleDetails/>

        <h2>Zadanie 2.</h2>
        <ScoreDisplay score={49}/>
        <ScoreDisplay score={51}/>
        <ScoreDisplay score={81}/>

        <h2>Zadanie 3.</h2>
        <TaskList/>

        <h2>Zadanie 4.</h2>
        <UserList/>

        <h2>Zadanie 5.</h2>
        <TimerCounter/>

      </header>
    
    </div>
  );
}

export default App;
