import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Form from './Components/PizzaForm';
import axios from 'axios'
import './App.css'

// This should be the homepage 
// Must include:
// Home and Help buttons in the nav that will route to '/' and '/help' respectively
// A 'Pizza?' button on the page that routes to the custom pizza form

/* User Experience Flow:
* 
*/

// Build out shape of form's data
const initialFormValues = {
  name: '',
  size: ['small', 'medium', 'large', 'extra large'],
  sausage: false,
  chicken: false,
  mushroom: false,
  peppers: false,
  instructions: ''
}

const initialFormErrors = {
  name: '',
  size: '',
}

const initialDisabled = true;
const initialOrders = [];

const baseURL = 'https://reqres.in/api/orders';

const App = () => {

  console.log("DOM is mounted,  App is running/rendered");

  // State declarations
  const [formValues, setFormValues] = useState(initialFormValues);

  const [formErrors, setFormErrors] = useState(initialFormErrors);

  const [disabled, setDisabled] = useState(true);

  const [orders, setOrders] = useState(initialOrders);

  // Event handlers
  const onSubmit = () => {
    const newOrder = {
      name: formValues.name.trim(),
      size: ['small', 'medium', 'large', 'extra large'].filter(hob => formValues[hob]),
      sausage: formValues.sausage,
      chicken: formValues.chicken,
      mushroom: formValues.mushroom,
      peppers: formValues.peppers,
      instructions: formValues.instructions.trim()
    }
    postNewOrder(newOrder)
  };

  const onChange = (name, value) => {
    setFormValues({...formValues, [name]: value})
  };

  // Promise Helpers
  const handleErrors = err => {
    console.error(err);
  };

  const resetForm = () => {
    setFormValues(initialFormValues);
  };

  // Newtwork Helpers
  // post new order to order list
  const postNewOrder = newOrder => {
    axios.post(baseURL, newOrder)
      .then(res => setOrders(orders.concat(res.data)))
      .catch(handleErrors)
      .finally(resetForm)
  }
  
  // get list of orders 
  const getOrders = () => {
    axios.get(baseURL)
    .then(res => console.log(res.data.data))
    .catch(handleErrors);
  }

  // Validation helper
  const validate = () => {
    
  }

  useEffect(() => getOrders(), []); 

  return (
    <div className='App-container'>
      <header className='App-header'>
      <h1>Bloomtech Eats</h1>
      
      <nav id='App-links'>
        <Link className='link' to='/'>Home</Link>&nbsp;&nbsp;
        <Link id='order-pizza' className='link' to='/pizza'>Order</Link>
      </nav>
     </header>

      <main>
        <Switch>
          <Route exact path="/">
            <p>Home</p>
          </Route>
          <Route exact path="/pizza">
            <p>Pizza?</p>
            <Form 
              submit={onSubmit}
              change={onChange}
              cancel={resetForm}
              disabled={disabled}
              values={formValues}
              errors={formErrors}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
};
export default App;
