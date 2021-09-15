import React, {useState} from 'react';
import axios from 'axios';
import './Form.css';
import {Link} from 'react-router-dom';
/* import Swal from 'sweetalert2'; */

export default function Form() {

  const [formInputs,setFormInputs] = useState({
    title:'',
    price:'',
    description:''
  });

  const handleOnChange = (event) =>{
    const {name,value} = event.target;
    setFormInputs({
      ...formInputs,
      [name]:value
    })
  }

  const addProduct =()=>{ //FORMA TRADICIONAL
    axios.post('/api/products/new',formInputs)
          .then(res => console.log(res))
          .catch(err => console.log(err))
  } 

  /* const addProduct =()=>{
    axios.post('/api/products/new',formInputs)
        .then(res => {
          if(res.data && res.data.data){ //1r dato-> objeto json, 2do data-> propiedad de mi objeto
            setFormInputs()
          } 
        })
  } */

  const handleOnSubmit = (event) =>{
    event.preventDefault();
    addProduct(); 
    console.log(formInputs);
  }

  const {title,price,description} = formInputs;

  return (
    <div className = "form-container">
      <h2>Product Manager</h2>
      <form className = "form-container--form" onSubmit={handleOnSubmit}>
        <label htmlFor="title">Title</label>
        <input 
            id="title" 
            type="text"
            name="title"
            value={title}
            onChange = {handleOnChange}
        />

        <label htmlFor="price">Price</label>
        <input 
            id="price" 
            type="number"
            name="price"
            value={price}
            onChange = {handleOnChange}
        />

        <label htmlFor="description" >Description</label>
        <input
            className="textArea" 
            id="description" 
            type="text"
            name="description"
            value={description}
            onChange = {handleOnChange}
        />

        <button type="submit">Create</button>
        <Link to={`/products`} style={{textDecoration:'none'}}>
          <p>Look at the current list!</p>
        </Link>
      </form>
    </div>
  )
}
