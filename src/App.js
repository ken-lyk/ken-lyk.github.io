import './App.css'; 
import React, { Component } from 'react'
import Home from './Pages/Home';
import About from './Pages/About';
import NavigationBar from './NavigationBar';

export default class App extends Component {
    render() {
      return (
        <div className="App">
          <NavigationBar />
          <h1 className="text-5xl font-bold text-slate-500">
          Hello world!
        </h1>
          
          <Home/>
          <About/>
        </div>
      );
    }
}