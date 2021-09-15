import React from 'react';
import './ProductList.css';
import {useHistory,Link} from 'react-router-dom';

export default function ProductList({list}) {

  const history = useHistory();

  const productPage = (event) =>{
    history.push('/')
  }

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
      <button onClick={event => productPage(event)}>Go Back</button>
    </div>
  )
}


