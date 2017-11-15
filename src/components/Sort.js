import React, { Component } from 'react';

class Sort extends Component {
  render() {
    return (
        <div className="input-group">
            <div className="dropdown">
                <button id="dropdownMenu1" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"> Sort
                    &nbsp;&nbsp;<span className="caret" /></button>
                <ul className="dropdown-menu">
                <li><a className="sort_selected">A - Z</a></li>
                <li><a className="sort_selected">Z - A</a></li>
                </ul>
            </div>
        </div>
    );
  }
}

export default Sort;
