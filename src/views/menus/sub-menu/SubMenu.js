import React, { useState } from 'react'
import {
  CBreadcrumb,
  CBreadcrumbItem,
  CBreadcrumbRouter,
  CCard,
  CCardBody,
  CCardHeader,
  CLink,
  CCol,
  CRow,
  CImg
} from '@coreui/react'

import './style.css'
import routes from '../../../routes'

import userData from './userData'
import add from './add'
import subs from './subs'
import { CIcon } from '@coreui/icons-react';
import { cifAU } from '@coreui/icons';
import UserRegistration from './userRegistration'
import UserProfile from './userPorfile'







  const UserRegister = (props) => {    
    
    const [userName, setUserName] = useState("")
    const [fullName, setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [address, setAddress] = useState("")
    const [inputUser, setInuptUser] = useState("")
    const [inputFull, setInputFull] = useState("")
    const [inputEmail, setInputEmail] = useState("")
    const [inputPhone, setInputPhone] = useState("")
    const [inputaddr, setInputAddr] = useState("")

    const userChange = (e) => {
      setUserName(e.target.value);
      setInuptUser(e.target.value);
    }
    
    const fullChange = (e) => {
      setFullName(e.target.value);
      setInputFull(e.target.value);
    
    }
    
    const emailChange = (e) => {
      setEmail(e.target.value);  
      setInputEmail(e.target.value);
    
    }
    const phoneChange = (e) => {
      setPhone(e.target.value);
      setInputPhone(e.target.value);
    }
    const addrChange = (e) => {
      setAddress(e.target.value);
      setInputAddr(e.target.value);
    
    }
    
    
  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader style={{fontSize:'32px', fontFamily:'Georgia'}}>
            User Profile
          </CCardHeader>
          <CCardBody>
              <div className='row main-con'>
                <UserRegistration  
                userName={userName}
                fullName={fullName}
                email={email}
                phone={phone}
                address={address} 
                userChange={userChange}
                fullChange={fullChange}
                emailChange={emailChange}
                phoneChange={phoneChange}
                addrChange={addrChange}
                />
                <UserProfile 
                  userName={inputUser}
                  fullName={inputFull}
                  email={inputEmail}
                  phone={inputPhone}
                  address={inputaddr}
                />
              </div>
          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default UserRegister;
