import React from 'react'


const UserProfile = (props) => {
    return (
        <div className='col-6 user-profile'>
            <h1>User Profile</h1>
            <div className='profileList'>
                <ul>
                    <li>User Name :</li>
                    <li>Full Name: </li>
                    <li>Email: </li>
                    <li>Phone: </li>
                    <li>Address: </li>
                </ul>
                <ul className='userProfileDisplay'>
                    <li> {props.userName}</li>
                    <li>{props.fullName}</li>
                    <li>{props.email}</li>
                    <li> {props.phone}</li>
                    <li>{props.address}</li>
                </ul>
            </div>
        </div>
)
}

export default UserProfile;
