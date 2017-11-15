import React, { Component } from 'react';

class Search extends Component {
  render() {
    return (
        <div className="input-group">
            <input 
                type="text" 
                name="keyword" 
                className="form-control" 
                placeholder="Input key..." />
            <span className="input-group-btn"> 
            <button 
                type="button" 
                className="btn btn-large btn-block btn-default">
                <i className="fa fa-search" aria-hidden="true" /> Search</button>
            </span>
        </div>
    );
  }
}

export default Search;
