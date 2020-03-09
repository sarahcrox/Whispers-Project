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
    }
    this.addTopSecret = this.addTopSecret.bind(this)
    this.savedSecret = this.savedSecret.bind(this)
    this.deleteTopSecret = this.deleteTopSecret.bind(this)
  }

componentDidMount(){
  axios.get('/api/top-secrets').then(res => {
    console.log(res.data)
    this.setState({
      secrets: res.data
    })
  })
}
addTopSecret(secrets){
  axios.post('/api/top-secrets', {secrets})
  .then(res => {
    this.setState({
      secrets: res.data
    })
  })
}
savedSecret(id, newSecret){
  axios.put(`/api/top-secrets/${id}`, {secrets: newSecret})
  .then(res =>{
    this.setState({
      secrets: res.data
    })
  })
}
deleteTopSecret(id){
  axios.delete(`/api/top-secrets/${id}`)
  .then(res =>{
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
            <input className='your-secret-here-1' placeholder= "             What's your secret?"/>
            <button className='your-secret-here-2'>Tell Me</button>
          </div>
        </div>
        <LipsAreSealed 
          addTopSecret={this.addTopSecret}
          onClick={this.componentDidMount}
        />
          <div className="grey-body-container">
          </div>
        <Dossier 
         savedSecret={this.savedSecret}
         deleteTopSecret={this.deleteTopSecret}
         secrets={this.state.secrets}
         />
        <div className="secret-answers">
        </div>
      </div>
    )
  }
}

export default App;
