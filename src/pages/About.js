import React, { Component } from 'react';
import News from '../components/News';

class About extends Component {
    render() {
        return (
            <div className="container">
                <h3>About</h3>
                <p>About Page</p>
                <News />
            </div>
        );
    }
}

export default About;