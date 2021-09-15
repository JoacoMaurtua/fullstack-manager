import React from 'react';
import './ProductList.css';

export default function ProductList({list}) {
  return (
    <div>
      {
        list.data.map((product,index)=>{
          return <p key={index}>{product.title} , <b>{product.price}</b></p>
        })
      }
    </div>
  )
}
