import React, { Component } from 'react';

import SearchColor from './SearchColor';
//import Search from './Search';
//import Artist from './Artist';
//import Tracks from './Tracks'
const API_ADDRESS = 'http://127.0.0.1:5000/'
var proxyUrl = 'https://cors-anywhere.herokuapp.com/'
class App extends Component {
  state = { lipcolor: null };
  componentDidMount() {
    this.search();
  }
  /*
  handleChangeComplete=(color,event)=> {
    this.setState({ lipcolor: color.hex });
    console.log(color.hex )
  }*/
  
  search = lipcolor => {
    fetch(`${API_ADDRESS}/show_color`, {
      headers : { 
        'Content-Type': 'application/json',
        'Accept': 'application/json'
       }

    }).then(response =>
      response.json().then(data => {
        console.log(data);
      })
    );
  }
  render() {
    return (
      <div>
        
        
        <h2>Target 2020</h2>

        <SearchColor search={this.search}/>
        
      </div>
    )
  }
}
export default App;