import './App.css';
import React, { Component } from 'react'
import Home from './Pages/Home';
import About from './Pages/About';
import NavigationBar, { NavigationBarType } from './NavigationBar';

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedNavigationType: undefined,
    };
  }

  render() {
    return (
      <div className="App">
        <NavigationBar
          onClick={(item) => {
            this.setState({ selectedNavigationType: item })
          }} /> 
          {this.getSelectedPage()}
      </div>
    );
  }

  getSelectedPage() {
    var type = this.state.selectedNavigationType

    if (type === undefined) {
      return <></>
    }
    switch (type) {
      case NavigationBarType.Home:
        return <Home />
      case NavigationBarType.About:
        return <About /> 
      default:
        return <div>
          {type}
        </div>;
    }
  }
}