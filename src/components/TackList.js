import React, { Component } from 'react';
import TackItem from './TackItem';

class TackList extends Component {
  render() {

    var { tasks } = this.props; // var tasks = this.props.tasks;
    var elmTasks = tasks.map((task,index) => {
        return (
            <TackItem 
                key={task.id} 
                index={index} 
                task={task} 
                onUpdateStatus={this.props.onUpdateStatus}
                onDelete={this.props.onDelete}
                onUpdate={this.props.onUpdate}
             />
        );
    });
    return (
        <table className="table table-bordered table-hover">
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Name</th>
                    <th>Status</th>
                    <th>Active</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td />
                    <td>
                        <div className="input-group">
                            <input type="text" className="form-control" />
                        </div>
                    </td>
                    <td>
                        <select className="form-control" name="status">
                            <option value={true}>All</option>
                            <option value={true}>Hide</option>
                            <option value={false}>Show</option>
                        </select>
                    </td>
                    <td />
                </tr>

                {/* List item */}
                {elmTasks}
            </tbody>
        </table>
    );
  }
}

export default TackList;
