import React, {useEffect,useState} from 'react';
import axios from 'axios';

export default function Detail({item}) {
  const [product, setProduct] = useState({});
  
  useEffect(()=>{
    axios.get('/product/' + item.id)
          .then(res => setProduct({
            ...res.data
          }))
  },[item.id]);

  return (
    <div>
      <h1>Product properties</h1>
      <p>Ttitle: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
    </div>
  )
}
