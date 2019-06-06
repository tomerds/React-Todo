// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';

import Todo from './Todo';


// <TodoList /> receives your Todos array and iterates over the list generating a new <Todo /> for each element in the array.


const TodoList = props => {
  const todoList = props.data.map(element => <li>{element.task}</li>);

  return (
    <Todo todoList={todoList} />
  );
};

export default TodoList;

// const TodoList = props => {
//   const todoList = props.data.map(element => <li>{element.task} <button onClick={props.onClick}>Completed?</button> </li>);

//   return (
//     <Todo todoList={todoList} />
//   );
// };

// export default TodoList;