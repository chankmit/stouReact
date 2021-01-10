import React, { Component } from 'react';

class Calulator extends Component {
    constructor(props){
        super(props);
    }

    render() {
        const totalPrice = this.props.totalPrice;
        const orders = this.props.orders;
        return (
            <div>
                <h2>{totalPrice} THB</h2>
                <hr/>
                <ul className="list-unstyled">
                    {orders.map(item=>(
                    <li>
                        {item.product.productName} X {item.quantity} = {item.product.unitPrice*item.quantity} THB &nbsp;
                        <button className="btn btn-danger">X</button>
                    </li>
                    ))}
                </ul>
                <hr/>
                <button className="btn btn-success">CONFIRM</button> 
                &nbsp;
                <button className="btn btn-danger">CANCEL</button>
            </div>
        );
    }
}

export default Calulator;