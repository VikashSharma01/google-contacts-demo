import React, { Component } from 'react';
import AddNewContacts from '../components/creatingAddContactForm';
import './contacts.css'

export default class AddContact extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            isHidden: true,
            newContact: {
                id : '',
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                avatar_url:''
            }
        }
        this.showAddContactBox = this.showAddContactBox.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    showAddContactBox() {
        this.setState({isHidden: false})
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        
        let randomAvatar = Math.random().toString(36).substring(2);
        // console.log(randomAvatar);
        let randomid = Math.floor(Math.random() * 1000);

      this.setState(prevState => (
        { 
            newContact: {
             ...prevState.newContact,
             [name]: value,
             avatar_url:`https://robohash.org/${randomAvatar}?size=100x100`,
             id : randomid
            }
        }),
            // ()=>console.log(this.state.newContact)
      )}

    handleSubmit(e) {
        e.preventDefault();
        this.setState({isHidden:true});
        this.props.onSubmit(this.state.newContact);
    }

    renderForm() {
        return(
            <div>
                <AddNewContacts 
                onFormSubmit={this.handleSubmit} 
                onInputChange={this.handleInputChange} 
                />
            </div>
        )
    }

    render() {

        return(
            <div>
                { this.state.isHidden === false ? this.renderForm(): <button onClick={this.showAddContactBox} className="button_cont"> Add Contact </button>}
            </div>
            )
    }
}