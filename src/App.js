import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import './App.css';


class App extends Component {


    render() {
        return (
            <div className="App">
                <AppBar
                    title="Leah's Portfolio"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <TextField
                    hintText="Hint Text"
                /><br />
                <br />
            </div>
        );
    }
}

export default App;
