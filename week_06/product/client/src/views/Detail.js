import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link } from '@reach/router';
const Detail = (props) => {
    const [product, setProduct] = useState({})
    useEffect(() => {
        axios.get("http://localhost:8000/api/products/" + props.id)
            .then(res => setProduct({
                ...res.data
            }))
    }, )
    return (  
        <div>
            <p><Link to ={`/products/edit/${product._id}`}>Edit</Link></p> 
            <p>Title: {product.title}</p>
            <p>Price: {product.price}</p>
            <p>Description: {product.description}</p>
        </div>
    )
}
export default Detail;

