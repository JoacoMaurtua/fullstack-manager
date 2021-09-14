import React, {useState} from 'react';
import axios from 'axios';
import './Form.css';

export default function Form() {

  const [formInputs,setFormInputs] = useState({
    title:'',
    price:'',
    description:''
  });

  const handleOnChange =(event) =>{
    const {name,value} = event.target;
    setFormInputs({
      ...formInputs,
      [name]:value
    })
  }

  

  const {title,price,description} = formInputs;

  return (
    <div className = "form-container">
      <h2>Product Manager</h2>
      <form className = "form-container--form">
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
      </form>
    </div>
  )
}
