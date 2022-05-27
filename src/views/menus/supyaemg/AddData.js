import React from 'react'
import {CCol,CRow,CLabel,CInput} from '@coreui/react';

const AddData = props => {
    return (<>
        <CRow lg="12" style={{margin:"30px 0px 30px 20px"}}>
            <CCol lg="3">
                <CLabel>Student Name</CLabel>
            </CCol>
            <CCol lg="3">
                <CInput type="text" className="bamawl-input" value={props.empName} onChange={props.nameChange} placeholder="Enter Name" />
            </CCol>
        </CRow>
    </>
    ); 
}
export default AddData;