import React, { useState, useEffect } from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Form from './Components/PizzaForm';
import schema from './formSchema';
import Order from './Components/Order';
import axios from 'axios';
import * as yup from 'yup';
import './App.css';

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
  size: '',
  sausage: false,
  chicken: false,
  mushroom: false,
  peppers: false,
  special: ''
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

  const [disabled, setDisabled] = useState(initialDisabled);

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
      special: formValues.special.trim()
    }
    postNewOrder(newOrder)
  };

  const onChange = (name, value) => {
    validate(name, value)
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
      .then(res => {setOrders(res.data)})
      .catch(handleErrors);
  }

  // Validation helper
  const validate = (name, value) => {
    yup.reach(schema, name).validate(value)
      .then(() => setFormErrors(setFormErrors({...formErrors, [name]: ""})))
      .catch(err => console.error(err))
  }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // useEffect(() => getOrders(), []);

  // useEffect(() => schema.isValid(formValues).then(valid => setDisabled(!valid), [formValues]))

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
              clear={resetForm}
              disabled={disabled}
              values={formValues}
              errors={formErrors}
            />
          </Route>
          <Route exact path="/success">
            <Order 
              order={orders}
            />
          </Route>
        </Switch>
      </main>
    </div>
  );
};
export default App;
