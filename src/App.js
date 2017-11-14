import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      txtName: 'Nguyen Van A',
      txtPassword: '1234',
      txtDesc: 'Hello Nguyen Van A',
      sltGender: 1,
      rdLang: 'en',
      chbStatus: true
    };
  }

  onHandleChange = (event) => {
    var target = event.target;
    var name = target.name; // get txtName, txtPassword
    var value = target.type === 'checkbox' ? target.checked : target.value;

    this.setState({
      [name] : value
    });
  }

  onHandleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  render() {
    return (
      <div className="container mt-50">
        <div className="row">
          <div className="col-xs-8 col-sm-8 col-md-8 col-md-offset-2">

            <div className="panel panel-primary">
              <div className="panel-heading">
                <h3 className="panel-title">React Js Form</h3>
              </div>
              <div className="panel-body">
                <form onSubmit={this.onHandleSubmit} >
                  <div className="form-group">
                    <label>Username: </label>
                    <input
                      type="text"
                      className="form-control"
                      name="txtName"
                      value={this.state.txtName}
                      onChange={this.onHandleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Password: </label>
                    <input
                      type="password"
                      className="form-control"
                      name="txtPassword"
                      value={this.state.txtPassword}
                      onChange={this.onHandleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Description: </label>
                    <textarea
                      rows="3"
                      className="form-control"
                      name="txtDesc"
                      value={this.state.txtDesc}
                      onChange={this.onHandleChange}
                    >
                    </textarea>
                  </div>

                  <div className="form-group">
                    <label>Gender: </label>
                    <select
                      className="form-control"
                      name="sltGender"
                      value={this.state.sltGender}
                      onChange={this.onHandleChange}
                    >
                      <option value={0}>Female</option>
                      <option value={1}>Male</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>languages: </label>
                    <div className="radio">
                      <label>
                        <input
                          type="radio"
                          name="rdLang"
                          value="vi"
                          onChange={this.onHandleChange}
                          checked={this.state.rdLang === 'vi'}
                        />
                        Vietnamese
                      </label>&nbsp;&nbsp;&nbsp;
                      <label>
                        <input
                          type="radio"
                          name="rdLang"
                          value="en"
                          onChange={this.onHandleChange}
                          checked={this.state.rdLang === 'en'}
                        />
                        English
                      </label>
                    </div>
                  </div>

                  <div className="form-group">
                    <div className="checkbox">
                      <label>
                        <input
                          type="checkbox"
                          name="chbStatus"
                          value={true}
                          onChange={this.onHandleChange}
                          checked={this.state.chbStatus === true}
                        />
                          Status
                      </label>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary">Save</button>&nbsp;
                  <button type="reset" className="btn btn-danger">Reset</button>
                </form>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default App;
