import React, { Component } from 'react';

class TackForm extends Component {

    onCloseForm = () => {
        this.props.onCloseForm();
    }

  render() {
    return (
        <div className="panel panel-info">
            <div className="panel-heading">
                <h3 className="panel-title">Add job
                 <i 
                    className="fa fa-times-circle pull-right"
                    aria-hidden="true"
                    onClick={this.onCloseForm}  
                  />
                </h3>
                
                </div>
                <div className="panel-body">
                <form>
                    <div className="form-group">
                    <label>Name: </label>
                    <input type="text" className="form-control" name="name" />
                    </div>
                    <div className="form-group">
                    <label>Status: </label>
                    <select className="form-control" name="status">
                        <option value="{true}">Active</option>
                        <option value="{false}">Disable</option>
                    </select>
                    </div>
                    <div className="form-group text-center">
                    <button type="button" className="btn btn-large btn-success">Save</button>&nbsp;
                    <button type="button" className="btn btn-large btn-danger">Cancle</button>&nbsp;
                    </div>
                </form>
            </div>
        </div>
    );
  }
}

export default TackForm;
