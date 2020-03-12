import React, {Component} from 'react';
import './Dossier.css';
import Secret from './Secret';


class Dossier extends Component{
    constructor(props){
        super(props);
        this.state = {
            updateSecret: '',
            isEditing: false
        }
    }
    render(){
        console.log(this.props.secrets)
        const secret = this.props.secrets.map(secret => {
            return <Secret
                    secret = {secret}
                    deleteTopSecret = {this.props.deleteTopSecret}
                    editTopSecret = {this.props.editTopSecret}
                    />
        });
            
        return(
            <div>
                <section className='background-box'>
                    <div className='top-secret-header'>
                        <div>TOP  SECRETS</div>
                    </div>
                        <div className="secrets-container">
                            <p className="secrets-list">{secret}</p>
                        </div>  
                </section>
            </div>
        )
    }
}

export default Dossier