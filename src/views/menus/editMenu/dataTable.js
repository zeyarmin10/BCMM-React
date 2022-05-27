import { CImg } from "@coreui/react";
import React from "react";

let DataTable = (props) => {
  let { detailData, detailClick } = props;

  return (
    <table className="table table-strip">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Detail</th>
        </tr>
      </thead>
      <tbody>
        {/* <tr>
          <td>2022</td>
          <td>Su Su</td>
          <td>su@bcmm.com</td>
          <td>09899999999</td>
          <td>
            <CImg
              src={"/avatars/detail.png"}
              alt="titleicon"
              width={30}
              height={30}
              style={{ marginLeft: "5px", padding: "5px", cursor: "pointer" }}
            />
          </td>
        </tr>
        <tr>
          <td>2023</td>
          <td>Yu Yu</td>
          <td>yu@bcmm.com</td>
          <td>09899999998</td>
          <td>
            <CImg
              src={"/avatars/detail.png"}
              alt="titleicon"
              width={30}
              height={30}
              style={{ marginLeft: "5px", padding: "5px", cursor: "pointer" }}
            />
          </td>
        </tr>
        <tr>
          <td>2024</td>
          <td>Chit Su</td>
          <td>chitsu@bcmm.com</td>
          <td>09899999997</td>
          <td>
            <CImg
              src={"/avatars/detail.png"}
              alt="titleicon"
              width={30}
              height={30}
              style={{ marginLeft: "5px", padding: "5px", cursor: "pointer" } }
            />
          </td>
        </tr>
        <tr>
          <td>2025</td>
          <td>Aung Bu</td>
          <td>aungbu@bcmm.com</td>
          <td>09899999996</td>
          <td>
            <CImg
              src={"/avatars/detail.png"}
              alt="titleicon"
              width={30}
              height={30}
              style={{ marginLeft: "5px", padding: "5px", cursor: "pointer" }}
            />
          </td>
        </tr> */}
        {detailData.length > 0 &&
          detailData.map((data) => {
              return (
                <tr>
                    <td>{data.id}</td>
                    <td>{data.name}</td>
                    <td>{data.email}</td>
                    <td>{data.phone}</td>
                    <td>
                    <CImg
                        src={"/avatars/detail.png"}
                        alt="titleicon"
                        width={30}
                        height={30}
                        style={{
                        marginLeft: "5px",
                        padding: "5px",
                        cursor: "pointer",
                        }}
                        onClick={() => detailClick(data)}
                    />
                    </td>
                </tr>
              )
          })}
      </tbody>
    </table>
  );
};

export default DataTable;
