import logo from './logo.svg';
import './App.css';
import FormUseState from './components/FormUseState';
import FormUseReducer from './components/FormUseReducer';
import TogglePassword from './components/TogglePassword';
import TogglePasswordUseReducer from './components/TogglePasswordUseReducer';
import ToDoList from './components/ToDoList';
import ToDoListReducer from './components/ToDoListReducer';
import ActiveTab from './components/ActiveTab';
import ActiveTabUseReducer from './components/ActiveTabUseReducer';

function App() {
  return (
    <div className="App">
    <ActiveTabUseReducer />
    </div>
  );
}

export default App;
