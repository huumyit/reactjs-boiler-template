import React, { Component } from 'react';

class TackItem extends Component {
  render() {

    var {task, index} = this.props;

    return (
        <tr>
            <td>{index}</td>
            <td>{task.name}</td>
            <td>
                <span className={ task.status === true ? 'label label-success' : 'label label-danger' } >{ task.status === true ? 'Active' : 'Disable' }</span>
            </td>
            <td>
                <button type="button" className="btn btn-large btn-default"><i className="fa fa-pencil-square-o" aria-hidden="true" />&nbsp; Edit</button>&nbsp;&nbsp;
                <button type="button" className="btn btn-large btn-danger"><i className="fa fa-trash" aria-hidden="true" />&nbsp; Delete</button>
            </td>
        </tr>
    );
  }
}

export default TackItem;
