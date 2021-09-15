import React from 'react';
import './ProductList.css';
import {Link} from 'react-router-dom';

export default function ProductList({list}) {
  console.log(list);
  return (

    <div>
      {
        list.map((product,index)=>(
        <div key={index}>
          <Link to={`/products/${product._id}`}>
            <p>{product.title} , <b>{product.price}</b></p>
          </Link> 
        </div>
        ))
      }
    </div>
  )
}
