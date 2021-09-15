import React, {useEffect,useState} from 'react';
import './App.css';
import Form from './components/Form/Form';
import ProductList from './components/ProductList/ProductList';
import axios from 'axios';

function App() {
  const [products,setProducts] = useState([]);
  const [loaded,setLoaded] =  useState(false);

  useEffect(()=>{
    axios.get('api/products')
          .then(res => {
            setProducts(res.data);
            setLoaded(true)
          });
  },[])

  return (
    <div className="App">
      <Form/>
      <hr/>
      {
        loaded? <ProductList list={products}/>:''
      }
    </div>
  );
}

export default App;
