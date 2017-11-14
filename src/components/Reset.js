import React, { Component } from 'react';

class Reset extends Component {

  settingDefault = () => {
    this.props.onSettingDefault(true);
  }

  render() {
    return (
        <button type="button" className="btn btn-large btn-info" onClick={this.settingDefault} >Reset</button>
    );
  }
}

export default Reset;
