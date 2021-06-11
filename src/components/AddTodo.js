import { useState } from 'react'; //import useState hook to use State

// AddTodo fct component; using onAdd props from top level
const AddTodo = ({ onAdd }) => {
  // name of State, item; setItem fct to update State
  const [item, setItem] = useState('');

  // onSubmit (click) handler fct
  const onSubmit = (e) => {
    // preventDefault called on event object to prevent browser reload/refresh
    e.preventDefault();

    //onAdd event prop with new item
    onAdd({ item });

    // updating State back to empty
    setItem('');
  };

  // AddToo returns a form with input and submit
  return (
    // onSubmit event prop takes in onSubmit fct
    <form onSubmit={onSubmit}>
      <label>Add Todo:</label>
      <input
        type="text"
        placeholder="Todo Item"
        //adding value of item aka text of todo
        value={item}
        // onChange event prop takes in event handler and setItem change of State
        onChange={(e) => setItem(e.target.value)}
      />
      <input type="submit" value="Add Todo" />
    </form>
  );
};

export default AddTodo;
