// Todo fct; destructuring props to use todo
const Todo = ({ todo }) => {
  return (
    //every todo takes in item = todo text
    <div>
      <h2>{todo.item}</h2>
    </div>
  );
};

export default Todo;
