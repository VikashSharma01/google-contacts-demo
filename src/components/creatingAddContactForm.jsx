import React from "react"
import './contacts.css'

const AddNewContacts = ({onInputChange, onFormSubmit}) => (
    <form className = "add-new-contact">

        <h3 className = "enter-details">Enter Contact Details</h3>

        <div className = "forms-input">
            <label htmlFor= "email-address">Email Address</label> 
            <input required type = "email" className= "form-control" name= "email" onChange = {onInputChange} placeholder= "xyz123@gmail.com" />
        </div>

        <div className = "forms-input">
            <label htmlFor="fullName">First Name</label>
            <input required type="name" className="form-control" name="first_name" onChange={onInputChange} placeholder="Enter Here" />
        </div>

        <div className = "forms-input">
            <label htmlFor="fullName">Last Name</label>
            <input required type="name" className="form-control" name="last_name" onChange={onInputChange} placeholder="Enter Here" />
        </div>

        <div className = "forms-input">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input required type="tel" className="form-control" name="phone" onChange={onInputChange} placeholder="+91" />
        </div> 

        <button type="submit" onClick={onFormSubmit} className="submit-btn"> Submit </button>

    </form>
)

export default AddNewContacts;