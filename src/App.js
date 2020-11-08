import Interface from './Components/Interface';
import './App.css';
import data from './data.json';
import react, { Component } from 'react';

console.log(data);

class App extends Component {

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
