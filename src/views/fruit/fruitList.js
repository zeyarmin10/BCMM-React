import React from "react";

const FruitList = (props) => {
    return (
          <ul>
                {
                props.fruits.map((fruit,index) => {
                  return (
                    <div key={index}>
                      <li>Fruit Name: {fruit.name}</li>
                      <li>Price :{fruit.price}</li><br/>
                    </div>
                  )
            }  )}
          </ul>
    );
}

export default FruitList;
