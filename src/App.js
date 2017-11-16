import React, { Component } from 'react';
import './App.css';
import TackForm from './components/TackForm';
import Control from './components/Control';
import TackList from './components/TackList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks : [],
      isDisplayForm: false,
      taskEditing: null
    };
  }

  componentWillMount() {
    if(localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      });
    }
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps);
  }

  onGenerateData = () => {
    var tasks = [
      {
        id: this.generateID(),
        name: 'Nguyen Van A',
        status: false
      },
      {
        id: this.generateID(),
        name: 'Nguyen Van B',
        status: true
      },
      {
        id: this.generateID(),
        name: 'Nguyen Van C',
        status: false
      }
    ];

    this.setState({
      tasks: tasks
    });

    // set localStorage on browser and convert object to JSON
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  // random key ID
  s4() {
    return Math.floor(( 1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID() {
    return (
      this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4()
    )
  }

  onToggleForm = () => {
    if (this.state.isDisplayForm && this.state.taskEditing !== null) {
      this.setState({
        isDisplayForm: true,
        taskEditing: null
      });
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditing: null
      });
    }
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  }

  onShowForm = () => {
    this.setState({
      isDisplayForm: true
    });
  }

  onSubmit = (data) => {
    var { tasks } = this.state; // tasks  = this.state.tasks;
    
    if (data.id === '') {
      data.id = this.generateID(); // task
      tasks.push(data);
    } else {
      // Editing
      var index = this.findIndex(data.id);
      tasks[index] = data;
    }
    
    this.setState({
      tasks: tasks,
      taskEditing: null
    });

    // Save tasks into localStorage
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  onUpdateStatus = (id) => {
    var {tasks} = this.state;
    var index = this.findIndex(id);
    if(index !== -1) {
      tasks[index].status = !tasks[index].status;
      this.setState({
        tasks: tasks
      });
      
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } 
  }

  findIndex = (id) => {
    var { tasks } = this.state;
    var result  = -1;

    tasks.forEach(function(task, index) {
      if(task.id === id) {
        result = index;
      }
    });
    return result;
  }

  onDelete = (id) => {
    var {tasks} = this.state;
    var index = this.findIndex(id);

    if(index !== -1) {
      // The splice() method adds/removes items to/from an array
      tasks.splice(index, 1);
      this.setState({
        tasks: tasks
      });
      
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } 
    this.onCloseForm();
  }

  onUpdate = (id) => {
    var {tasks} = this.state;
    var index = this.findIndex(id);
    var taskEditing  = tasks[index];

    this.setState({
      taskEditing: taskEditing
    });

    this.onShowForm();
  }
  

  render() {
    // parameter according to ES6
    var {tasks, isDisplayForm, taskEditing} = this.state; // var tasks = this.state.tasks
    var elmTaskForm = isDisplayForm 
        ? <TackForm 
            onCloseForm={this.onCloseForm} 
            onSubmit={this.onSubmit} 
            task={taskEditing}
          /> 
        : '';

    return (
      <div className="container mt-50">
          <div className="row">
            <div className={ isDisplayForm ? 'col-xs-4 col-sm-4 col-md-4 col-lg-4' : ''} >
              {/* <TackForm /> */}
              {elmTaskForm}
            </div>

            <div className={ isDisplayForm ? 'col-xs-8 col-sm-8 col-md-8 col-lg-8' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12'} >
              
              {/* <button 
                type="button" 
                className="btn btn-large btn-danger"
                onClick={this.onGenerateData}
              >
              Generate Data
            </button>
              <br/>
              <br/> */}
              
              <Control onToggleForm={this.onToggleForm} />

              <TackList 
                tasks={tasks}  
                onUpdateStatus={this.onUpdateStatus} 
                onDelete={this.onDelete}
                onUpdate={this.onUpdate}
              />
            </div>

          </div>
        </div>
    );
  }
}

export default App;
