import React from 'react';

import Wrapper from '../../hoc/Wrapper';
import Button from '../UI/Button/Button';
import './Order.css'

const Order = (props) => {

    const summery = Object.keys(props.products).map((item) => {
        return (
            <li key={item}>
                <p>{item} : {props.products[item]}</p>
            </li>
        )
    })

    return (
        <Wrapper>
            <h3>Order</h3>
            <hr></hr>

            <ul className="Order">
                {summery}
            </ul>
            <hr></hr>

            <p>Total Price: {props.totalPrice}</p>
            <hr></hr>
            <p>Continue?</p>
            <Button btnType="success" click={props.continue}>yes</Button>
            <Button btnType="danger" click={props.cancel}>no</Button>
            <hr></hr>

        </Wrapper>
    )
}

export default Order;
