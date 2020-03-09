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
                <button onClick={()=> this.props.deleteTopSecret(secret.id)} className="delete-button">Delete</button>
                <button 
                onClick={()=> this.props.editTopSecrets(secret.id)} 
                className="edit-button"
                >Edit</button>
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
                               
                            </div>
                        </div>  
                </section>
            </div>
        )
    }
}

export default Dossier