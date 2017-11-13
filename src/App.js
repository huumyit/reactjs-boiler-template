import React, { Component } from 'react';
import './App.css';
import Product from './components/Product';

class App extends Component {
  render() {

    let products = [
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
        status: false
      },
      {
        id: 3,
        name: 'Oppo F1s',
        price: 20000000,
        image: 'https://my-live-02.slatic.net/p/2/oppo-f1s-selfie-expert-32gb-gold-1473903143-89584831-ddb747820966260bb10b56fcd237360b-product.jpg',
        status: true
      }
    ];

    let elements = products.map((product, index) => {
      let result = '';
      if (product.status) {
        result =  <Product
                    key={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                  />
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

        {elements}
      </div>
    );
  }
}

export default App;
