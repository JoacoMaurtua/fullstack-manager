import React from 'react';
import './ProductList.css';
import {useHistory,Link} from 'react-router-dom';
import {AiFillEdit} from 'react-icons/ai';
import {BsFillTrashFill} from 'react-icons/bs'

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
            <b><p>{product.title}</p></b>  
          </Link>
          <div className="icons-conainer">
            <Link to={`/products/${product._id}/edit`} style={{textDecoration:'none',color:'white'}}>
                <AiFillEdit className="icon edit"/>
            </Link>
            <BsFillTrashFill className="icon trash"/>
          </div> 
        </section>
        ))
      }
      <button onClick={event => productPage(event)}>Go Back</button>
    
    </div>
  )
}


