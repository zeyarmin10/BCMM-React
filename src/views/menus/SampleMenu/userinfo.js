import React, { useState } from "react";
import {
    CImg 
} from '@coreui/react'

const UserInfo = (props) => {
  return (
    <div>
      {/* <table className="table-primary table-style">
        <thead>
          <tr>
            <th scope="col">ID</th>
            <th scope="col">Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {props.userData.map((data, index) => {
            return (
              <tr className="table-info" key={index}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.phone}</td>
                <td>
                  <CImg  onClick={()=>props.delbtn(data.id)}
                    src={"/avatars/delete.png"}
                    alt="titleicon"
                    width={30}
                    height={30}
                    style={{ marginLeft: "5px", padding: '5px', cursor: 'pointer' }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table> */}
    </div>
  );
};

export default UserInfo;
