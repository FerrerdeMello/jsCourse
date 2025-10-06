import React, { Component } from 'react';

// Form
import { FaPlus } from 'react-icons/fa';

// Tarefas
import { FaEdit, FaWindowClose } from 'react-icons/fa';

import './Main.css';

export default class Main extends Component {
  state = {
    newTask: '',
    tasks: [ ],
    index: -1,   // se for diferente de -1 estarei editando alguma coisa
  };

  componentDidMount() {
    const tasks = JSON.parse(localStorage.getItem('tasks'));

    if (!tasks) return;

    this.setState({ tasks });
  }

  componentDidUpdate(prevProps, prevState){
    const { tasks } = this.state;

    if (tasks === prevState.tasks) return;
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  handleSubmit = (e) => {
    e.preventDefault();  // para o formulário não enviar
    const { tasks, index } = this.state;
    let { newTask } = this.state;
    newTask = newTask.trim();

    if(tasks.indexOf(newTask) !== -1) return;

    const newTasks = [...tasks];

    if(index === -1) {
      this.setState({
        tasks: [...newTasks, newTask],
        newTask: '',
      });
    } else {
      newTasks[index] = newTask;

      this.setState({
        tasks: [...newTasks],
        index: -1,
      });
    }
  }

  handleChange = (e) => {
    this.setState({
      newTask: e.target.value,
    })
  }

  handleEdit = (e, index) => {
    const { tasks } = this.state;

    this.setState({
      index,
      newTask: tasks[index],
    })
  }

  handleDelete = (e, index) => {
    const { tasks } = this.state;
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    this.setState({
      tasks: [...newTasks],
    });
  }

  render () {
    const { newTask, tasks } = this.state;

    return (
      <div className="main">
        <h1>Lista de Tarefa</h1>

        <form onSubmit={this.handleSubmit} action="#" className="form">
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
         {tasks.map((task, index) => (
          <li key={task}>
            {task}
            <span>
              <FaEdit
                onClick={(e) => this.handleEdit(e, index)}
                className="edit"
              />
              <FaWindowClose
                onClick={(e) => this.handleDelete(e, index)}
                className="delete"
              />
            </span>
          </li>
         ))}
        </ul>

        <h5 className="digited">Foi digitado::: {newTask}</h5>
      </div>
    );
  }
}
