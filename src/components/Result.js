import React, { Component } from 'react';

class Result extends Component {

  setStyle() {
    return {
      color: this.props.color,
      borderColor: this.props.color,
      fontSize: this.props.fontSize
    };
  }

  render() {
    return (
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <p>Color: {this.props.color} ,  Fontsize: {this.props.fontSize}px</p>
            <div className="content" style={this.setStyle()}>
                Text default
            </div>
        </div>
    );
  }
}

export default Result;
