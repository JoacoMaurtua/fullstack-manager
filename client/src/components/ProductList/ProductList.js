import React from 'react';
import './ProductList.css';
import {useHistory,Link} from 'react-router-dom';

export default function ProductList({list}) {

  const history = useHistory();

  const productPage = (event) =>{
    history.push('/')
  }

  return (
    <div className="productList-container">
      <h1>List of products</h1>
      {
        list.map((product,index)=>(
        <section className="productList-container--list" key={index}>
          <Link to={`/products/${product._id}`} style={{textDecoration:'none'}}>
            <p>{product.title} , <b>{product.price}$</b></p>
          </Link> 
        </section>
        ))
      }
      <button onClick={event => productPage(event)}>Go Back</button>
    </div>
  )
}


