import React from 'react'
import {CCol,CRow,CLabel,CButton, CInputRadio, CInputCheckbox} from '@coreui/react';

const RadioCheck = props => {
    return (<>
        <CRow lg="12" style={{margin:"0px 0px 30px 20px"}}>
            <CCol lg="3" style={{marginRight:"20px"}}>
                <CLabel>Gender</CLabel>
            </CCol>
            {
                props.radioData.map((i, index) => {
                    return (
                        <CCol lg="2" key={index}>

                            <CInputRadio
                                name={i.name}
                                value={i.id}
                                checked={props.radioID === parseInt(i.id) ? true : false}
                                onChange={()=>props.radioChange(i.id,i.name)}
                            />
                            <CLabel>{i.name}</CLabel>
                        </CCol>
                    )
                })
            }
        </CRow>
        <CRow lg="12" style={{margin:"0px 0px 30px 20px"}}>
            <CCol lg="3" style={{marginRight:"20px"}}>
                <CLabel>Skill</CLabel>
            </CCol>
            {props.chkData != "" && 
                props.chkData.map((data,index)=>{ 
                    return(
                        <CCol lg="2" key={index}>
                            <CInputCheckbox 
                                key={index} //id={"skill"+ data.id} 
                                value={data.id} 
                                checked={data.is_checked == true} 
                                onChange={props.chkChange} 
                            />
                            <CLabel>{data.name}</CLabel>
                        </CCol>
                    ) 
                })
            }
        </CRow>
        <CRow lg="12" style={{margin:"0px 0px 30px 20px"}}>
            <CCol lg="3"></CCol>
            <CCol lg="2">
                <CButton className="add-btn" onClick={props.saveFunction}>Save</CButton>
            </CCol>

        </CRow>
        <hr/>
        <CRow lg="12" style={{margin:"0px 0px 30px 20px"}}>
            <CCol lg="3"><CLabel>Student Name is:</CLabel></CCol>
            <CCol>
                <CLabel style={{color:"blue"}}>{props.saveData.name}</CLabel>
            </CCol>
        </CRow>
        <CRow lg="12" style={{margin:"0px 0px 30px 20px"}}>
            <CCol lg="3"><CLabel>Student Dept is:</CLabel></CCol>
            <CCol>
                <CLabel style={{color:"blue"}}>{props.saveData.dept}</CLabel>
            </CCol>
        </CRow>
        <CRow lg="12" style={{margin:"0px 0px 30px 20px"}}>
            <CCol lg="3"><CLabel>Student Gender is:</CLabel></CCol>
            <CCol>
                <CLabel style={{color:"blue"}}>{props.saveData.gender}</CLabel>
            </CCol>
        </CRow>
        <CRow lg="12" style={{margin:"0px 0px 30px 20px"}}>
            <CCol lg="3"><CLabel>Student Skill are:</CLabel></CCol>
            <CCol>
                <CLabel style={{color:"blue"}}>{props.saveData.skill}</CLabel>
            </CCol>
        </CRow>
    </>
    ); 
}
export default RadioCheck;