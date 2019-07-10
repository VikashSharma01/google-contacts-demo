import React, { Component } from 'react';
import './contacts.css'

export default class AddContact extends Component {

    state = {
        isHidden: true
        }

    constructor(props) {
        super(props);
        this.state = {
            newContact: {
                id : '',
                first_name: '',
                last_name: '',
                email: '',
                phone: '',
                avatar_url:''
                }
            }
        }

    showAddContactBox = () => {
        this.setState({isHidden: false})
    }

    handleInputChange = (event) => {
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
      )}

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({isHidden:true});
        this.props.onSubmit(this.state.newContact);
    }

    renderForm = () => {
        return(
            <form className = "add-new-contact">

            <h3 className = "enter-details">Enter Contact Details</h3>

            <div className = "forms-input">
                <label htmlFor= "email-address">Email Address</label> 
                <input required type = "email" className= "form-control" name= "email" onChange = {this.handleInputChange} placeholder= "xyz123@gmail.com" />
            </div>

            <div className = "forms-input">
                <label htmlFor="fullName">First Name</label>
                <input required type="name" className="form-control" name="first_name" onChange={this.handleInputChange} placeholder="Enter Here" />
            </div>

            <div className = "forms-input">
                <label htmlFor="fullName">Last Name</label>
                <input required type="name" className="form-control" name="last_name" onChange={this.handleInputChange} placeholder="Enter Here" />
            </div>

            <div className = "forms-input">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input required type="tel" className="form-control" name="phone" onChange={this.handleInputChange} placeholder="+91" />
            </div> 

            <button type="submit" onClick={this.handleSubmit} className="submit-btn"> Submit </button>

    </form>
        )
    }

    renderAddButton = () =>{
        return(
            <button onClick={this.showAddContactBox} className="button_cont"> Add Contact </button>
        )
    }

    render() {
    return(
        <div>
            { this.state.isHidden === false ? this.renderForm(): this.renderAddButton() }
        </div>
        )
    }
}