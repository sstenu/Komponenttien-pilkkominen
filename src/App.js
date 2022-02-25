import React, {useState} from 'react';
import './App.css';
import Todotable from './components/todotable';

function App() {
  const [olio, setOlio] = useState({desc:'', date: ''});
  const [todos, setTodos] = useState([]);

  const inputChanged = (event) => {
    setOlio({...olio, [event.target.name]: event.target.value});
  }

  const addTodo = (event) => {
    event.preventDefault();
    setTodos([...todos, olio]);
   
  }

  return (
    <div className="App">
      <form onSubmit={addTodo}>
        <label>Description:</label>
        <input type="text" name="desc" value={olio.desc} onChange={inputChanged}/>
        <label>Date:</label>
        <input type="text" name="date" value={olio.date} onChange={inputChanged}></input>
        <input type="submit" value="Add"/>
      </form>
      <Todotable todos={todos}/>
    </div>
  );
}

export default App;
