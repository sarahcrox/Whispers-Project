import React, { Component } from 'react'

export default class Reveal extends Component {
    constructor() {
        super()
        this.state = {
            showLips: true
        }
    }
    render() {
        return (
            <div className="secret-container" onClick={() => this.setState({showLips: !this.state.showLips})}>
                {this.state.showLips ? <img src="assets/IMG_1209.PNG" alt= 'Lips' height='220px'/> : <div className="secret-text">{this.props.secret.text}</div>}
                 
            </div>
        )
    }
}
