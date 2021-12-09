import React from 'react'


const ProductList = (props) => {
    return (
        <div>
          <h2>All products</h2>
            {props.products.map((prod, idx)=>{
                return <p key={idx}>{prod.title}, {prod.price},{prod.description}</p>
            })}
        </div>
    )
}
export default ProductList;