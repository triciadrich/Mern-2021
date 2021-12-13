import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, navigate } from "@reach/router";

const Edit = (props) => {
  const { id } = props;
  const [name, setName] = useState();
  const [type, setType] = useState();
  const [description, setDescription] = useState();
  const [skill, setSkill] = useState([undefined, undefined,undefined]);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    console.log("getting data");
    axios
      .get("http://localhost:8000/api/" + id)
      .then((res) => {
        setName(res.data.name);
        setType(res.data.type);
        setDescription(res.data.description);
        setSkill(res.data.skill);
      })
      .catch((err) => console.log(err));
  }, [id]);
  const updatePet = (e) => {
    e.preventDefault();
    axios
      .put('http://localhost:8000/api/edit/' + id, {
        name,
        type,
        description,
        skill,
      })
      .then((res) => {
        console.log(res);
        navigate("/")
      
      })
      .catch((err) => {
        console.log (err);
        setErrors(err.response.data.errors);
      });
  };

  return (
    <div>
      <h1>Pet Shelter</h1>
      <h3>Edit {name}</h3>
      <p>
        <Link to="/">Go to home</Link>
      </p>

      <form onSubmit={updatePet}>
        <p>
          <label>Name</label>
          <br />
          <input
            type="text"
            name="name"
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          {errors.name ? <p>{errors.name.message}</p> : null}
        </p>
        <p>
          <label>Type</label>
          <br />
          <input
            type="text"
            name="type"
            value={type}
            onChange={(e) => {
              setType(e.target.value);
            }}
          />
          {errors.type ? <p>{errors.type.message}</p> : null}
        </p>
        <p>
          <label>Description</label>
          <br />
          <input
            type="text"
            name="description"
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
          />
          {errors.description ? <p>{errors.description.message}</p> : null}
        </p>
        <p>
          <label>Skills</label>
          <br />
          <input
            type="text"
            name="skill"
            value={skill[0]}
            onChange={(e) => {
              skill[0] = e.target.value;
              setSkill(skill);
            }}
          />
          <input
            type="text"
            name="skill"
            value={skill[1]}
            onChange={(e) => {
              skill[1] = e.target.value;
              setSkill(skill);
            }}
          />
          <input
            type="text"
            name="skill"
            value={skill[2]}
            onChange={(e) => {
              skill[2] = e.target.value;
              setSkill(skill);
            }}
          />
        </p>
        <input type="submit" value="Edit Pet" />
      </form>
    </div>
  );
};

export default Edit;
