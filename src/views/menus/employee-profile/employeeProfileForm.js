import {
  CButton,
  CCol,
  CInput,
  CInputRadio,
  CLabel,
  CRow,
  CSelect,
  CInputCheckbox,
} from "@coreui/react";
import React from "react";

const EmployeeProfileForm = (props) => {
  let {
    empName,
    inputChange,
    deptData,
    deptSelChange,
    radioData,
    radioChange,
    radioChkRsul,
    chkData,
    chkValue,
    chkResult,
    chkChange,
    resultData,
    btnClick,
  } = props;
  return (
    <>
      <CRow lg="12">
        <CCol lg="4">
          <CLabel>Employee Name</CLabel>
        </CCol>
        <CCol lg="4">
          <CInput type="text" value={empName} onChange={inputChange} />
        </CCol>
      </CRow>
      <CRow lg="12" style={{ paddingTop: "1rem" }}>
        <CCol lg="4">
          <CLabel>Department</CLabel>
        </CCol>
        <CCol lg="4">
          <CSelect value={deptData} onChange={deptSelChange}>
            <option value="">--- Please Select ---</option>
            {deptData.map((data, index) => {
              return (
                <option value={data.name} key={index} id={data.id}>
                  Search by {data.name}
                </option>
              );
            })}
          </CSelect>
        </CCol>
      </CRow>
      <CRow lg="12" style={{ paddingTop: "1rem" }}>
        <CCol lg="4">
          <CLabel>Gender</CLabel>
        </CCol>
        {props.radioData.map((data, index) => {
          return (
            <CCol key={index} lg="1" style={{ paddingLeft: "2rem" }}>
              <CInputRadio
                value={data.id}
                checked={props.radioChk == parseInt(data.id) ? true : false}
                onChange={() => props.radioChange(data.id, data.name)}
              />
              <CLabel>{data.name}</CLabel>
            </CCol>
          );
        })}
        {/* <CCol md="12" className="display-result">
          {props.radioChkRsul != "" && (
            <CLabel>{props.radioChkRsul} is selected</CLabel>
          )}
        </CCol> */}
      </CRow>
      {/* Check Box */}
      <CRow lg="12" style={{ paddingTop: "1rem" }}>
        <CCol lg="4">Skills</CCol>
        {chkData.map((data, index) => {
          return (
            <CCol md="1" key={index} style={{ paddingLeft: "2rem" }}>
              <CInputCheckbox
                value={data.id}
                checked={data.is_checked}
                onChange={chkChange}
              />
              <CLabel>{data.name}</CLabel>
            </CCol>
          );
        })}
      </CRow>
      <CRow lg="5">
        <CButton
          style={{
            margin: "2rem auto",
            border: "1px solid grey",
            backgroundColor: "lightblue",
          }}
          onClick={btnClick}
        >
          Save
        </CButton>
      </CRow>
    </>
  );
};

export default EmployeeProfileForm;
