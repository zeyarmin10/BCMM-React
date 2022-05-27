import React from 'react'
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
import routes from '../../../routes'

import userData from './userData'
import add from './add'
import subs from './subs'
import { CIcon } from '@coreui/icons-react';
import { cifAU } from '@coreui/icons';


const SubMenu = () => {
  
  // let users = [
  //   { name: 'Bob', gender: 'male', age: 25 },
  //   { name: 'Alice', gender: 'femail', age: 26},
  //   { name: 'Tom', gender: 'male', age: 27}
  //   ];
  //   let result = users.filter(function(user) {
  //   return user.gender == 'male';
  //   });
    // result;
  let result = subs(1,3);
  let styleRed = {
    color: 'red',
    fontWeight: 'bold'
  }

  let styleGreen = {
    fontWeight: 'bold',
    color: 'green'
  }

    console.log(result);

    let gthanCount = userData.filter((data)=> data.age >18).length;
    let gthan = userData.filter(data => data.age > 18);
    let total = userData.length;
    
    

  return (
    <CRow>
      <CCol xs="12">
        <CCard>
          <CCardHeader style={{fontSize:'32px', fontFamily:'Georgia'}}>
            Student ID Cards
          </CCardHeader>
          <CCardBody>
                  <div>
                    Total Student = {total};
                  </div>
                  <div>
                    Age > 18 = {gthanCount};
                  </div>
                  <hr/>

          
          {gthan.map((data, index) => {
              let bg = '';
              if (index%2 == 0){
                bg = 'grey';
              } else {
                bg = 'blue';
              }
              
            return (
              <> 
                {  
                  <>

                  <div className='col' key={index} style={{ fontSize: '20px', fontFamily: 'courier', overflow:'auto', lineHeight: '2.5rem', padding: '2rem', background: `${bg}`, color: 'white', borderRadius: "1rem"}}>
                  <div className='row' style={{width:'40rem'}}>
                  <div className='col'>
                  <CImg src={'/avatars/card.png'}  alt="titleicon" width={28} height={28} />  Student ID
                  </div>
                  <div className='col' styel={{width:'15rem'}}>: {data.id}</div >
                </div>
                <div className='row' style={{width:'40rem'}}>
                  <div className='col'>
                  <CImg src={'/avatars/user.png'}  alt="titleicon" width={28} height={28} />  Name
                  </div>
                  <div className='col'>
                      : {data.student_name}
                  </div>
                </div>
                <div className='row' style={{width:'40rem'}}>
                  <div className='col'>
                  <CImg src={'/avatars/email.png'}  alt="titleicon" width={28} height={28} />  Email
                  </div>
                  <div className='col'>: {data.email}</div>
                </div>
                <div className='row' style={{width:'40rem'}}>
                  <div className='col'>
                  <CImg src={'/avatars/promotion.png'}  alt="titleicon" width={28} height={28} />  Carrer
                  </div>
                  <div className='col'>
                      : {data.career} 
                  </div>
                </div>
                <div className='row' style={{width:'40rem'}}>
                  <div className='col'>
                  <CImg src={'/avatars/telephone.png'}  alt="titleicon" width={28} height={28} />  Phone
                  </div>
                  <div className='col'>
                      : {data.phone}
                  </div>
                </div>
                <div className='row' style={{width:'40rem'}}>
                  <div className='col'>
                  <CImg src={'/avatars/-18.png'}  alt="titleicon" width={28} height={28} />  Age
                  </div>
                  <div className='col'>
                      : {data.age}
                  </div>
                </div>
                </div>
                <hr/>
                </>
              }
              </>
              )
              })
              }
            {
              <>
              <div class="sticky-sm-top">Stick to the top on viewports sized SM (small) or wider</div>
              <div class="sticky-md-top">Stick to the top on viewports sized MD (medium) or wider</div>
              <div class="sticky-lg-top">Stick to the top on viewports sized LG (large) or wider</div>
              <div class="sticky-xl-top">Stick to the top on viewports sized XL (extra-large) or wider</div>
              </>
            }

          </CCardBody>
        </CCard>
      </CCol>
    </CRow>
  )
}

export default SubMenu

const userRegister = (props) => {
  return (
      <div className="reg">
          <input type="text" value={props.userName} onChange={props.handleuserChange} placeholder='username'/>
          <input type='text' value={props.fullName} onChange={props.handlefullChange} placeholder='fullname'/>
          <input type='text' value={props.email} onChange={props.handlefullChange} placeholder='Email'/>
          <input type='text' value={props.phoneno} onChange={props.handlefullChange} placeholder='phone no'/>
          <input type='text' value={props.address} onChange={props.handlefullChange} placeholder='Address'/>
      </div>
  )
}

export default userRegister;

