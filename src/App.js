import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Background from './components/background/BackgroundImage'

class App extends Component {

    render() {
        return (
            <div className="App">
                <Background>
                    <div className="App-header">
                        <img src={logo} className="App-logo" alt="logo"/>
                        <h2>Welcome to piboard</h2>
                    </div>
                </Background>
            </div>
        );
    }
}

export default App;
