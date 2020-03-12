import React, {Component} from 'react';

class Secret extends Component{
    constructor(props){
        super(props);
        this.state={
            updateSecret:'',
            isEditing: false
        }
    }
    toggleEdit = () => {
        this.setState({
            isEditing: !this.state.isEditing
        })
    }
    editSecret = (value) => {
        let {id} = this.props.secret;
        let {updateSecret} = this.state;
        this.props.editTopSecret(id, {text: updateSecret})
        this.toggleEdit()
    }
    inputHandler = (e) => {
        console.log(this.state.updateSecret)
        this.setState({
            updateSecret: e.target.value
        })
    }


    render(){
        console.log(this.state.isEditing)
        return(
            <div>
                {this.state.isEditing ? (
                    <div>
                        <input className= 'input-box' onChange={(e) => this.inputHandler(e)}/>
                        <button className= "submit-button" onClick={this.editSecret}>Submit</button>
                    </div>
                ):( 
                    <div>
                        <p>{this.props.secret.text}</p>
                        <button onClick={()=> this.props.deleteTopSecret(this.props.secret.id)} className="delete-button">Delete</button>
                        <div className= 'edit-button-div'>
                            
                            <button 
                            onClick={() => this.toggleEdit()} 
                            className="edit-button">Edit</button>
                        </div>
                    </div>
                )}
            </div>
        )
    }
};

export default Secret;