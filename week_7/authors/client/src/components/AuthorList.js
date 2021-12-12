import { Link } from "@reach/router";
import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


const AuthorList = (props) => {
 const [authors, setAuthors] = useState([]);
 const [loaded, setLoaded] = useState(false);


const deleteAuthor = (authorId) => {
  axios.delete("http://localhost:8000/api/del/" + authorId)
  .then((res) =>{
    setAuthors(authors.filter(author => author._id !== authorId))
  })
  .catch((err) => console.log(err))
}

useEffect(() => {
  axios.get("http://localhost:8000/api/").then((res) => {
    setAuthors(res.data.authors);
    setLoaded(true);
  }, [loaded]);
});
if (!loaded) return <div>...loading</div>;

return(
  <div>
    <h1>Favorite Authors</h1> 
    <Link to={'/new'}>Add an Author</Link>
    <p>
    <table>
      <tr>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Actions</th>
      </tr>
      
        {authors.map((auth,idx)=>{
          return (
          <tr key={idx}>
            <td>{auth.firstName}</td>
            <td>{auth.lastName}</td>
            <td><Link to={`/edit/${auth._id}`}>Edit</Link> | <button
                onClick={(e) => {
                  deleteAuthor(auth._id);
                }}
              >
                Delete
              </button></td>
            </tr>
        )
        })}
        
      
    </table>
    </p>
  </div>
)
}
export default AuthorList;