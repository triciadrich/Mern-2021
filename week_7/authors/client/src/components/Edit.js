import React, { useEffect, useState } from "react";
import axios from "axios";
import { navigate } from "@reach/router";

const Edit = (props) =>{
  const {id} = props;
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  useEffect(() => {
    console.log("getting data");
    axios.get("http://localhost:8000/api/" + id)
      .then((res) => {
        setFirstName(res.data.firstName);
        setLastName(res.data.lastName);
      
        
        })
      .catch((err) => console.log(err));
  }, [id]);
  const updateAuthor = (e) => {
    e.preventDefault();
    axios.put("http://localhost:8000/api/edit/" + id, {
        firstName,
        lastName
      })
      .then((res) => navigate("/"))
      
  };

  return (
    <div>
      <h1>Update a Product</h1>
      <form onSubmit={updateAuthor}>
        <p>
          <label>First Name</label>
          <br />
          <input
            type="text"
            name="firstName"
            value={firstName}
            onChange={(e) => {
              setFirstName(e.target.value);
            }}
          />
        </p>
        <p>
          <label>Last Name</label>
          <br />
          <input
            type="text"
            name="lastName"
            value={lastName}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </p>
        
        <input type="submit" />
      </form>
      </div>
      )
}

export default Edit;