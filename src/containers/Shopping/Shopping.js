import React from "react";
import Controls from "../../components/Controls/Controls";

import Wrapper from "../../hoc/Wrapper";
import Modal from "../../components/UI/Modal/Modal";
import Order from "../../components/Order/Order";
import axios from '../../axios-order'
import Loader from "../../components/UI/Loader/Loader";
import { Navigate, useNavigate } from "react-router-dom";

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
        products: null,
        totalPrice: 0,
        purchased: false,
        loading: false,
    }

    componentDidMount() {

        axios.get('/prouduct.json').
            then((res) => {
                console.log(res);
                this.setState({ products: res.data })
            })
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
    purchasedHandler = () => {
        this.setState({
            purchased: !this.state.purchased,
        })
    }
    modalCloseHandler = () => {
        this.setState({
            purchased: false,
        })
    }
    purchasedContinueHandler = () => {
        useNavigate("/success");
        // this.setState({ loading: true })
        // const order = {
        //     products: this.state.products,
        //     price: this.state.price,
        //     customer: {
        //         name: 'ali',
        //         email: 'ali@mail.com'
        //     }
        // }

        // axios.post('/orders.json', order)
        //     .then((res) => {
        //         console.log(res);
        //         this.setState({ loading: false, purchased: false })
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         this.setState({ loading: false, purchased: false })

        //     })
    }
    render() {
        let control = <Loader />
        let order = null
        if (this.state.products) {
            order = <Order products={this.state.products} price={this.state.totalPrice} continue={this.purchasedContinueHandler}
                cancel={this.modalCloseHandler} totalPrice={this.state.totalPrice} />
            control = <Controls productAdd={this.addProductHandler} productRemove={this.removePrice} price={this.state.totalPrice} order={this.purchasedHandler} />
        }

        if (this.state.loading) {
            order = <Loader />
        }
        return (
            <Wrapper>
                <div>
                    <Modal show={this.state.purchased} modalClose={this.modalCloseHandler}>
                        {order}
                    </Modal>
                    {control}
                </div>
            </Wrapper>
        );
    }
}

export default Shopping