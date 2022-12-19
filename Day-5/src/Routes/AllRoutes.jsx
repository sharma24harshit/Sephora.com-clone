import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Adminpage from "./AdminPage";
import ProductsPage from "./ProductsPage";
import SingleProductPage from "./SingleProductPage";
import { AuthContext } from "../AuthContext/AuthContext";
import { useContext } from "react";
import CartPage from "./CartPage";
function AllRoutes(){
    const {baseUrl} = useContext(AuthContext);
    return (
        <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/login"  element={<Login/>} />
            <Route path="/admin"  element={<Adminpage/>} />
            <Route  path="/products"  element={<ProductsPage/>} />
            <Route  path="/products/:id"  element={<SingleProductPage/>} />
            <Route  path="/cart"  element={<CartPage/>} />
        </Routes>
    )
}

export default AllRoutes