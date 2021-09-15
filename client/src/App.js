import React, {useEffect,useState} from 'react';
import './App.css';
import Form from './components/Form/Form';
import ProductList from './components/ProductList/ProductList';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

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
      <Router>
        <Switch>
          <Route path={`/`} exact>
              <Form/>
          </Route>
          <Route path={`/list`}>
            <h1>hello</h1>
            {
              
              loaded? <ProductList list={products}/>:''
            }
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
