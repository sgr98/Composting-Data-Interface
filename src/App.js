import Interface from './Components/Interface';
import './App.css';
import react, { Component } from 'react';
import axios from 'axios';

import db from './data.json';

//console.log(data);

class App extends Component {
  // constructor(props) {
  //   super(props);
    
  //   this.state = {
  //     infos: {posts: []}
  //   };
  // }

  state = {
    infos: {data: { posts: [] } }
  }

  //Get HTTP URL JSON Data
  fetchJsonUrl = async () => {
    const res = await axios.get('http://192.168.0.137/');
    //console.log(res.data.posts);
    this.setState({ 
      infos: res
    });
    console.log(this.state.infos.data.posts);
  }

  // componentDidMount = async () => {
  //   await axios
  //     .get('http://192.168.0.138/')
  //     .then(({ data })=> {

  //       //console.log(data);
  //     	this.setState({ 
  //         infos: data
  //       });
  //       console.log(this.state.infos.posts);

  //     })
  //     .catch( (err) => { console.log(err) })
  // }
  
  render() {
    //const {infoarr} = this.state.infos.sensorValues;
    this.fetchJsonUrl();
    return (
      <div className="App" waitBeforeShow={500}>
        <Interface waitBeforeShow={5000} infos={this.state.infos.data.posts} />
      </div>
    );

  }
}

export default App;
