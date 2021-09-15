import React, {useEffect,useState} from 'react';
import axios from 'axios';
import { useHistory, useParams } from 'react-router-dom';


export default function Detail() {
  const [product, setProduct] = useState([]);
  const {id} = useParams(); //extraer de la ruta url el id
  const history = useHistory(); //redireccionar de una pagina a otra
 

  useEffect(()=>{
    axios.get(`/api/product/${id}`)
          .then(res => setProduct(res.data.data))   
  },[id]);

  console.log("Producto", product);
  const productPage = (event) =>{
    history.push("/products")
  }
  //console.log("id", id)
  //console.log(product);

  return (
    <div>
      <h1>Product details</h1>
      <p>Nombre: {product.title}</p>
      <p>Price: {product.price}</p>
      <p>Description: {product.description}</p>
      <button onClick={(event) => productPage(event)}>Go Back</button>
    </div>
  )
}
