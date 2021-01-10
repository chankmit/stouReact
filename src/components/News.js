import React, { Component } from 'react';

class News extends Component {
    constructor(){
        super();
        this.state ={
            news: []
        }
    }
    
    componentDidMount(){
        var apiurl="http://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=176ab3b50a584b7bb4c825bc236f6b32";
        fetch(apiurl, {method:'GET'}).then(res=>res.json()).then(result=>{
            console.log(result);
            this.setState({news:result.articles})
        })
    }

    render() {
        return (
            <div className="row">
                {this.state.news.map(item=>( 
                    <div className="col-md-4 mt-2"> 
                        <div class="card">
                            <a href={item.url} target="_blank">
                                <img src={item.urlToImage} class="card-img-top" alt="..."/>
                            </a>
                            <div class="card-body">
                                <h5 class="card-title">{item.title}</h5>
                                <p class="card-text">{item.description}</p> 
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        );
    }
}

export default News;