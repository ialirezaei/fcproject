import React from 'react';
import './Controls.css'
import Builder from './Builder/Builder';


const products = [
    { title: 'Product 1', type: 'product1' },
    { title: 'Product 2', type: 'product2' },
    { title: 'Product 3', type: 'product3' },
    { title: 'Product 4', type: 'product4' },
    { title: 'Product 5', type: 'product5' },
    { title: 'Product 6', type: 'product6' },
    { title: 'Product 7', type: 'product7' },
]


const Controls = (props) => {
    return (
        <div className="controls">
            <div>
                <p>
                    TotalPrice :{props.price}
                </p>
            </div>
            {
                products.map((product, index) => {
                    return (
                        <Builder key={index} title={product.title} type={product.type} 
                            add={() => props.productAdd(product.type)} remove={() => props.productRemove(product.type)} />
                    )
                })
            }
        </div>

    )

}

export default Controls;