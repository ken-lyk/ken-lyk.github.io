import './App.css';
import React from 'react'
import Home from './Home';
import About from './About';

function App() {
  return (
    <div className="App">
      <h1>
        Testing on the CI/CD for React project
        <br/>
        WIP - Ken 
      </h1>

      <h1 className="text-5xl font-bold text-slate-500">
      Hello world!
    </h1>
      
      <Home/>
      <About/>
    </div>
  );
}

export default App;
