import React from 'react';

import TodoForm from './components/TodoComponents/TodoForm';
import TodoList from './components/TodoComponents/TodoList';

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state

  constructor() {
    super();
    this.state = {
      todoData: [
        {
          task: 'Organize Garage',
          id: 1528817077286,
          completed: false
        },
        {
          task: 'Get Lunch',
          id: 1528817077287,
          completed: true
        },
      ],
      task: '',
      // id: '',
      // completed: false,
    }
  }

  updateHolder = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  // updateList = event => {
  //   event.preventDefault();

  //   const newObj = {
  //     message: this.state.message
  //   };

  //   this.setState({
  //     list: [...this.state.list, newObj]
  //   });
  // };

  updateList = event => {
    event.preventDefault();

    const newObj = {
      task: this.state.task,
      id: 1,
      completed: false
    }

    this.setState({
      todoData: [...this.state.todoData, newObj]
    });
  };

  //This sets completed to true on click

  // onClickTrue = event => {
  //   event.preventDefault();
  //   this.setState({
  //     completed: !this.state.clicked
  //   })
  // }



  render() {
    return (
      <div className="app-container">
        <h1>To do List:</h1>
        <TodoList data={this.state.todoData} />
        <TodoForm updateTodoItem={this.updateHolder} todoItem={this.state.task} updateList={this.updateList} />
      </div>
    );
  }
}

export default App;
