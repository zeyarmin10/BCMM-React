import React, { useState, useEffect, useLocation } from "react";
import FruitList from "./fruitList";
import FruitRegister from "./fruitRegister";

const Fruit = () => {
  const [fruits, setFruits] = useState([
    {
      name: "Banana",
      price: "500",
    },
    {
      name: "Kiwi",
      price: "1500",
    },
    {
      name: "Lychee",
      price: "1000",
    },
    {
      name: "Watermalone",
      price: "2000",
    },
    {
      name: "Dragon Fruit",
      price: "2500",
    },
    {
      name: "Rambutan",
      price: "3000",
    },
  ]);
  const [fruitName, setFruitName] = useState("");
  const [fruitPrice, setFruitPrice] = useState("");
  const [title, setTitle] = useState("Fruit List");
  useEffect(() => {
    let sPrice = fruits.filter((data) => {
      return data.price === 1000;
    });
    setTimeout(() => {
      setTitle("fruit Data");
    }, 3000);
  }, []);
  const handleChange = (e) => {
    setFruitName(e.target.value);
  };
  const handlePriceChange = (e) => {
    setFruitPrice(e.target.value);
  };
  const addFruit = () => {
    setFruits([...fruits, { name: fruitName, price: fruitPrice }]);
    setFruitPrice([...fruits, { name: fruitName, price: fruitPrice }]);
    setFruitName("");
    setFruitPrice("");
  };

  return (
    <div className="fruitContainer">
      <h1>{title}</h1>
      <FruitList fruits={fruits} />
      <FruitRegister
        fruitName={fruitName}
        fruitPrice={fruitPrice}
        handleChange={handleChange}
        handlePriceChange={handlePriceChange}
        addFruit={addFruit}
      />
    </div>
  );
};

export default Fruit;
