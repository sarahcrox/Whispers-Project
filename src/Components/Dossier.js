import React, {Component} from 'react';
import './Dossier.css';


class Dossier extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }


    render(){
        console.log(this.props.secrets)
        const secret = this.props.secrets.map(secret => {
            return <div key= {secret.id}>
                <p>{secret.text}</p>
            </div>})
            
            
        return(
            <div>
                <section className='background-box'>
                    <div className='top-secret-header'>
                        <div>TOP  SECRETS</div>
                    </div>
                        <div className="secrets-container">
                            <p className="secrets-list">{secret}</p>
                            <div className="buttons-to-edit">
                                <button className="delete-button">Delete</button>
                                <button className="edit-button">Edit</button>
                            </div>
                        </div>  
                </section>
            </div>
        )
    }
}

export default Dossier