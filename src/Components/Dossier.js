import React, {Component} from 'react';
import './Dossier.css';


class Dossier extends Component{
    constructor(){
        super();
        this.state = {

        }
    }
    render(){
        return(
            <div>
                <section className='background-box'>
                    <div className='top-secret-header'>
                        <p>TOP  SECRETS</p>
                    </div>
                </section>
            </div>
        )
    }
}

export default Dossier