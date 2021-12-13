import React, { useState } from "react";
import { Link, navigate } from "@reach/router";
import axios from "axios";

const Add = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [skill, setSkill] = useState([undefined,undefined,undefined]);
  const [errors, setErrors] = useState({});

  const onSubmit = (e) => {
    e.preventDefault();
    axios
        .post("http://localhost:8000/api/new", {
        name,
        type,
        description,
        skill,
      })
      .then((res) => {
        console.log(res);
        navigate("/");
      })
      .catch((err) => {
        setErrors(err.response.data.errors);
      });
  };
  return (
    <div>
      <h1>Pet Shelter</h1>
      <h2>Know a pet needing a home?</h2>
      <Link to="/">back to home</Link>
      <form onSubmit={onSubmit}>
        <p>
          <label>Pet Name</label>
          <br />
          <input type="text" onChange={(e) => setName(e.target.value)} />
          {errors.name ? <p>{errors.name.message}</p> : null}
        </p>
        <p>
          <label>Pet Type</label>
          <br />
          <input type="text" onChange={(e) => setType(e.target.value)} />
          {errors.type ? <p>{errors.type.message}</p> : null}
        </p>
        <p>
          <label>Pet Description</label>
          <br />
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
          {errors.description ? <p>{errors.description.message}</p> : null}
        </p>
        <p>
          <label>Pet skills(optional)</label>
          <br />
          <input type="text" onChange={(e) => {skill[0]=e.target.value;setSkill(skill)}} />
          <input type="text" onChange={(e) => {skill[1]=e.target.value;setSkill(skill)}} />
          <input type="text" onChange={(e) => {skill[2]=e.target.value;setSkill(skill)}} />
        </p>
        <input type="submit" value="Add a pet" />
      </form>
    </div>
  );
};

export default Add;
