import React, { Component } from 'react';
import './App.css';
// import Product from './components/Product';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      products : [
        {
          id: 1,
          name: 'iPhone X',
          price: 20000000,
          image: 'https://cdn.macrumors.com/article-new/2017/09/iphonexdesign-1-800x597.jpg',
          status: true
        },
        {
          id: 2,
          name: 'Samsung Galaxy Note 7',
          price: 20000000,
          image: 'https://s7d2.scene7.com/is/image/SamsungUS/Pdpkeyfeature-sm-g930tzdatmb-600x600-C1-062016?$product-details-jpg$',
          status: true
        },
        {
          id: 3,
          name: 'Oppo F1s',
          price: 20000000,
          image: 'https://my-live-02.slatic.net/p/2/oppo-f1s-selfie-expert-32gb-gold-1473903143-89584831-ddb747820966260bb10b56fcd237360b-product.jpg',
          status: true
        }
      ],
      isActive: true
    };

    // this.onSetState = this.onSetState.bind(this);
  }

  onSetState = () => {
    // if(this.state.isActive === true) {
    //   this.setState({
    //     isActive : false
    //   });
    // }else {
    //   this.setState({
    //     isActive : true
    //   });
    // }

    this.setState({
      isActive : !this.state.isActive
    });
  }

  render() {

    let elements = this.state.products.map((product, index) => {
      let result = '';
      if (product.status) {
        result =  <tbody key={product.id}>
                    <tr>
                      <td>{product.id}</td>
                      <td>{product.name}</td>
                      <td>
                        <span className="label label-success">{product.price}</span>
                      </td>
                    </tr>
                  </tbody>
      }
      return result;
    });

    return (
      <div>
        <nav className="navbar navbar-default" role="navigation">
          <div className="container-fluid">
            <div className="navbar-header">
              <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                <span className="sr-only">Toggle navigation</span>
                <span className="icon-bar" />
                <span className="icon-bar" />
                <span className="icon-bar" />
              </button>
              <a className="navbar-brand">Components</a>
            </div>
            <div className="collapse navbar-collapse navbar-ex1-collapse">
              <ul className="nav navbar-nav">
                <li className="active"><a>Home</a></li>
                <li><a>Abouts</a></li>
                <li><a>Products</a></li>
              </ul>
            </div>
          </div>
        </nav>
        
        
        <div className="row">
          <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1">
            <table className="table table-bordered table-hover">
              <thead>
                <tr>
                  <th>STT</th>
                  <th>Name</th>
                  <th>Price</th>
                </tr>
              </thead>
              {elements}
            </table>
            <br/>

            <button type="button" className="btn btn-primary" onClick={this.onSetState}>
              Active: {this.state.isActive === true ? 'true' : 'false'}
            </button>

            </div>
          </div>
      </div>
    );
  }
}

export default App;
