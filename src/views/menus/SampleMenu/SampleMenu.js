import React, { useState } from "react";
import EntryUserInfo from "./entryuserinfo";
import UserInfo from "./userinfo";
import Test from "./test";
import SearchFn from "./searchUserInfo";
import SearchTable from "./searchTable";

const SampleMenu = () => {
  const [idNo, setIdNo] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  let [userData, setUserData] = useState([]);

  const [dropData, setDropData] = useState([
    { id: 1, name: "ID" },
    { id: 2, name: "Name" },
    { id: 3, name: "Email" },
    { id: 4, name: "Phone" },
  ]);

  const [searchData, setSearchData] = useState("");
  const [searchTable, setSearchTable] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const idChange = (e) => {
    let idchk = /^[0-9]+$/;
    if (
      (e.target.value === "" || idchk.test(e.target.value)) &&
      e.target.value.length <= 10
    ) {
      setIdNo(e.target.value);
    } else {
      alert("⚠ Please Enter Number Only ⚠");
    }
  };

  const nameChange = (e) => {
    let namechk = /^[A-Za-z]+$/;
    if (
      (namechk.test(e.target.value) || e.target.value == "") &&
      e.target.value.length <= 10
    ) {
      setName(e.target.value);
    } else if (e.target.value.length <= 10) {
      alert("Please Enter Correct Name");
    } else {
      alert("⚠ Too Long ⚠");
    }
  };
  const emailChange = (e) => {
    // let emailchk = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    // if(emailchk.test(e.target.value)){
    setEmail(e.target.value);
    // } else {
    //     alert( '⚠ Invalid Email Address! ⚠')
    // }
  };
  const phoneChange = (e) => {
    let phchk = /^[0-9]+$/;
    if (
      (phchk.test(e.target.value) || e.target.value == "") &&
      e.target.value.length <= 11
    ) {
      setPhone(e.target.value);
    } else {
      alert("⚠ Wrong Phone Number ⚠");
    }
  };

  const addbtn = () => {
    if (idNo != "" && name != "" && email != "" && phone != "") {
      setUserData([
        ...userData,
        { id: idNo, name: name, email: email, phone: phone },
      ]);
    } else {
      alert("⚠ All fields must be filled ⚠");
    }
  };

  const delbtn = (id) => {
    let data = userData.filter((obj) => id != obj.id);
    setUserData(data);
  };

  const searchChange = (e) => {
    setSearchData(e.target.value);
  };
  console.log(searchData);

  const searchClick = () => {
    let obj = [];

    if (searchData == "") {
      alert("Please Select One");
    } else if (searchData == "1") {
      obj = [
        {
          id: "search ID",
          name: "search ID",
          email: "search ID",
          phone: "search ID",
        },
        {
          id: "search ID",
          name: "search ID",
          email: "search ID",
          phone: "search ID",
        },
      ];
    } else if (searchData == "2") {
      obj = [
        {
          id: "search Name",
          name: "search Name",
          email: "search Name",
          phone: "search Name",
        },
        {
          id: "search Name",
          name: "search Name",
          email: "search Name",
          phone: "search Name",
        },
      ];
    } else if (searchData == "3") {
      obj = [
        {
          id: "search email",
          name: "search email",
          email: "search email",
          phone: "search email",
        },
        {
          id: "search email",
          name: "search email",
          email: "search email",
          phone: "search email",
        },
      ];
    } else {
      obj = [
        {
          id: "search phone",
          name: "search phone",
          email: "search phone",
          phone: "search phone",
        },
        {
          id: "search phone",
          name: "search phone",
          email: "search phone",
          phone: "search phone",
        },
      ];
    }
    setSearchResult(obj);
  };

  return (
    <div>
      <EntryUserInfo
        idNo={idNo}
        name={name}
        email={email}
        phone={phone}
        idChange={idChange}
        nameChange={nameChange}
        emailChange={emailChange}
        phoneChange={phoneChange}
        addbtn={addbtn}
      />
      <SearchFn
        dropData={dropData}
        searchData={searchData}
        searchChange={searchChange}
        searchClick={searchClick}
      />
      <SearchTable searchTable={searchTable} searchResult={searchResult} />

      {/* <UserInfo userData={userData} delbtn={delbtn} /> */}
    </div>
  );
};

export default SampleMenu;
