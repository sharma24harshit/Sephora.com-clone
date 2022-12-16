import { Route,Routes } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Adminpage from "./AdminPage";
function AllRoutes(){
    return (
        <Routes>
            <Route path="/"  element={<Home/>} />
            <Route path="/login"  element={<Login/>} />
            <Route path="/admin"  element={<Adminpage/>} />
        </Routes>
    )
}

export default AllRoutes