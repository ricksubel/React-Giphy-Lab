  
import React, { Component } from 'react';
import Search from './components/Search';

class Home extends Component {
    render() {
        return (
            <div className="container">
            <Search/>
            </div>
        );
    }
}

export default Home;