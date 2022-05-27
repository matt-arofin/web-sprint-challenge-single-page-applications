import *  as yup from 'yup';
// Pizza form component


function orderPizza(props) {

    return (

        <div>
            <h3>Order Custom Pizza</h3>

            <form id='pizza-form'>
                <label>
                    <input 
                        id='name-input'
                        name='name'
                        type='text' // text input
                    />
                </label>
                <label>
                    <input 
                        id='size-dropdown'
                        name='name'
                        type='text' // dropdown
                    />
                </label>
                <label>
                    <input 
                        name='name'
                        type='text' // toppings checklist
                    />
                </label>
            </form>
        </div>
    )
}

export default orderPizza