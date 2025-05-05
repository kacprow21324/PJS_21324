import './App.css';
import Hello from './Hello';
import HelloWithProps from './HelloWithProps';
import Counter from './Counter';
import InputTracker from './InputTracker';
import LoginStatus from './LoginStatus';
import TodoList from './TodoList';
import LoginForm from './LoginForm';


function App() {
  return (
    <div>
      <Hello/>
      
      <HelloWithProps name="Testownikow" />
      <HelloWithProps name="Rekordos" />
      <HelloWithProps name="Niewiadomski" />

      <Counter/>

      <InputTracker/>

      <LoginStatus isLoggedIn=""/>

      <TodoList todos={["Coś","Cosik","Jakiś Do testów"]}/>

      <LoginForm/>

    </div>
  );
}

export default App;
