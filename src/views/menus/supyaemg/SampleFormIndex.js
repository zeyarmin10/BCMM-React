import React, { useState } from 'react'
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow
} from '@coreui/react'
import AddData from './AddData';
import SearchData from './SearchData';
import RadioCheck from './RadioCheck';

const SampleFormIndex = () => {
    const [empName, setEmpName]         = useState("");
    const [itemValue, setItemValue]     = useState("");
    const [saveData, setSaveData]       = useState([]);

    const [deptData, setDeptData] = useState([
        {"id":1, "name": "IT Department"},
        {"id":2, "name": "Infra Department"},
        {"id":3, "name": "Sale Department"},
        {"id":4, "name": "HR Department"},
    ]);

    const [radioData, setRadioData] = useState([
        {"id":1, "name": "Male"},
        {"id":2, "name": "Female"}
    ]);
    const [radioID, setRadioID] = useState("");
    const [radioName, setRadioName] = useState("");

    const [chkData, setChkData] = useState([
        {"id":1, "name": "Java"},
        {"id":2, "name": "PHP"},
        {"id":3, "name": "C#"}
    ]);
    const [chkID, setChkID]         = useState("");
    const [chkName,setChkName]    = useState([]); 

    /** Student Name Change */
    let nameChange=(e)=>{
        setEmpName(e.target.value)
    }

    /** Department Dropdown Function */
    let itemChange=(e)=>{
        setItemValue(e.target.value);
    }

    /** Gender Radio Change Function */
    let radioChange=(id,name)=>{
        setRadioID(id);   
        setRadioName(name);
    }

    /** Skill Checkbox Function */
    let chkChange = (e)=>{
        let value = e.target.value;
        let checked = e.target.checked;
        let skill_list  = [];
        let data = chkData.map(obj =>
            obj.id === parseInt(value) ? { ...obj, is_checked: checked } : obj
        )
        for(let i=0; i<data.length; i++){
            if(data[i].is_checked === true){
                skill_list.push(data[i].name,", ");
            }
        }
        setChkName(skill_list);
        setChkData(data);
    }

    /** Save Function */
    let saveFunction =()=>{
        let obj = [];
        obj["name"] = empName;
        obj["dept"] = itemValue;
        obj["gender"] = radioName;
        obj["skill"] = chkName 

        setSaveData(obj);
    }

    return (
        <CRow>
            <CCol xs="12">
                <CCard >
                    <CCardHeader>Student Register</CCardHeader>
                    <CCardBody >
                        <AddData
                            empName={empName} nameChange={nameChange}
                        />
                        <SearchData
                            deptData={deptData} itemValue={itemValue} itemChange={itemChange}
                        />
                        <RadioCheck
                            radioData={radioData} radioID={radioID} 
                            radioName={radioName} radioChange={radioChange} 
                            chkData={chkData} chkID={chkID}
                            chkChange={chkChange} chkName={chkName}
                            saveFunction={saveFunction} saveData={saveData}
                        />
                    </CCardBody>
                </CCard>
            </CCol>
        </CRow>
    )
}

export default SampleFormIndex
