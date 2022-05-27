import React from "react";

const FruitRegister = (props) => {
        return (
            <div className="reg">
                <input type="text" value={props.fruitName} onChange={props.handleChange} placeholder='fruit name'/>
                <input type='text' value={props.fruitPrice} onChange={props.handlePriceChange} placeholder='fruit price'/>
                <button onClick={props.addFruit}> Add Fruit </button>
            </div>
        )
    }

export default FruitRegister;