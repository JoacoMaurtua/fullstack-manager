import React, {useEffect,useState} from 'react';
import './UpdateForm.css';
import axios from 'axios';
import { useParams } from 'react-router';
import {Link} from 'react-router-dom';

export default function UpdateForm() {
  const {id} = useParams();
  const [formInputs,setFormInput] = useState({
    title:'',
    price:'',
    description:''
  });

  useEffect(()=>{
    axios.get(`/api/product/${id}`)
          .then(res => setFormInput(res.data.data))   
  },[id]); //traer el producto seleccionado

  const updateProduct = () =>{
    axios.put(`/api/products/update/${id}`,formInputs)
         .then(res => console.log(res));
  }

  const handleOnSubmit =event=>{
    event.preventDefault();
    updateProduct();
  }

  const handleOnChange =event=>{
    const {name,value} = event.target;
    setFormInput({
      ...formInputs,
      [name]:value
    })
  }

  const {title,price,description} = formInputs;

  return (
    <div className = "form-container">
      <h2>Update a product</h2>
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

        <button type="submit">Update</button>
        <Link to={`/products`} style={{textDecoration:'none'}}>
          <p>Look at the current list!</p>
        </Link>
      </form>
    </div>
  )
}
