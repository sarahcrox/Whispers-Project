import React, {Component} from 'react';
import Header from './Components/Header';
import LipsAreSealed from './Components/LipsAreSealed'
import Dossier from './Components/Dossier'
import './App.css';

import axios from 'axios'

class App extends Component{
  constructor(){
    super();
    this.state={
      secrets: []
    };
  }

componentDidMount(){
  axios.get('/api/secrets').then(res => {
    this.setState({
      secrets: res.data
    })
  })
}

  render(){
    let secretsMapped = this.state.secrets.map(secret => {
      // console.log(secret)
      return <div key={secret.id}>{secret.title}</div>
    })
    return(
      <div className="App">
        <Header />
        <div className="section-container">
        {secretsMapped}
        
          <div className="grey-body-container">
          </div>
          <div className="white-input-section">
            <input className='your-secret-here-1' placeholder= "             What's your deepest, darkest secret?"/>
            <button className='your-secret-here-2'>Tell Me</button>
          </div>
        </div>
        <LipsAreSealed />
          <div className="grey-body-container">
          </div>
        <Dossier />
        <div className="secret-answers">
        </div>
      </div>
    )
  }
}

export default App;
