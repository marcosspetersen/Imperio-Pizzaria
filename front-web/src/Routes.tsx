import { BrowserRouter, Routes as Switch, Route } from "react-router-dom";
import Orders from "./Orders";
import Home from "./Home"
import Navbar from "./Navbar";

function Routes() {
    return (
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" element={<Home />} />
                <Route path="/orders" element={<Orders />} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes;