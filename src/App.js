import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends Component {
  state ={
    body : []
  }
  componentDidMount = () => {
    
  }
  clickMe = () => {
    axios.get('http://jsonplaceholder.typicode.com/posts').then((response)=>{
      this.setState({
        body : response.data
      })
    }).catch(err => {
      console.log(err);
    })
  }
  render() {
    const data = this.state.body.map((data,index)=>{
      return (
        <p key={index}>{data.body}</p>
      )
    })
    return (
      <div className="App">
      <button onClick={this.clickMe}>Click me</button>
        {
          data ? data : ''
        }
      </div>
    );
  }
}

export default App;
