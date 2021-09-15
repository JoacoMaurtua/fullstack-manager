import React from 'react';
import './ProductList.css';
import {Link} from 'react-router-dom';

export default function ProductList({list}) {
  return (
    <div>
      {
        list.map((product,index)=>{
          return <Link to ={`/products/${product._id}`}>
            <p key={index}>{product.title} , <b>{product.price}</b></p>
          </Link> /* aqui crear el link hacia el detalle de cada producto */
        })
      }
    </div>
  )
}
