import React, { Component } from 'react';
import Calulator from '../components/Calulator';

class Product extends Component {

    constructor(){
        super();
        this.state={
            date: new Date(),
            totalPrice:0,
            orders:[],
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

    addOrder(product){
        console.log(product)
        let findOrder = this.state.orders.find(item=>item.product.productId == product.productId);
        if(findOrder) {
            findOrder.quantity++;
        } else {
            this.state.orders.push({product:product, quantity:1})
        }
        const totalPrice = this.state.totalPrice+parseInt(product.unitPrice);
        console.log('ราคา '+totalPrice)
        this.setState({totalPrice: totalPrice, orders:this.state.orders});
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
                <hr/>
                <div className="row">
                    <div className="col-md-8">
                        <div className="row">
                            {this.state.products.map(item=>(
                                <div className="col-md-3 col-sm-6">
                                    <img src={item.thumbnail} className="img-thumbnail" />
                                    <h5>{item.productName}</h5>
                                    <p>{item.unitPrice} THB</p>
                                    <button onClick={()=>this.addOrder(item)} className="btn btn-success btn-sm">(+) ADD TO CARD</button>
                                </div>
                            ))}
                        </div> 
                    </div>
                    <div className="col-md-4">
                        <Calulator totalPrice={this.state.totalPrice} orders={this.state.orders} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;