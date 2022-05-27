import React from "react";

const UserRegistration = (props) => {
        return (
            <div className="col-6 user-reg">
            <h1>User Registration</h1>
            <div className=''>
            <label>User Name :</label>
            <input type="text" value={props.userName} onChange={props.userChange} placeholder='username'/>
            <label>Full Name :</label>
            <input type='text' value={props.fullName} onChange={props.fullChange} placeholder='fullname'/>
            <label>Email :</label>
            <input type='text' value={props.email} onChange={props.emailChange} placeholder='Email'/>
            <label>Phone No :</label>
            <input type='text' value={props.phone} onChange={props.phoneChange} placeholder='phone no'/>
            <label>Address :</label>
            <textarea value={props.address} onChange={props.addrChange} placeholder='Address'/>
            </div>
        </div>
)
    }

export default UserRegistration;