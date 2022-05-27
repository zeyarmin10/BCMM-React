import React from 'react'
import {CCol,CRow,CImg,CLabel,CSelect} from '@coreui/react';

const SearchData = props => {
    return (<>
        <CRow lg="12" style={{margin:"0px 0px 30px 20px"}}>
            <CCol lg="3">
                <CLabel>Select Department</CLabel>
            </CCol>
            <CCol lg="3">
                <CSelect onChange={props.itemChange} value={props.itemValue}>
                  <option key="" value="">---Select Department---</option>
                    {props.deptData != "" &&
                        props.deptData.map((data,index)=>{
                            return(
                                <option key={index} value={data.name}>{data.name}</option>
                            )
                        })
                    }
                </CSelect>
            </CCol>
        </CRow>
    </>
    ); 
}
export default SearchData;