import { CCol, CRow } from "@coreui/react";
import React from "react";

const EmployeeProfileResult = (props) => {
  let { name, deptname, gender, skill } = props;
  return (
    <>
      <CRow style={{ paddingTop: "1rem" }}>
        <CCol>Employee Name</CCol>
        <CCol>{name}</CCol>
      </CRow>
      <CRow style={{ paddingTop: "1rem" }}>
        <CCol>Department</CCol>
        <CCol>{deptname}</CCol>
      </CRow>
      <CRow style={{ paddingTop: "1rem" }}>
        <CCol>Gender</CCol>
        <CCol>{gender}</CCol>
      </CRow>
      <CRow style={{ paddingTop: "1rem" }}>
        <CCol>Skills</CCol>
        <CCol>{skill}</CCol>
      </CRow>
    </>
  );
};

export default EmployeeProfileResult;
