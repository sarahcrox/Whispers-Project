import React, {Component} from 'react';
import Header from './Components/Header';
import LipsAreSealed from './Components/LipsAreSealed'
import Dossier from './Components/Dossier'
import './App.css';

class App extends Component{
  constructor(){
    super();
    this.state={

    };
  }
  render(){
    return(
      <div className="App">
        <Header />
        <div className="section-container">
        
          <div className="grey-body-container">
          </div>
          <div className="white-input-section">
            <input className='your-secret-here-1' placeholder= "             What's your deepest, darkest secret?"/>
            <button className='your-secret-here-2' onHover>Tell Me</button>
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
