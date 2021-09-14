import React from 'react';
import './Form.css';

export default function Form() {
  return (
    <div className = "form-container">
      <h2>Product Manager</h2>
      <form className = "form-container--form">
        <label htmlFor="title">Title</label>
        <input 
            id="title" 
            type="text"
        />

        <label htmlFor="price">Price</label>
        <input 
            id="price" 
            type="number"
        />

        <label htmlFor="description" >Description</label>
        <input
            className="textArea" 
            id="description" 
            type="text"
        />

        <button type="submit">Create</button>
      </form>
    </div>
  )
}
