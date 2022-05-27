import React, { useState } from 'react';

let Test = props => {
    let {name, price} = props;
    return(
        <li>
            {name}
            {price}
            <button >ADD</button>
        </li>
    )
}

export default Test;