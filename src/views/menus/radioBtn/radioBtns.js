import { CCol, CLabel, CRow, CInputRadio } from "@coreui/react";
import React from "react";

const RadioBtns = (props) => {
  return (
    <div>
      <CRow style={{ paddingLeft: "2rem" }}>
        {props.radioData.map((data, index) => {
          return (
            <CCol key={index} md="3">
              <CInputRadio
                value={data.id}
                checked={props.radioChk == parseInt(data.id) ? true : false}
                onChange={() => props.radioChange(data.id, data.name)}
              />
              <CLabel>{data.name}</CLabel>
            </CCol>
          );
        })}
        <CCol md="12" className="display-result">
          {props.radioChkRsul != "" && (
            <CLabel>{props.radioChkRsul} is selected</CLabel>
          )}
        </CCol>
      </CRow>
    </div>
  );
};

export default RadioBtns;
