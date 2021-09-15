import React, {useEffect,useState} from 'react';
import './App.css';
import Form from './components/Form/Form';
import ProductList from './components/ProductList/ProductList';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Detail from './components/Detail/Detail';

function App() {
  const [products,setProducts] = useState([]);
  const [loaded,setLoaded] =  useState(false);

  useEffect(()=>{
    axios.get('api/products')
          .then(res => {
            setProducts(res.data.data);
            setLoaded(true)
          });
  },[])

  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path={`/`} exact>
              <Form/>
          </Route>
          <Route path={`/products`}>
            <h1>List of products</h1>
            {
              loaded? <ProductList list={products}/>:''
            } 
          </Route>
          <Route path={`/products/:id`}>
            <Detail /> 
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
