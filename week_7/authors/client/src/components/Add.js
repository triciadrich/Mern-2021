import React, { useState } from "react";
import { navigate} from "@reach/router";
import axios from "axios";

const Add = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const onSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/new", {
        firstName,
        lastName
      })
      .then (res=>{console.log(res); navigate("/")})
      .catch((err) => console.log(err))
  };

  return (
    <form onSubmit={onSubmit}>
        <p>
            <label>First Name</label><br/>
            <input type="text" onChange = {(e)=>setFirstName(e.target.value)}/>
        </p>
        <p>
            <label>Last Name</label><br/>
            <input type="text" onChange = {(e)=>setLastName(e.target.value)}/>
        </p>
        <input type="submit" value="add"/>
    </form>
  )
}

export default Add;