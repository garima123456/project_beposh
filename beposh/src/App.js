import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  useEffect(() => {
    fetch("/show_color").then(response =>
      response.json().then(data => {
        console.log(data)
      })
    );
  }, []);
  return (
    <div className="App">

    </div>
  );
}

export default App;
