import { useState } from 'react'; //import React's useState hook without classes

// imports components into App to use
import Header from './components/Header';
import List from './components/List';
import AddTodo from './components/AddTodo';

// fct that runs on the actual browser DOM
function App() {
  // State structure:
  // todos name of State; setTodos fct that updates State
  const [todos, setTodos] = useState([
    // todos item objects
    {
      id: 1,
      item: 'Drink Water',
    },
    {
      id: 2,
      item: 'Make Healthy Dinner',
    },
    {
      id: 3,
      item: 'Exercise',
    },
  ]);

  // add Todo
  const addTodo = (todo) => {
    const id = Math.ceil(Math.random() * 100000);

    // defines newTodo syntax: id, todo (spread out)
    const newTodo = { id, ...todo };

    //update State: spread what's on list ([...todos]); add newTodo
    setTodos([...todos, newTodo]);
  };

  // App component returns div with Header, AddTodo, & List components
  return (
    <div className="container">
      {/* Header component with title prop */}
      <Header title="Todo List" />
      {/* AddTodo component with onAdd event prop */}
      <AddTodo onAdd={addTodo} />
      {/* List component with todos props */}
      <List todos={todos} />
    </div>
  );
}

//exports App fct to be re/used
export default App;
