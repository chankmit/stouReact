import React, { Component } from 'react';

class Covid extends Component {
    constructor(){
        super();
        this.state=({covid:[]})
    }

    componentDidMount(){
        var url="https://covid19.th-stat.com/api/open/today";
        fetch(url, {method:'GET'}).then(res=>res.json()).then(result=>{
            console.log(result)
            this.setState({covid:result})
        })
    }

    render() {
        return (
            <div className="container">
                <h2>Covid 2021</h2>
                <p>สถานการณ์การระบาดของไวรัสโควิด 2019</p>
                <p>Updated : {this.state.covid.UpdateDate}</p>
                <div className="row">
                    <div className="col-md-3">
                        <div class="card text-white bg-danger mb-3">
                        <div class="card-header">ผู้ติดเชื้อสะสม</div>
                        <div class="card-body">
                            <h5 class="card-title">{this.state.covid.Confirmed} คน</h5>
                            <p class="card-text">เพิ่มขึ้น + {this.state.covid.NewConfirmed} คน</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card text-white bg-success mb-3">
                        <div class="card-header">ผู้ติดเชื้อสะสม</div>
                        <div class="card-body">
                            <h5 class="card-title">{this.state.covid.Confirmed} คน</h5>
                            <p class="card-text">เพิ่มขึ้น + {this.state.covid.NewConfirmed} คน</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card text-white bg-warning mb-3">
                        <div class="card-header">ผู้ติดเชื้อสะสม</div>
                        <div class="card-body">
                            <h5 class="card-title">{this.state.covid.Confirmed} คน</h5>
                            <p class="card-text">เพิ่มขึ้น + {this.state.covid.NewConfirmed} คน</p>
                        </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div class="card text-white bg-info mb-3">
                        <div class="card-header">ผู้ติดเชื้อสะสม</div>
                        <div class="card-body">
                            <h5 class="card-title">{this.state.covid.Confirmed} คน</h5>
                            <p class="card-text">เพิ่มขึ้น + {this.state.covid.NewConfirmed} คน</p>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Covid;