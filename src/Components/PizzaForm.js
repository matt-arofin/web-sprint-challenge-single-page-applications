import *  as yup from 'yup';
import '../App.css'
// Pizza form component


function orderPizza(props) {

    const  { submit, change, cancel, disabled } = props;

    return (

        <div>
            <h3>Order Custom Pizza</h3>

            <form id='pizza-form' /* onSubmit={onSubmit} */>
                <label>Name:&nbsp;
                    <input
                        id='name-input'
                        name='name'
                        type='text' // text input
                    />
                </label><br/><br/>
                <label>Size:&nbsp;
                    <select 
                        id='size-dropdown'
                        name='size'
                        // dropdown
                    >
                        <option value='small'>Small</option>
                        <option value='medium'>Medium</option>
                        <option value='large'>Large</option>
                        <option value='extra large'>Extra Large</option>
                    </select>
                </label><br/>
                <div>
                    <p>Choose your toppings:</p>
                    <label>Sausage
                        <input 
                            name='sausage'
                            value='sausage'
                            type='checkbox' // toppings checklist
                        />
                    </label><br/>
                    <label>Chicken
                        <input 
                            name='chicken'
                            value='chicken'
                            type='checkbox' // toppings checklist
                        />
                    </label><br/>
                    <label>Mushroom
                        <input 
                            name='mushroom'
                            value='mushroom'
                            type='checkbox' // toppings checklist
                        />
                    </label><br/>
                    <label>Hot Peppers
                        <input 
                            name='pepper'
                            value='pepper'
                            type='checkbox' // toppings checklist
                        />
                    </label><br/>
                </div><br/>
                
                <label>Special Instructions:&nbsp;
                    <input
                        id='special-text'
                        name='special'
                        type='text' // text input
                    />
                </label><br/><br/>

                <button /* submit={onSubmit} */ disabled={disabled}>Place Order</button>
                <button onClick={cancel}>Clear Form</button>
            </form>
        </div>
    )
}

export default orderPizza