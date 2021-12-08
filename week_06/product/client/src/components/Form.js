import React, { useState } from 'react'
import axios from 'axios';

const Form = () =>{
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescripton] = useState("");

  const onSubmit = e => {
    e.preventDefault();
    axios.post('http://localhost:8000/api/product',{
    title,
    price,
    description
  })
  .then(res=>console.log(res))
  .catch(err=>console.log(err))
  }

  return(
    <div>
    <form onSubmit={onSubmit}>
      <p>
        <label>Title</label>
        <input type='text' onChange={(e)=>setTitle(e.target.value)}/>
      </p>
      <p>
        <label>Price</label>
        <input type='text' onChange={(e)=>setPrice(e.target.value)}/>
      </p>
      <p>
        <label>Description</label>
        <input type='text' onChange={(e)=>setDescripton(e.target.value)}/>
      </p>
      <p><input type="submit" value="submit"/></p>
    </form>
    </div>
  )
}

export default Form;