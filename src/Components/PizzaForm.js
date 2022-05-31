import '../App.css'
import{ useHistory } from 'react-router-dom';

// Pizza form component


export default function OrderPizza(props) {

    const  { submit, change, clear, disabled, errors, values } = props;

    const history = useHistory();

    const onSubmit = evt => {
        evt.preventDefault();
        submit().then(history.push('/success'))
    }

    const onChange = evt => {
        const { name, value, checked, type } = evt.target
        const useValue = type === 'checkbox' ? checked : value
        change(name, useValue)
    }


    return (

        <div>
            <h3>Order Custom Pizza</h3>

            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
            </div>

            <form id='pizza-form' onSubmit={onSubmit}>
                <label>Name:&nbsp;
                    <input
                        id='name-input'
                        name='name'
                        type='text' // text input
                        onChange={onChange}
                        value={values.name}
                    />
                </label><br/><br/>
                <label>Size:&nbsp;
                    <select 
                        id='size-dropdown'
                        name='size'
                        onChange={onChange}
                        value={values.size}
                        // dropdown
                    >
                        <option value=''>--Select a size--</option>
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
                            value={values.sausage}
                            type='checkbox' // toppings checklist
                            onChange={onChange}
                        />
                    </label><br/>
                    <label>Chicken
                        <input 
                            name='chicken'
                            value={values.chicken}
                            type='checkbox' // toppings checklist
                            onChange={onChange}
                        />
                    </label><br/>
                    <label>Mushroom
                        <input 
                            name='mushroom'
                            value={values.mushroom}
                            type='checkbox' // toppings checklist
                            onChange={onChange}
                        />
                    </label><br/>
                    <label>Hot Peppers
                        <input 
                            name='pepper'
                            value={values.pepper}
                            type='checkbox' // toppings checklist
                            onChange={onChange}
                        />
                    </label><br/>
                </div><br/>
                
                <label>Special Instructions:&nbsp;
                    <input
                        id='special-text'
                        name='special'
                        value={values.special}
                        type='text' // text input
                        onChange={onChange}
                    />
                </label><br/><br/>

                <button value='submit' disabled={disabled}>Place Order</button>
                <button onClick={clear}>Clear Form</button>
            </form>
        </div>
    )
}
