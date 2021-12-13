import { Link } from "@reach/router";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";

const PetList = (props) =>{
  const [pets, setPets] = useState([]);
  const [loaded, setLoaded] = useState(false);


  useEffect(() => {
    axios.get("http://localhost:8000/api/").then((res) => {
      setPets(res.data.pets);
      setLoaded(true);
    }, [loaded]);
  });
  if (!loaded) return <div>...loading</div>;

  return (
    <div>
      <div className="header">
        <h1>Pet Shelter</h1>
        <Link to={'/new'}>Add a pet to the shelter</Link>
      </div>
    <table>
      <tr>
        <th>Name</th>
        <th>Type</th>
        <th>Actions</th>
      </tr>

      {pets.map((pet, idx)=>{
      return (
        <tr key={idx}>
          <td>{pet.name}</td>
          <td>{pet.type}</td>
          <td><Link to={`/details/${pet._id}`}>Details</Link>|<Link to={`/edit/${pet._id}`}>Edit</Link></td>
        </tr>
      )
      })}
    </table>

    </div>
  )
}

export default PetList;