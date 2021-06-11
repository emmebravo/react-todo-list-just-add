import Todo from './Todo'; //imports Todo component to reuse

// list fct to pass as component; destructure prop obj to use todos
const List = ({ todos }) => {
  return (
    <div>
      {/* creates a list of each todo using map method and add to Todo component */}
      {todos.map((todo) => (
        /* Todo component; using key todo.id prop to identify each item; todo prop to list each item */
        <Todo key={todo.id} todo={todo} />
      ))}
    </div>
  );
};

export default List;
