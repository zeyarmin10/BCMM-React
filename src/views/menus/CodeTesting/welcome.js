import React, { useState } from "react";
import CodeTesting from "./codeTesting";    
function welcome (props) {
    return <>
        <div>
            <h1> Hello ! {props.name}</h1>
        </div>
    </>
}

export default welcome;