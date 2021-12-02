import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './component/weather';
import AppRouter from "./config/router";

function App() {

  return (
    <div className="App">
   <div className="App-header">
   <AppRouter />
 
   </div>

    </div>
  );
}

export default App;