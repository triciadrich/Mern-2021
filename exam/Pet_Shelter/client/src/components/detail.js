import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const Detail = (props) => {
  const [pet, setPet] = useState({});
  useEffect(() => {
    axios.get("http://localhost:8000/api/" + props.id).then((res) =>
      setPet({
        ...res.data,
      })
    );
  });
  const deletePet = (petId) => {
    axios
      .delete("http://localhost:8000/api/del/" + petId)
      .then((res) => {
        navigate("/");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div>
      <h1>Pet Shelter</h1>
      <h3>Details about: {pet.name}</h3>
      <div className="header2">
      <Link to="/">back to home</Link> 
      <button
        onClick={(e) => {
          deletePet(pet._id);
        }}
      >
        Adopt {pet.name}
      </button>
        </div>
      <div className="detail">
        <p>Pet type: {pet.type}</p>
        <p>Description: {pet.description}</p>
        <p>Skills: {pet.skill[0]}, {pet.skill[1]}, {pet.skill[2]}</p>
      </div>
    </div>
  );
};

export default Detail;
