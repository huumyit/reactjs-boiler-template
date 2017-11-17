import React, { Component } from 'react';

class Sort extends Component {

	constructor(props) {
		super(props)
		this.state = {
			sort: {
				by: 'name',
				value: 1
			}
		}
	}
	

	onClick = (sortBy, sortValue) => {
		this.setState({
			sort: {
				by: sortBy,
				value: sortValue
			}
		});
	}
	
  render() {

		var { sort } = this.state;

    return (
        <div className="input-group">
            <div className="dropdown">
                <button id="dropdownMenu1" className="btn btn-primary dropdown-toggle" type="button" data-toggle="dropdown"> Sort
                    &nbsp;&nbsp;<span className="caret" /></button>
                <ul className="dropdown-menu">
									<li onClick={ () => {this.onClick('name', 1)}} >
										<a 
											role="button" 
											className={ 
												(sort.by === 'name' && sort.value === 1) 
												? 'sort-selected' : ''
											}
										>A - Z</a>
									</li>
									<li onClick={ () => {this.onClick('name', -1)}} >
										<a 
											role="button" 
											className={ 
												(sort.by === 'name' && sort.value === -1) 
												? 'sort-selected' : ''
											} 
										>
												Z - A
											</a>
									</li>
									<li role="separator" className="divider"></li>
									<li onClick={ () => {this.onClick('status', 1)}}>
										<a 
											role="button" 
											className={ 
												(sort.by === 'status' && sort.value === 1) 
												? 'sort-selected' : ''
											}
										>
											Active
										</a>
									</li>
									<li onClick={ () => {this.onClick('status', -1)}}>
										<a 
											role="button" 
											className={ 
												(sort.by === 'status' && sort.value === -1) 
												? 'sort-selected' : ''
											}
										>
											Deactive
										</a>
									</li>
                </ul>
            </div>
        </div>
    );
  }
}

export default Sort;
