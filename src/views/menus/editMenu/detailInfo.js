import React from "react";

let DetailInfo = (props) => {
    let {displayData, resetClick} = props;
    return (
        <>
        <div>
            <hr/>
            <h1>User Info</h1>
            <div className="info">
                <span>ID : </span>
                <input className="displayInfo" type={'text'} value={displayData.id}/>
                <span>Username : </span>
                <input className="displayInfo" type={'text'} value={displayData.name}/>
                <span>Email : </span>
                <input className="displayInfo" type={'text'} value={displayData.email}/>
                <span>Phone : </span>
                <input className="displayInfo" type={'text'} value={displayData.phone}/>
            </div>
            <div className="rest-btn-div">
                <button className="btn-reset" onClick={resetClick}>Reset</button>
            </div>
        </div>
        </>
    )
}
export default DetailInfo;