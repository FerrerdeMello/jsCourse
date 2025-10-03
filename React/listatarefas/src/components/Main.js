import React, { Component } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [
      'Make coffee',
      'Drink Water',
      'Study',
    ],
  };

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    })
  }

  render () {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefa</h1>

        <form action="#" className="form">
          <input
            onChange={this.handleChange}
            type="text"
            value={newTask}
          />
          <button type="submit">
            <FaPlus></FaPlus>
          </button>
        </form>

        <ul className="tasks">
         {tasks.map((task) => (
          <li key={task}>
            {task}
            <div>
              <FaEdit className="edit" />
              <FaWindowClose className="delete" />
            </div>
          </li>
         ))}
        </ul>

        <h5 className="digited">Foi digitado::: {newTask}</h5>
      </div>
    );
  }
}
