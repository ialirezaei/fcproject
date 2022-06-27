import React from "react";
import Controls from "../../components/Controls/Controls";

import Wrapper from "../../hoc/Wrapper";

const prices = {
    product1: 52,
    product2: 42,
    product3: 62,
    product4: 72,
    product5: 12,
    product6: 32,
    product7: 92,

}

class Shopping extends React.Component {
    state = {
        products: {
            product1: 0,
            product2: 0,
            product3: 0,
            product4: 0,
            product5: 0,
            product6: 0,
            product7: 0,
        },
        totalPrice: 0,
    }
    addProductHandler = (type) => {
        const prevCount = this.state.products[type]
        const updatedCount = prevCount + 1;
        const updatedProducts = {
            ...this.state.products,
        }
        updatedProducts[type] = updatedCount;
        const priceAdd = prices[type]
        const prevPrice = this.state.totalPrice;
        const newPrice = prevPrice + priceAdd;
        this.setState({
            totalPrice: newPrice,
            products: updatedProducts,
        })
    }
    removePrice = (type) => {
        const prevCount = this.state.products[type]
        const updatedCount = prevCount - 1;
        const updatedProducts = {
            ...this.state.products,
        }
        updatedProducts[type] = updatedCount;
        const priceRemove = prices[type]
        const prevPrice = this.state.totalPrice;
        const newPrice = prevPrice - priceRemove;
        this.setState({
            totalPrice: newPrice,
            products: updatedProducts,
        })

    }
    render() {

        return (
            <Wrapper>
                <div>
                    <Controls productAdd={this.addProductHandler} productRemove={this.removePrice} price={this.state.totalPrice} />
                </div>
            </Wrapper>
        );
    }
}

export default Shopping