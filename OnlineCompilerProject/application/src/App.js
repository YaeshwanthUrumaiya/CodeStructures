import React, { Component } from 'react';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      code: '',
      output : '' 
    };
  }

  handleCodeChange = (e) => {
    this.setState({ code: e.target.value });
  };

  handleSumbit = async()=>{

    const payload = {
      language : 'cpp',
      code  : this.state.code
    };
    //const output = await axios.post("http://localhost:3000/run",payload)
    try{
    const {data} = await axios.post("http://localhost:3000/run",payload)
    this.setState({output : data.output})
    }catch(err){
      console.log(err.response)
    }
    
  }

  render() {
    return (
      <div className='app'>
        <div>
          <h1>Online code compiler</h1>
          <textarea
            rows="20"
            cols="75"
            value={this.state.code}
            onChange={this.handleCodeChange}
          ></textarea>
          <br></br>
          <button onClick={this.handleSumbit}>Submit</button>
          <p>{this.state.output}</p>
        </div>
      </div>
    );
  }
}

export default App;
