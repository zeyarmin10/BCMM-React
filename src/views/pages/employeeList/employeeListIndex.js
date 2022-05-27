import React from "react";
import NavBar from "../navbar/navbar";
import { Employee } from "../data/employee";
import { useHistory } from "react-router-dom";

const EmpList = () => {
  const history = useHistory();
  const detailClick = (data) => {
    history.push("/empDetail", {
      data: data,
      //   username: data.username,
      //   fullname: data.fullname,
      //   email: data.email,
      //   ph_no: data.ph_no,
      //   address: data.address,
    });
  };
  return (
    <>
      <NavBar />
      <table className="table">
        <thead>
          <tr>
            <th>No</th>
            <th>Username</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {Employee.map((data) => {
            return (
              <>
                <tr>
                  <td>{data.id}</td>
                  <td>{data.username}</td>
                  <td>{data.fullname}</td>
                  <td>{data.email}</td>
                  <td className="detailBtn" onClick={() => detailClick(data)}>
                    Detail
                  </td>
                </tr>
              </>
            );
          })}
        </tbody>
      </table>
    </>
  );
};
export default EmpList;
