import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Profile = () => {
  const [name, setName] = useState("");
  const location = useLocation();
  useEffect(() => {
    console.log(location.state);
    if (location.state !== undefined) {
      setName(location.state.name);
    }
  });
  return <h2>My name is {name}</h2>;
};

export default Profile;
