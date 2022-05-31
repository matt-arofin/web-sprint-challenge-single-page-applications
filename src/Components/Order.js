//  Component showing list of previous orders
//  Add edit or cancel order function

export default function Order(details) {
    return (
        <div className='order-success'>
            <h3>Your pizza is on the way!</h3>
            <div>
                <p>Name: {details.name}</p>
                <p>Pizza size: {details.size}</p>
                {/* <p>Extra toppings:<br/>{details.toppings.map((top, idx) => {
                    <li key={idx}>{top}</li>
                })}</p> */}
            </div>
        </div>
    )
}