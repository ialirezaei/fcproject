import React from "react";
import Layout from "./components/Layout/Layout";
import Shopping from "./containers/Shopping/Shopping";
import Checkout from "./containers/Checkout/Checkout";
import MyAccount from "./containers/Account/Account"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

class App extends React.Component {

    render() {
        return (
            <div>
                <Router>
                    <Layout>
                        <Routes>
                            {/* <Switch> */}
                            <Route path="/" element={<Shopping />} />
                            <Route path="/checkout" element={<Checkout />} />
                            <Route path="/myAccount" element={<MyAccount />} />
                            {/* </Switch> */}
                        </Routes>
                    </Layout>
                </Router>
            </div>
        );
    }
}

export default App;