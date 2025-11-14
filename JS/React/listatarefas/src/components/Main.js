import React, { Component } from 'react';
import './Main.css';
import Form from './Form';
import Tasks from './Tasks';

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

        <Form
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          newTask={newTask}
        />

        <Tasks
          tasks={tasks}
          handleEdit={this.handleEdit}
          handleDelete={this.handleDelete}
        />

        <h5 className="digited">Foi digitado::: {newTask}</h5>
      </div>
    );
  }
}
