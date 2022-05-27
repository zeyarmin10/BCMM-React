import React, { useState } from "react";
import DataTable from "./dataTable";
import DetailInfo from "./detailInfo";

let EditMenu = () => {
  const [detailData, setDetailData] = useState([
    { id: 1, name: 'su', email: "su@gmail.com", phone: "09678875" },
    { id: 2, name: "aung aung", email: "aung@gmail.com", phone: "09678875" },
    { id: 3, name: "ko ko", email: "ko@gmail.com", phone: "09678875" },
    { id: 4, name: "aye aye", email: "aye@gmail.com", phone: "09678875" },
  ]);
  const [displayData, setDisplayData] = useState([]);

  let detailClick = (data) => {
    setDisplayData(data);
  };
  let resetClick = ()=> {
      setDisplayData({ id: '', name: '', email: "", phone: "" })
  }

  return (
    <div>
      <h1>Edit Data</h1>
      <hr />
      <DataTable detailData={detailData} detailClick={detailClick} />
      <DetailInfo displayData={displayData} resetClick={resetClick} />
    </div>
  );
};

export default EditMenu;
