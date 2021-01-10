import React, { Component } from 'react';
import Calulator from '../components/Calulator';

class Product extends Component {

    constructor(){
        super();
        this.state={
            date: new Date(),
            products:[
                {productId:1, productName:'Americano', unitPrice:'45', thumbnail:'images/am.jpg'},
                {productId:2, productName:'Caputino', unitPrice:'50', thumbnail:'images/es.jpg'}
            ]
        }
        setInterval(()=>this.tick(), 1000)
    }

    tick(){
        this.setState({date: new Date()})
    }

    render() {
        return (
            <div className="container">
                <h2>Products</h2>
                <p>รายการสินค้า</p>
                <div className="row">
                    <div className="col-md-8">

                    </div>
                    <div className="col-md-4 text-right">
                        <h3>
                        {this.state.date.toLocaleDateString()}
                        &nbsp;
                        {this.state.date.toLocaleTimeString()}
                        </h3>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            {this.state.products.map(item=>(
                                <div className="col-md-3 col-sm-6">
                                    <img src={item.thumbnail} className="img-thumbnail" />
                                    <h5>{item.productName}</h5>
                                    <p>{item.unitPrice} THB</p>
                                    <button className="btn btn-success btn-sm">(+) ADD TO CARD</button>
                                </div>
                            ))}
                        </div> 
                    </div>
                    <div className="col-md-4">
                        <Calulator />
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;