// import React, { Component } from 'react'

// class Reveal extends Component {
//     constructor(){
//         super();
//         this.state = {
//             lipsClicked: false
//         }
//     }

//     checkLips = () => {
//         if (this.state.lipsClicked){
//             this.props.catchPokemon({
//                 name: this.props.pokemon.name,
//                 image: this.props.pokemon.sprites.front_default
//             })
//             this.props.refreshFn()
//                 this.setState({
//                     lipsClicked: false
//                 })
//         }else {
//             this.setState({
//                 lipsClicked: true
//             })
//         }
//     }

//     render() {
//         return (
//             <img 
//                 className="lips-img" 
//                 src= {
//                     this.state.grassClicked ?
//                     this.props.pokemon.sprites.front_default :
//                     "assets/IMG_1209.PNG"
//                 }
//                 alt = {this.props.pokemon.name}
//                 onClick = {this.checkLips}
//             />
//         )
//     }
// }

// export default Reveal