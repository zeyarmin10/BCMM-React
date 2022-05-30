import React, { useEffect, useState } from "react";
import NavBar from "../navbar/navbar";
import { Employee } from "../data/employee";
import { useHistory } from "react-router-dom";
import axios from "axios";

const UserList = () => {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios.get("https://reqres.in/api/users", {
        params: { page: 1 },
      });
      console.log(result);
      if (result.status === 200) {
        setUserList(result.data.data);
      }
    })();
  }, []);

  const history = useHistory();
  const userClick = (data) => {
    history.push("/userDetail", {
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
      <h1>User List</h1>
      <table className="table">
        <thead>
          <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Avator</th>
          </tr>
        </thead>
        <tbody>
          {userList.length > 0 &&
            userList.map((data) => {
              return (
                <tr key={data.id}>
                  <td>{data.id}</td>
                  <td>{data.first_name}</td>
                  <td>{data.last_name}</td>
                  <td>{data.email}</td>
                  <td className="detailBtn" onClick={() => userClick(data)}>
                    <img src={data.avatar} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </>
  );
};
export default UserList;
