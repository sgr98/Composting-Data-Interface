import Interface from './Components/Interface';
import './App.css';
import data from './data.json';
import react, { Component } from 'react';
import axios from 'axios';

console.log(data);

class App extends Component {

  
  //Get HTTP URL JSON Data
  // fetchJsonUrl = () => {
  //   const res = axios.get('');
  // }

  state = {
    infos : data
  }
  
  render() {

    return (
      <div className="App">
        <Interface infos={this.state.infos}/>
      </div>
    );

  }
}

export default App;
