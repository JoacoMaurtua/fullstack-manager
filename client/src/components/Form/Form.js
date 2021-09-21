import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './Form.css';
import {Link, useParams} from 'react-router-dom';
/* import Swal from 'sweetalert2'; */



export default function Form({create,update}) {
  const {id} = useParams();
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

  const addProducts =()=>{ //FORMA TRADICIONAL
    axios.post('/api/products/new',formInputs)
          .then(res => console.log(res))
          .catch(err => console.log(err))
  } 

  useEffect(()=>{
    if(id){
      axios.get(`/api/product/${id}`)
      .then(res => setFormInputs(res.data.data))  
    }
     
  },[id]); //traer el producto seleccionado

  const updateProduct = () =>{
    axios.put(`/api/products/update/${id}`,formInputs)
         .then(res => console.log(res));
  }

  
  const handleOnSubmit = (event) =>{
    event.preventDefault();
    if(id){
      updateProduct();
    }else{
      addProducts();
    }
  }

  const {title,price,description} = formInputs;

  return (
    <div className = "form-container">
      {
        create?<h2>Create Products</h2>:update?<h2>Update Products</h2>:''
      }
      
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
        {
          create? <button type="submit">Create</button>:''
        }
        {
          update? <button type="submit">Update</button>:''
        }

        <Link to={`/products`} style={{textDecoration:'none'}}>
          <p>Look at the current list!</p>
        </Link>
      </form>
   
    </div>
  )
}
