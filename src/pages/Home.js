import React, { Component } from 'react';
import News from '../components/News';
import User from '../components/User';

class Home extends Component {
    render() {
        return (
            <div className="container">
                <h2>Home</h2>
                <p>Hello Homepage</p>
                <User />

                <h2 className="mt-3">News</h2>
                <p>Updated</p>
                <News />
            </div>
        );
    }
}

export default Home;