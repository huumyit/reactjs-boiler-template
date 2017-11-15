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
      isDisplayForm: false
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
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    });
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    });
  }

  render() {
    // parameter according to ES6
    var {tasks, isDisplayForm} = this.state; // var tasks = this.state.tasks
    var elmTaskForm = isDisplayForm ? <TackForm onCloseForm={this.onCloseForm} /> : '';

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

              <TackList tasks={tasks} />
            </div>

          </div>
        </div>
    );
  }
}

export default App;
