import React, { Component } from 'react';

class Product extends Component {

  // constructor(props) {
  //   super(props);
  //   this.onAddToCart = this.onAddToCart.bind(this);
  // }

  // onAddToCart() {
  //   alert(this.props.name + '-' + this.props.price);
  // }

  onAddToCart = () => {
    alert(this.props.name + '-' + this.props.price);
  }

  render() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="thumbnail">
              <img alt={this.props.name} src={this.props.image} />
              <div className="caption">
                <h3>{this.props.name}</h3>
                <p>
                  {this.props.price} VND
                </p>
                <p>
                  <button type="button" className="btn btn-primary" onClick={ this.onAddToCart}>Add to cart</button>
                  <button type="button" className="btn btn-danger">Remove</button>
                </p>
              </div>
            </div>
          </div>
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <div className="thumbnail">
              <img alt={this.props.name} src={this.props.image} />
              <div className="caption">
                <h3>{this.props.name}</h3>
                <p>
                  {this.props.price} VND
                </p>
                <p>
                  <button type="button" className="btn btn-primary" onClick={ this.onAddToCart}>Add to cart</button>
                  <button type="button" className="btn btn-danger">Remove</button>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;


