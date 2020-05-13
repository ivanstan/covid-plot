import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {

    constructor() {
        super();
    }

    async getJson(url) {
        const result = await fetch(url);
        return await result.json();
    }

    componentDidMount() {
        Promise.all([this.getJson('measures.json'), this.getJson('stingency.json')]).then((a, b) => {

            console.log(a, b);

        });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <a
                        className="App-link"
                        href="https://reactjs.org"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Learn React
                    </a>
                </header>
            </div>
        );
    }
}

export default App;
