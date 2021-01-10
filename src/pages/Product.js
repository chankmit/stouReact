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
        this.cancelOrder=this.cancelOrder.bind(this);
        this.deleteOrder=this.deleteOrder.bind(this);
        this.confirmOrder=this.confirmOrder.bind(this);
    }

    componentDidMount(){
        var url="http://localhost:8000/products"
        fetch(url, {method:'GET'}).then(res=>res.json()).then(result=>{
            console.log(result)
            this.setState({products:result.products})
        })
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

    cancelOrder(){
        this.setState({totalPrice:0, orders:[]})
    }

    deleteOrder(product){
        let findOrder = this.state.orders.find(item=>item.product.productId == product.productId);
        let resultOrder = this.state.orders.filter(item=>item.product.productId != product.productId);
        let totalPrice = this.state.totalPrice - (findOrder.quantity*parseInt(findOrder.product.unitPrice));

        this.setState({totalPrice:totalPrice, orders:resultOrder})
    }

    confirmOrder(){
        console.log('Confirm Order Clicked')

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
                        <Calulator 
                            onDeleteOrder={this.deleteOrder} 
                            onConfirmOrder={this.confirmOrder} 
                            onCancelOrder={this.cancelOrder} 
                            totalPrice={this.state.totalPrice} 
                            orders={this.state.orders} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Product;