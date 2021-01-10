import React, { Component } from 'react';

class User extends Component {
    constructor(){
        super();
        this.state ={
            users: [
                {id:1, name:"Wichan", detail:"aa", image:"images/pic1.jpg"},
                {id:2, name:"Prayut", detail:"bb", image:"images/pic2.jpg"},
                {id:3, name:"Pravit", detail:"cc", image:"images/pic3.jpg"},
                {id:4, name:"Private", detail:"cc", image:"images/pic4.jpg"}
            ]
        }
    }
    
    render() {
        return (
            <div className="row">
                {this.state.users.map(item=>( 
                    <div className="col-md-4 mt-2"> 
                        <div class="card">
                            <img src={item.image} class="card-img-top" alt="..."/>
                            <div class="card-body">
                                <h5 class="card-title">{item.name}</h5>
                                <p class="card-text">{item.detail}</p> 
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default User;