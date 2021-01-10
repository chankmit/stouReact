import React, { Component } from 'react';

class Calulator extends Component {
    render() {
        return (
            <div>
                <h2>150.00 THB</h2>
                <hr/>
                <ul className="list-unstyled">
                    <li>
                        Americano X 1 = 45 THB &nbsp;
                        <button className="btn btn-danger">X</button>
                    </li>
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