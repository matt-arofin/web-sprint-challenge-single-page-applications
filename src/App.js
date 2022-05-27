import React from "react";
import { Switch, Route, Link } from 'react-router-dom';
import Form from './Components/PizzaForm';

// This should be the homepage 
// Must include:
// Home and Help buttons in the nav that will route to '/' and '/help' respectively
// A 'Pizza?' button on the page that routes to the custom pizza form

/* User Experience Flow:
* 
*/

// Build out shape of form's data
const initialFormValues = {
  name: '', // #name-input
  size: ['small', 'medium', 'large', 'extra large'], // #size-dropdown - dropdown of 4 options
  sausage: false, // checklist (name separately)
  chicken: false,
  // topping 3
  // topping 4
  instructions: '' // #special-text
}

// order button has #order-button

const App = () => {

  console.log("DOM is mounted,  App is running/rendered")



  return (
    <div className='App-container'>
      <header className='App-header'>
      <h1>Bloomtech Eats</h1>
      
      <nav id=''>
        <Link to='/'>Home</Link>
        <Link id='order-pizza' to='/pizza'>Order</Link>
      </nav>
     </header>

      <main>
        <Switch>
          <Route exact path="/">
            <p>Home</p>
          </Route>
          <Route exact path="/pizza">
            <p>Pizza?</p>
            <Form />
          </Route>
        </Switch>
      </main>
    </div>
  );
};
export default App;
