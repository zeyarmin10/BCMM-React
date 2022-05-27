import { CCol, CRow, CSelect, CButton } from "@coreui/react";
import React from "react";

let SearchFn = (props) => {

    let { dropData, searchData, searchChange, searchClick } = props;

    return (
        <div>
            <CRow className="select-box">
                <CCol lg="4">
                <CSelect onChange={searchChange} >
                    <option value=''>--- Please Select ---</option>
                {dropData.map((data,index) => {
                        return (
                            <option value={data.id} key={index} id={data.id}>Search by {data.name}</option>
                        )
                    })}
                </CSelect>
                    {/* <CSelect>
                        <option>Select...</option>
                        <option>Search by ID</option>
                        <option>Search by Name</option>
                        <option>Search by Email</option>
                        <option>Search by Phone</option>
                    </CSelect> */}
                </CCol>
                <CCol lg='2'>
                    <CButton className="search-btn" onClick={searchClick} >Search</CButton>
                </CCol>
            </CRow>
        </div>
    )
}
export default SearchFn;