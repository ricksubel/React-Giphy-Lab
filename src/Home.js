import React, { Component } from 'react';
import SearchContainer from './components/SearchContainer';
import './Home.css';

class Home extends Component {
    render() {
        return (
            <div>
                <div className="navbar">
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                        <ul>
                            <h3><a>Giphy Search</a></h3>
                            <p><a>Search</a></p>
                        </ul>
                    </nav>
                </div>
                <main>
                    <section className="jumbotron text-center">
                    <div className="container">
                        <h1 className="jumbotron-heading">Giphy Search</h1>
                        <p className="lead text-muted">The true source for all things giphy...</p>
                    </div>
                    </section>
                    <section className="container">
                    <SearchContainer/>
                    </section>
                </main>
            </div>
        );
    }
}

export default Home;
